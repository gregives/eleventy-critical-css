const path = require("path");

let maxListeners;
let currentListeners = 1;

const functionsToProcess = [];

const startProcessing = async () => {
  if (maxListeners === undefined) {
    maxListeners = process.getMaxListeners();
  }

  if (currentListeners < maxListeners) {
    const entry = functionsToProcess.pop();

    if (entry) {
      currentListeners++;
      const [resolve, reject, functionToProcess] = entry;

      functionToProcess()
        .then(resolve)
        .catch(reject)
        .finally(() => {
          currentListeners--;
          startProcessing();
        });
    }
  }
};

const processFunction = async (functionToProcess) => {
  const promise = new Promise((resolve, reject) => {
    functionsToProcess.push([resolve, reject, functionToProcess]);
  });

  startProcessing();
  return await promise;
};

module.exports = function (config, options) {
  let critical;

  config.on("eleventy.before", async () => {
    critical = await import("critical");
  });

  config.addTransform("critical-css", async function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      const functionToProcess = async () => {
        const { html } = await critical.generate({
          assetPaths: [path.dirname(outputPath)],
          base: config.dir?.output ?? "_site",
          html: content,
          inline: true,
          rebase: ({ originalUrl }) => originalUrl,
          ...options,
        });

        return html;
      };

      return await processFunction(functionToProcess);
    }

    return content;
  });
};

const path = require("path");

module.exports = function (config, options) {
  let critical;

  config.on("eleventy.before", async () => {
    critical = await import("critical");
  });

  config.addTransform("critical-css", async function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      const { html } = await critical.generate({
        assetPaths: [path.dirname(outputPath)],
        base: config.dir.output ?? "_site",
        html: content,
        inline: true,
        rebase: ({ originalUrl }) => originalUrl,
        ...options,
      });

      return html;
    }

    return content;
  });
};

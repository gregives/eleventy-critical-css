const path = require("path");
const critical = require("critical");

module.exports = function (config, options) {
  config.addTransform("critical-css", async function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      const { html } = await critical.generate({
        assetPaths: [path.dirname(outputPath)],
        base: this._config.dir.output,
        html: content,
        inline: true,
        minify: false,
        rebase: ({ originalUrl }) => originalUrl,
        ...options,
      });

      return html;
    }
    return content;
  });
};

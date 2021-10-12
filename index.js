const path = require("path");
const critical = require("critical");

module.exports = function (config, options) {
  config.addTransform("critical-css", async function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      // Config will change from Eleventy v1.0.0
      const outputDir =
        (this._config && this._config.dir && this._config.dir.output) ||
        (config && config.dir && config.dir.output) ||
        path.dirname(outputPath);

      // Generate HTML with critical CSS
      try {
        const { html } = await critical.generate({
          assetPaths: [path.dirname(outputPath)],
          base: outputDir,
          html: content,
          inline: true,
          rebase: ({ originalUrl }) => originalUrl,
          ...options,
        });

        return html;

      } catch (err) {
        console.log('HTML with critical CSS generation failed due to ' + err);
        return content;
      }
    }

    return content;
  });
};

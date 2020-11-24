const path = require("path");
const critical = require("critical");

module.exports = function (config, options) {
    config.addTransform("critical-css", async function (content, outputPath) {
        if (outputPath.endsWith(".html")) {
            const { html } = await critical.generate({
                ...{
                    base: path.dirname(outputPath),
                    html: content,
                    inline: true,
                    minify: false,
                    rebase: ({ originalUrl }) => originalUrl,
                },
                ...options,
            });

            return html;
        }
        return content;
    });
};

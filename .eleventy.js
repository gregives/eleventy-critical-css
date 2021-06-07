const criticalCss = require(".");

module.exports = (eleventyConfig) => {
  eleventyConfig.setTemplateFormats(["html", "css"]);
  eleventyConfig.addPlugin(criticalCss);

  return {
    dir: {
      input: "test",
      output: "dist",
    },
  };
};

# eleventy-critical-css

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Prettier][prettier-src]][prettier-href]

Eleventy plugin to extract and inline critical (above-the-fold) CSS from your HTML templates.

You can easily add this plugin to your Eleventy project **in just two steps** or you can use `index.js` as a reference for your own implementation of critical CSS!

## Get Started

1. Install `eleventy-critical-css`

```sh
npm install eleventy-critical-css --save
```

2. Add the plugin to your Eleventy configuration in `.eleventy.js`

```js
const criticalCss = require("eleventy-critical-css");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(criticalCss);
};
```

## Configuration

This plugin uses [Critical by Addy Osmani](https://github.com/addyosmani/critical) to extract and inline critical from HTML templates i.e. any template with an output path ending in `.html`.

You can pass options to Critical as a second parameter of `addPlugin`:

```js
const criticalCss = require("eleventy-critical-css");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(criticalCss, {
    height: 1080,
    width: 1920,
  });
};
```

You can see all options for Critical in the [GitHub repository](https://github.com/addyosmani/critical#usage).

### Default Options

The default options passed to Critical are:

```js
{
  assetPaths: [path.dirname(outputPath)],
  base: outputDir,
  html: content,
  inline: true,
  rebase: ({ originalUrl }) => originalUrl,
}
```

Where `content` and `outputPath` are the arguments passed to [Eleventy transforms](https://www.11ty.dev/docs/config/#transforms) and `outputDir` is the output directory specified in your [Eleventy configuration](https://www.11ty.dev/docs/config/#output-directory).

### Maximum Concurrency

Node.js will print a warning if more than 10 listeners are added for a particular event. This is a useful default that helps finding memory leaks.

So that you don't see warnings when using eleventy-critical-css, the plugin respects the maximum number of listeners. You can use `process.setMaxListeners()` to increase the concurrency of eleventy-critical-css above the default, but be aware that it may be harder to detect memory leaks in your application as a result.

```js
const criticalCss = require("eleventy-critical-css");

// Increase concurrency to 100
process.setMaxListeners(100);

// Unlimited concurrency
process.setMaxListeners(0);

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(criticalCss);
};
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/eleventy-critical-css/latest.svg
[npm-version-href]: https://npmjs.com/package/eleventy-critical-css
[npm-downloads-src]: https://img.shields.io/npm/dt/eleventy-critical-css.svg
[npm-downloads-href]: https://npmjs.com/package/eleventy-critical-css
[license-src]: https://img.shields.io/npm/l/eleventy-critical-css.svg
[license-href]: https://npmjs.com/package/eleventy-critical-css
[prettier-src]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[prettier-href]: https://github.com/prettier/prettier

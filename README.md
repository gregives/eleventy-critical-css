# eleventy-critical-css

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

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
        minify: true,
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
    base: path.dirname(outputPath),
    html: content,
    inline: true,
    minify: false,
    rebase: ({ originalUrl }) => originalUrl,
}
```

Where `content` and `outputPath` are the arguments passed to [Eleventy transforms](https://www.11ty.dev/docs/config/#transforms).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/eleventy-critical-css/latest.svg
[npm-version-href]: https://npmjs.com/package/eleventy-critical-css
[npm-downloads-src]: https://img.shields.io/npm/dt/eleventy-critical-css.svg
[npm-downloads-href]: https://npmjs.com/package/eleventy-critical-css
[license-src]: https://img.shields.io/npm/l/eleventy-critical-css.svg
[license-href]: https://npmjs.com/package/eleventy-critical-css

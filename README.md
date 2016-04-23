# browser-tap

A wrapper around `tape` that lets you run tests in the browser and see the results in a Chrome Devtools Tab if the extension is installed ([install from Chrome Web Store](https://chrome.google.com/webstore/detail/browser-tap/ncfblaiipckncgeipgmpdioedcdmofei)).

Best used with [`babel-plugin-discard-module-references`](https://github.com/ArnaudRinquin/babel-plugin-discard-module-references)

Links:

* [talk](http://bit.ly/browser-tap-talk) at #londonreact April 2016 Meetup
* [slides](http://bit.ly/browser-tap)
* [medium post](http://bit.ly/browser-tap-post)
* [example](http://bit.ly/browser-tap-example)
* [Chrome Extension](http://bit.ly/browser-tap-extension)

## Concepts

`browser-tap` is just a 3 lines wrapper around [`tape`](https://www.npmjs.com/package/tape) providing the exact same [API](https://www.npmjs.com/package/tape#methods) (might change, see the note below).

By default, `browser-tap` will output the results in the console, exactly like `tape` would do.

If you have the Chrome extension installed, you will be able to control and see a nice output of the test results.

![screenshot](./screenshots/prototype.png)

_Note: For the moment, `tape` relies on nodejs API and is only browser-compliant because it's compiled using `browserify` which provides the necessary polyfills._

_Later, `browser-tap` will probably become a standalone **natively browser compliant** library exposing the exact same API instead of being a wrapper around `tape`._

## Usage

```
npm i -S browser-tap
```

To use it, simply import `browser-tap` instead of `tape` (or use something like [`webpack resolve.alias`](https://webpack.github.io/docs/configuration.html#resolve-alias) to have that done automatically).

## Example

In the [example folder](./example), you'll find a project covering all the major aspects of unit testing a React application. You'll see how simple the configuration is.

## Extension

`browser-tap` value relies greatly in the provided extension. It's not published yet but it's easy to build and install manually. See [its README](./extension/README.md) for guidance.

[Install from Chrome Web Store](https://chrome.google.com/webstore/detail/browser-tap/ncfblaiipckncgeipgmpdioedcdmofei)

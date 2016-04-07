# browser-tap example project

This project demonstrates how to:

* use `babel-plugin-discard-module-references`
    * to drop all `tape` based tests
    * including whitelisting the `react` module
* use `browser-tap` to run tests
    * dev: in the browser
    * CI: in a headless browser (`electron`)
* write tests on React components using `enzyme` and `sinon`

Most interesting files are:

* [`package.json`](./package.json)
    * Shows required depedencies and `npm scripts`
* [`.babelrc`](./.babelrc)
    * usage of `babel-plugin-discard-module-references`
* [`webpack.config.js`](./webpack.config.js)
    * few weird things in order to make `sinon` work in the browser
* [`src/my-component.js`](./src/my-component.js)
    * React component unit testings done right, using `enzyme`

## Scripts

**Serve in dev mode** (includes tests and live reload)

```bash
npm install
npm dev
open http://localhost:8080
```

**Serve production mode** (no tests, optimized but with live reload)

```bash
npm install
npm start # equivalent of NODE_ENV=production npm run dev
```

**Build for production**

```bash
npm install
npm run build
```

You can now simply serve the `public` folder.

**Run tests in CI mode** (in electron)

```
npm install
npm test
```

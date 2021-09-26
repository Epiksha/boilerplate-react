# Simple React Boilerplate

## Quick Setup

* Run `yarn install`
* Run `npx husky add .husky/commit-msg 'npx commitlint --edit $1'` to enable commit linting



## Description

A basic boilerplate leveraging [Webpack](https://webpack.js.org/ "Webpack") to transpile React's JSX syntax to CommonJS code, while ES6+ features to be used such as newer variable types (const and let), async/await, classes and others. SCSS loaders have been implemented, as well as optimization for both production and development builds.

To get started, simply run `npm run setup` and `npm start` (if you don't have Node installed see [NPM's Website](https://www.npmjs.com/get-npm "NPM") to download NPM and read their documentation on getting started). Once complete, your project should be running on localhost:3000 in your browser. If you are using Google Chrome, you can install the [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en "React Dev Tools") and [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en "Redux DevTools") extensions to help with development, though other browser extensions are available as well.

## Scripts

`npm start`: Builds a dev environment using [Webpack Dev Server](https://github.com/webpack/webpack-dev-server "Webpack Dev Server").

`npm test`: Tests your files using [Jest](https://jestjs.io/ "Jest") and [Enzyme](https://www.npmjs.com/package/enzyme "Enzyme").

`npm run setup`: Installs the app (alternatively just use `npm install`).

`npm run build`: Builds using the production configuration, outputting your files to a dynamically generated `dist` folder.

`npm run build:dev`: Builds using the development configuration, without using Webpack Dev Server.

Additionally, Jest provides an option for unit and integration testing. The scripts have been included as follows:

`npm run test:unit`
`npm run test:integration`

## Webpack

### Setup

This boilerplate's [Webpack](https://webpack.js.org/ "Webpack") configuration can be found in `webpack.common.js`, `webpack.dev.js` and `webpack.prod.js`. Webpack additionally leverages the configuration in `.babelrc` to configure [Babel's](https://babeljs.io/ "Babel") transpiling of newer JavaScript (ES6+) to CommonJS.

Images, fonts and scripts will get hashed as part of the production process for cache busting purposes. As a result, a static HTML file would not carry the correct references to assets and scripts, as the hashes will change as a result of each change in code. [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin "HTML Webpack Plugin") is used to overcome this setback by serving `index.html` (based on `src/template.html`) as part of the bundle to dynamically generate the relevant paths to files.

All images are bundled using [file-loader](https://webpack.js.org/loaders/file-loader/ "file-loader").

### Optimization

Webpack plugins used in this boilerplate:

- UglifyJsPlugin
- OptimizeCSSAssetsPlugin
- HtmlWebpackPlugin
- MiniCssExtractPlugin
- CleanWebpackPlugin

In the dev build, there is little to no optimization configured in order to reduce dev compile times. [Webpack Dev Server](https://github.com/webpack/webpack-dev-server "Webpack Dev Server") is leveraged to provide hot reloading while building files and immediately serving them to the browser without outputting to a local folder.

While development solely uses HtmlWebpackPlugin to generate dynamic paths, production will also make use of its minifier to remove quotes and whitespace.

Both development and production will use `sass-loader` and `css-loader` to compile SCSS down to CSS; however, development will also use `style-loader` to inject the CSS into the JavaScript bundle. Because this might result in a flicker where HTML is unstyled before the page load when the code is live, production omits style-loader and opts instead for a CSS file generated with [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/ "MiniCssExtractPlugin") which gets linked to at the top of `index.html`, before the content is loaded. [OptimizeCSSAssetsPlugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin "Optimize CSS Assets Plugin") will minify all CSS code during production.

JavaScript is optimized and minified in production with [UglifyJs](https://www.npmjs.com/package/uglify-js, "UglifyJS"). Additionally, because JavaScript files are hashed based on code changes and are thus built with new names every time production builds, [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin "Clean Webpack Plugin") is used to remove all files from the last build.

## React Router

The entire app is wrapped in `BrowserRouter` within `index.js`. This is to help build a single page application (SPA) so that your header and footer are constantly visible while your page content changes.

Routes, or pages, go in the routes folder. Each one of these routes should be defined in `App.js`.

## Redux
React provides us with state and props, but passing props down to a distant descendant with React itself or sharing state changes with an ancestor can be difficult while respecting the [unidirectional data flow](https://flaviocopes.com/react-unidirectional-data-flow/ "Unidirectional Data Flow").

[Redux](https://redux.js.org/ "Redux") mitigates these issues by providing a shared state (or store) in order to allow global access to data from anywhere in the app, through dispatched actions from the app being handled by reducers within the store.

### Setup

[React-Redux](https://react-redux.js.org/ "React-Redux") provides a connective tissue between React and Redux, allowing them to communicate with each other using the `connect` method.

**React Redux's example:**
```js
import { connect } from 'react-redux'
import { increment, decrement, reset } from './actionCreators'

// const Counter = ...

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = { increment, decrement, reset }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
```

As can be seen above, mapStateToProps takes the state that is currently held by Redux and provides it as a prop to the component to be accessed, while mapDispatchToProps gives the component a way of changing the state in Redux itself. See [their website](https://react-redux.js.org/introduction/quick-start "React-Redux") for further information.

At the root of the `redux` folder lies `store.js`, which contains the store. `index.js` imports Provider from React Redux as well as `store.js`, the former wrapping the main App component and the latter being passed to it as a prop. `store.js` builds the Redux store by instantiating it with the `createStore` method of Redux itself, which takes the root reducer, `initialState` and middleware configuration using the `compose` method of Redux (the middleware in this case being [Redux Thunk](https://github.com/reduxjs/redux-thunk "Redux Thunk") to aid with side effects). 

The root reducer, found in `src/redux`, will combine any reducers you create for your app before exporting them to be used in `store.js`.

## SCSS

Basic SASS files have been included to indicate global styling (as opposed to component-based styling):

- Defauls
- Layout
- Mixins
- Typography
- Utilities
- Variables

All sass files are imported into `general.scss` which Webpack loads into JS to be served to the browser during dev, or extracted from the JavaScript bundle during production. See the `scss` folder within `src` to inspect further.

Component-based styling should go in the `components` folder (see `_example.scss`);

[Breakpoint-Sass](http://breakpoint-sass.com "Breakpoint Sass Website") has been included to help maintain cleaner code when defining breakpoints (values provided to the mixin use "min-width" by default to encourage the mobile-first paradigm).

## Testing

Jest and Enzyme are configured in their respective config files in the root of the directory (`enzyme.config.js` and `jest.config.js`).

As is convention, there is a test file, `example.test.js` in the Example component folder itself. You can create tests anywhere in the project and use `npm test` to check all tests pass.
*Simple React Boilerplate*

**Description**

A basic boilerplate leveraging [Webpack](https://webpack.js.org/ "Webpack") to transpile React's JSX syntax to CommonJS code, while ES6+ features to be used such as newer variable types (const and let), async/await, classes and others. SCSS loaders have been implemented, as well as optimization for both production and development builds.

In the heart of keeping things simple as the name implies, any kind of Redux setup has been omitted, though it should be relatively seamless to add in if needed.

To get started, simply run `npm run setup` and `npm start` (if you don't have Node installed see [NPM's Website](https://www.npmjs.com/get-npm "NPM") to download NPM and read their documentation on getting started). Once complete, your project should be running on localhost:3000 in your browser.

**Scripts**

`setup`: To get started, all you need to do is run `npm run setup` (npm comes with node so if you don't have it, visit https://nodejs.org/ to install the package and run the aforementioned script in your command line). This will run `npm install` for you (alternatively, it may be quicker just to run `npm install` itself!).

`start`: This simply run the dev script for you. Because npm allows any start script to omit the `run` aspect of the script, simply write `npm start` in the console and the `dev` script will be fired.

`build`: When your files are ready for production, you can run `npm run build`. This will compile all your JavaScript and Sass into code compatible with older browsers, while generating an `index.html` file for you. These files will be placed into a newly created `dist` folder, which you can do with as you please.

`test`: To begin a test of your files, simply run `npm test` (similar to `start` npm allows you to omit the `run` part on a `test` script). Testing is important to ensure that all of your files and variables are behaving the way they should be.

Additionally, Jest provides an option for sole unit testing as well as independent integration testing. The scripts have been included as follows:

`npm run test:unit`
`npm run test:integration`

**React Router**

The entire app is wrapped in `BrowserRouter` within `index.js`. This is to help build a single page application (SPA) so that your header and footer are constantly visible while your page content changes.

Routes, or pages, go in the routes folder. Each one of these routes should be defined in `App.js`.

**Webpack**

[Webpack](https://webpack.js.org/ "Webpack") configuration can be found in `webpack.common.js`, `webpack.dev.js` and `webpack.prod.js`, while using `.babelrc` to configure [Babel's](https://babeljs.io/ "Babel") transpiling of newer code to CommonJS. Webpack will also compile SCSS down to CSS while optimizing/minifying your code.

See `webpack.prod.js` for production configuration (when you run `npm run build`) and `webpack.dev.js` for development configuration (`npm start`).

**SCSS**

Basic SASS files have been included to indicate global styling (as opposed to component-based styling):

- Defauls
- Layout
- Mixins
- Typography
- Utilities
- Variables

All sass files are imported into `general.scss` which Webpack loads into JS to be served to the browser during dev, or extracted from the JavaScript bundle during production. See the `scss` folder within `src` to inspect further.

[Breakpoint-Sass](http://breakpoint-sass.com "Breakpoint Sass Website") has been included, to help maintain cleaner code when defining breakpoints (values provided to the mixin are mobile-first).

Additionally, [PostCSS](https://postcss.org/ "PostCSS")'s [Autoprefixer](https://github.com/postcss/autoprefixer "Autoprefixer") has been used to allow you to develop with modern styling while supporting evergreen browsers down to IE11.

Other plugins for Webpack include:

- UglifyJsPlugin
- OptimizeCSSAssetsPlugin
- HtmlWebpackPlugin
- MiniCssExtractPlugin
- CleanWebpackPlugin

**Testing**

Jest and Enzyme are configured both within `enzyme.config.js` and `jest.config.js`.

As is convention, there is a test in the Example component folder itself. You can create tests anywhere in the project and use the `npm run test` to check all tests pass.
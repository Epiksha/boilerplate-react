*Simple React Boilerplate*

**Description**

This is a basic boilerplate for React to get any developers up and running from the outset, as well as helping newer developers to get familiar with the different technologies in the JavaScript ecosystem. React is used as a library (though I would argue more of a framework), with Webpack transpiling JSX down to good old fashioned JavaScript, along with ES6 Babel integration so that all modern JavaScript code is transpiled down for older browsers. Testing has been configured and is possible with Jest. ESLint has also been included with the AirBnb configuration to standardise your code further. Additionally, Sass will be compiled down to CSS at runtime.

**Scripts**

`setup`: To get started, all you need to do is run `npm run setup` (npm comes with node so if you don't have it, visit https://nodejs.org/ to install the package and run the aforementioned script in your command line). This will run `npm install` for you (alternatively, it may be quicker just to run `npm install` itself!).

`dev`: To build your development environment and run your code locally, run `npm run dev` from your command line. This will leverage the `webpack-dev-server` package which will build your files on the fly and serve them to your browser for you (avoiding clutter of production files when they are not yet needed).

`start`: This simply run the dev script for you. Because npm allows any start script to omit the `run` aspect of the script, simply write `npm start` in the console and the `dev` script will be fired.

`prod`: When your files are ready for production, you can run `npm run prod`. This will compile all your JavaScript and Sass into code compatible with older browsers, while generating an `index.html` file for you. These files will be placed into a newly created `dist` folder, which you can do with as you please.

`test`: To begin a test of your files, simply run `npm test` (similar to `start` npm allows you to omit the `run` part on a `test` script). Testing is important to ensure that all of your files and variables are behaving the way they should be.

Additionally, Jest provides an option for solely unit testing as well as independent integration testing. The scripts have been included as follows:

`npm run test:unit`

`npm run test:integration`

**React Router**

The entire app is wrapped in `BrowserRouter` in `index.js`. This is ensure we can link to other pages in the `Header` and `Footer` components with ease, without having to place them on every page.

Routes, or pages, go in the routes folder. Each one of these routes is defined in `App.js` in the `Switch` wrapper.

**Webpack**

[Webpack](https://webpack.js.org/ "Webpack") is defined as a module bundler, though it has evolved and branched off somewhat. Webpack now allows you to perform a variety of options, such as using the JavaScript compiler [Babel](https://babeljs.io/ "Babel") to compile ES6+ or JSX to vanilla JavaScript, using loaders to transpile Sass/SCSS to plain CSS, as well as import such files into JavaScript files (omitting the need for a base `style.css` file). In addition, Webpack also provides a host of optimisation tools and configuration options out of the box (while the community has provided a variety of other useful options).

Once Webpack has been installed, it will automatically look for `webpack.config.js`. This file, as the name implies, is responsible for determing which `.js` file Webpack will use as an entrypoint to begin the optimisation/parsing process, where the files will be output to, what loaders will be used (manipulating code e.g. ES6 and SCSS to provide the desired result) and any additional plugins that can be used. Moreover, the `webpack.config.js` in this repo has a `devServer` block, which the `webpack-dev-server` package uses to setup the dev environment, refreshing after any changes (hence why the `dev` script runs `webpack-dev-server` while the `prod` script simply runs `webpack`).

Webpack, after some configuration, will go through all of the files in your local directory and test to see what the file extension of each file is.

For example, the first rule in the `rules` object of our `webpack.config.js` is as follows:

```js
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
            "babel-loader",
            "eslint-loader"
        ] 
    }
```

1. The test property is where you will define which file extension you would like Webpack to look at. This is typically done using Regex, where the above will look for either a `.js` or `.jsx` extension.
2. You can specify any folders or file you wish Webpack to ignore. `node_modules` is excluded here because it contains only dependencies our project's own dependencies are using, rather than our code itself.
3. Finally, we are using two loaders here, specified in the `use` array (Tip: if you only have one loader, you can replace `use` with the `loader` property and have it equal to a string). Loaders are what Webpack uses to do all the fancy stuff like transpiling code.

To put it simply, we defined each rule to test for a certain type of file and manipulate it somehow. `babel-loader` is used in conjunction with `@babel/core`, `@babel/preset-env`, `@babel/preset-react` and `babel-eslint` to complete all transpiling on JavaScript files so that we don't have to. To define further config so that Babel knows which presets to use, we define a `.babelrc` file in our root directory which `babel-loader` will look for and build the output code accordingly. To standardise our code and ensure it is keeping up with web standards and best practices, ESLint has been configured. When you run dev you will see a number of errors pop up which will inform you of any issues to do with your code. Airbnb's rules are used as guidelines as they are arguably the most commonly used and clearly-defined rules for ESLint around. Similar to Babel, the `.eslintrc` file holds all relevant config for ESLint.

When production is run, the JavaScript file that is output to the `dist` folder is parsed with [UglifyJs](https://www.npmjs.com/package/uglify-js "UglifyJS"), which is specified in the `optimization` object in `webpack.config.js`. This removes all needless spaces and characters to reduce file size and get it ready to be served to users.

Finally, when the production script is running, the HTMLWebpackPlugin (specified in the `plugins` object) will take whatever template you've passed to it (in this case `template.html` in the `src` folder) and create an `index.html` file, which contains a div with an id of `root`, which `index.js` will render the React DOM to, along with the contents of `App.js`.

**SCSS**

The paradigm for the SASS files is that there are global files not specific to any one component for the following:

- Default Styling for common elements
- General Layout
- Global Mixins
- Global Typographic Styling
- Utilities
- Variables

All of these files are ultimately imported into the `general.scss` file. There is a commented section under these imports for the stylesheets from your individual components, which can be kept in the component folders themselves or within the components folder already available in the `scss` folder.

Standard styling is present, as can be seen in `_defaults.scss`, `_variables.scss` and `_mixins.scss`. This is filled with helpful code to get started quicker, as well as load fonts in easily.

[Breakpoint-Sass](http://breakpoint-sass.com "Breakpoint Sass Website") has been included, to help maintain cleaner code when defining breakpoints (values provided to the mixin are mobile-first).

Additionally, [PostCSS](https://postcss.org/ "PostCSS")'s [Autoprefixer](https://github.com/postcss/autoprefixer "Autoprefixer") has been used to allow you to develop with modern styling while supporting evergreen browsers down to IE11.

**Testing**

Jest and Enzyme are configured both within `enzyme.config.js` and `package.json` (under the `jest` key).

As is convention, there is a test in the Example component folder itself. You can create tests anywhere in the project and use the `npm run test` to check all tests pass.

**Conclusion**

If you like this boilerplate, please feel free to give it a star, I won't hold it against you! :)
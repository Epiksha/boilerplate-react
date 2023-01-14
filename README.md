# Boilerplate | React

## Overview

This is a boilerplate for React using a custom Webpack configuration in order to extend the optimization of files, more conveniently allow SVG spritesheets and generally have more extendability.

TypeScript is used as well as SCSS. Assets such as images, icons and fonts are located in `src/assets`. Hooks are placed in the `src/libs/hooks` folder. Global variables can be found in `src/libs/variables`. Additionally, all routes for your app should be placed in `src/libs/routes.tsx`.

Components can be found in `src/components` and follow the general structure:

```bash
- ComponentName
  - _component-name.scss
  - ComponentName.test.tsx
  - index.tsx
```

[Plop](https://plopjs.com/ "PlopJS")'s also configured in order to allow more streamlined generation of components, hooks and pages which can be used by running `npm run generate` and, for example, `npm run generate component NewComponent`. Plop will create the boilerplate, perform imports for component stylesheets and add routes for new pages.

## Getting Started

* Run `npm run setup && npm start` to begin running the application.

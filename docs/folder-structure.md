## [Home](../README.md) / Folder Structure

```
project/
  ...
  src/
    __fixtures__
    __mocks__
    assets
    components
      /atoms
      /molecule
    constants
    i18n
    layout
    models
    pages
    services
    stories
    test
    utils
```

`assets` is the place where stores image _(eg: Assets/images/logo.png)_, fonts, icons
<br/>

`components` contain **Reusable components** that can be used multiple times in your application

In `components/**/index.js/**`, exporting components that you need

```js
export { Button } from "@material-ui/core";
export { Skeleton } from "@material-ui/lab";
```

:x: do not directly import components

```diff
// bad
- import Button from 'material-ui/core/Button';
- import Button from 'antd/Button';

// good
+ import Button from 'components/**/button';
+ import { Button } from 'components/**';
```

<br/>

`constants` A constant is a value that cannot be altered by the program during normal execution, i.e., the value is constant

```js
export enum APP_URLS {
  Movies = "/movies",
  Movie = "/movies/:id?",
  Series = "/series",
}
```

<br/>

`i18n` provides multiple languages
<br/>

`models` store interface that is a structure that defines the contract in your application
<br/>

`pages` The files in the pages folder indicate the route of the react application
<br/>

`services` supply api to communicate data to backend through http
<br/>

`stories` follow by https://storybook.js.org/docs/get-started/install
<br/>

`test` set-up testing environment
<br/>

`utils` contains reusable logic that like lodash

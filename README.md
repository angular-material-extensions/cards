<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/angular-material-extensions/cards/master/demo/src/assets/logo.svg">
</p>

# cards - Set of reusable cards templates built with angular material deisgn

[![npm version](https://badge.fury.io/js/card.svg)](https://badge.fury.io/js/cards),
[![Build Status](https://travis-ci.org/angular-material-extensions/cards.svg?branch=master)](https://travis-ci.org/angular-material-extensions/cards)
[![Coverage Status](https://coveralls.io/repos/github/angular-material-extensions/cards/badge.svg?branch=master)](https://coveralls.io/github/angular-material-extensions/cards?branch=master)
[![dependency Status](https://david-dm.org/angular-material-extensions/cards/status.svg)](https://david-dm.org/angular-material-extensions/cards)
[![devDependency Status](https://david-dm.org/angular-material-extensions/cards/dev-status.svg?branch=master)](https://david-dm.org/angular-material-extensions/cards#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/angular-material-extensions/cards.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://angular-material-extensions.github.io/cards

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `@angular-material-extensions/cards` via:
```shell
npm install --save @angular-material-extensions/cards
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `@angular-material-extensions/cards`:
```js
map: {
  '@angular-material-extensions/cards': 'node_modules/@angular-material-extensions/cards/bundles/cards.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { MatExtendedCardModule } from '@angular-material-extensions/cards';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` MatExtendedCardModule .forRoot()`):
```js
import { MatExtendedCardModule } from '@angular-material-extensions/cards';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [MatExtendedCardModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` MatExtendedCardModule `:

```js
import { MatExtendedCardModule } from '@angular-material-extensions/cards';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [MatExtendedCardModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2018 Anthony Nahas. Licensed under the MIT License (MIT)


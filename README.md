<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/angular-material-extensions/cards/master/demo/src/assets/logo.svg">
</p>

# @angular-material-extensions/cards - Set of reusable cards templates built with angular material design

[![npm version](https://badge.fury.io/js/card.svg)](https://badge.fury.io/js/cards),
[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://angular-material-extensions.github.io/pages)
[![Join the chat at https://gitter.im/angular-material-extensions/Lobby](https://badges.gitter.im/angular-material-extensions/Lobby.svg)](https://gitter.im/angular-material-extensions/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![CircleCI branch](https://img.shields.io/circleci/project/github/angular-material-extensions/pages/master.svg?label=circleci)](https://circleci.com/gh/angular-material-extensions/pages)
[![Build Status](https://travis-ci.org/angular-material-extensions/cards.svg?branch=master)](https://travis-ci.org/angular-material-extensions/cards)
[![Coverage Status](https://coveralls.io/repos/github/angular-material-extensions/cards/badge.svg?branch=master)](https://coveralls.io/github/angular-material-extensions/cards?branch=master)
[![dependency Status](https://david-dm.org/angular-material-extensions/cards/status.svg)](https://david-dm.org/angular-material-extensions/cards)
[![devDependency Status](https://david-dm.org/angular-material-extensions/cards/dev-status.svg?branch=master)](https://david-dm.org/angular-material-extensions/cards#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/angular-material-extensions/cards.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/angular-material-extensions/cards.svg?style=flat-square)](https://github.com/AnthonyNahas/@angular-material-extensions/cards/blob/master/LICENSE)

## Built by and for developers :heart:
Do you have any question or suggestion ? Please do not hesitate to contact us!
Alternatively, provide a PR | open an appropriate issue [here](https://github.com/angular-material-extensions/cards/issues)

If did you like this project, support [angular-material-extensions](https://github.com/angular-material-extensions) 
by starring :star: and sharing it :loudspeaker:

## Demo 

View all the directives in action at [https://angular-material-extensions.github.io/cards](https://angular-material-extensions.github.io/cards)

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

## Support
+ Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de)
+ or open an appropriate [issue](https://github.com/angular-material-extensions/pages/issues)
+ let us chat on [Gitter](https://gitter.im/angular-material-extensions/Lobby)
 
 Built by and for developers :heart: we will help you :punch:

## License

Copyright (c) 2018 Anthony Nahas. Licensed under the MIT License (MIT)


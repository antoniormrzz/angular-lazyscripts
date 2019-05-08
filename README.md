# angular-lazyscripts [![HitCount](http://hits.dwyl.io/antoniormrzz/angular-lazyscripts.svg)](http://hits.dwyl.io/antoniormrzz/angular-lazyscripts)

lazy load external js scripts and libraries in your angular projects.
this module will handle loading the script you need before you use it in your components.

## Install

```
npm i -S angular-lazyscripts
```

## Usage

### 1. Import the `AngularLazyscriptsModule`

Import `AngularLazyscriptsModule` from the `angular-lazyscripts` package, and add it to the `NgModule` imports array of your lazy loaded module or the module you need.

```typescript

import { NgModule } from '@angular/core';
...
import { AngularLazyscriptsModule } from 'angular-lazyscripts';

@NgModule({
  ...,
  imports: [
    ...,
    AngularLazyscriptsModule,
    ...
  ]
  ...
})
export class MyLazyModule {}
```

### 2. Use the `alsLoad` structural directive

Add the `alsLoad` directive with library url (any url you would use in a script tag on your index.html is fine) to your component tag, or one of its parent tags:

```html
<myComponent *alsLoad="'https://cdn.something.net/somelibrary.js'">
  <!-- this component uses alsLoad directive to load after the script has been loaded -->
</myComponent>

<div *alsLoad="'https://cdn.something.net/somelibrary.js'">
  <!-- this div and it's content will be added to the dom after somelibrary.js is added and loaded. if loading fails or it takes longer than 15 seconds, this div and it's content will not be present on the dom. -->
</div>

<myComponent>
  <!-- this component is loaded immediately without waiting for the library to load  -->
  <!-- you can't use somelibrary.js here -->
</myComponent>
```

please note that the first myComponent component will wait for library to load and will run after the second one, the error you see first is actually logged by the second component.

**note: it adds the library to the bottom of your index.html, you can use the directive as much as you want, each url will be added once**

### 3. Use your script in your component

```typescript
import { Component, OnInit, Renderer2, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: "myComponent",
  templateUrl: "./my-component.component.html",
  styleUrls: ["./my-component.component.css"]
})
export class MyComponent implements OnInit {
  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document
  ) {}

  ngOnInit() {
    const s = this.renderer2.createElement("script");
    s.type = "text/javascript";
    s.text = `somelibrary.doSomething()`; //this is where you use your library
    this.renderer2.appendChild(this._document.body, s);
  }
}
```

**note: this is a very basic example, it is meant to showcase how you can use a script afer it is loaded, do not use it like this, this code will add the script YOU WROTE in this example (not the external js you are trying to load, that one will be added only once) a second time when user navigates to that page again. implement your own logic (hint: maybe use a service to keep track of the script tag with your code and check if it is already present on the page), make sure you understand what you are doing. my take is, using ids, bindings and maybe even ajax, my library should make your life a lot easier.**

## What it does

By default Angular can handle lazy loading modules.sometimes you have no choice but to use external js libraries in your code and you can't use scripts that don't have typescript types, unless you add them to scripts array.  depending on the library they can be very large in size, and bundling them with angular will cause your app to become very heavy. the files you list as scripts for angular will be present even on your login page. why would you want to load a heavy pdf library, for example, when the user is trying to log in?

you can use angular-lazyscripts to add your script to the DOM, right before you use it in your component.this will improve loading time of your app.

## Info

this library was tested with `angular-cli 7.3.8` and `node 10`, I didn't use observables to avoid rxjs import problems. I think you should be fine in 6+ versions of angular, but if something starts acting up and you get errors, feel free to email me.
if you actually test it on lower versions and it works, please do inform me.

**there is a 15 seconds timeout after which the component will not be added to the page. there won't be any errors. you are responsible with the file you choose.**

## Example project

I have included an archive of my test project. it loads big.js and tries to log 2 + 5 to console. the codes are commented. normally you should be fine with the documentation on this page.

## License

[![NPM](https://nodei.co/npm/angular-lazyscripts.png)](https://nodei.co/npm/angular-lazyscripts/)

Copyright (c) 2019 Antonio Ramirez <sepehralizade@live.com>, MIT License

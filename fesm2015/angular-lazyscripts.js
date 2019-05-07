import { Injectable, Directive, TemplateRef, ViewContainerRef, Input, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularLazyscriptsService {
    constructor() {
        this.loadedlist = [];
    }
    /**
     * @param {?} url
     * @return {?}
     */
    loadExternalScript(url) {
        /** @type {?} */
        let timeout = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            let id = setTimeout((/**
             * @return {?}
             */
            () => {
                clearTimeout(id);
                reject();
            }), 15000);
        }));
        /** @type {?} */
        let loadp = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (!this.loadedlist.includes(url, 0)) {
                /** @type {?} */
                const scriptElement = document.createElement('script');
                scriptElement.src = url;
                scriptElement.onload = (/**
                 * @return {?}
                 */
                () => {
                    this.loadedlist.push(url);
                    resolve();
                });
                document.body.appendChild(scriptElement);
            }
            else {
                resolve();
            }
        }));
        return Promise.race([loadp, timeout]);
    }
}
AngularLazyscriptsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AngularLazyscriptsService.ctorParameters = () => [];
/** @nocollapse */ AngularLazyscriptsService.ngInjectableDef = defineInjectable({ factory: function AngularLazyscriptsService_Factory() { return new AngularLazyscriptsService(); }, token: AngularLazyscriptsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularLazyscriptsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
AngularLazyscriptsComponent.decorators = [
    { type: Component, args: [{
                selector: 'als-angular-lazyscripts',
                template: `
    <p>loaded!</p>
  `
            }] }
];
/** @nocollapse */
AngularLazyscriptsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularLazyscriptsDirective {
    /**
     * @param {?} template
     * @param {?} vc
     * @param {?} alsService
     */
    constructor(template, vc, alsService) {
        this.template = template;
        this.vc = vc;
        this.alsService = alsService;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    set alsLoad(url) {
        this.alsService.loadExternalScript(url).then((/**
         * @return {?}
         */
        () => {
            this.vc.createEmbeddedView(this.template);
        })).catch((/**
         * @return {?}
         */
        () => {
            this.vc.clear();
        }));
    }
}
AngularLazyscriptsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[alsLoad]'
            },] }
];
/** @nocollapse */
AngularLazyscriptsDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: AngularLazyscriptsService }
];
AngularLazyscriptsDirective.propDecorators = {
    alsLoad: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularLazyscriptsModule {
}
AngularLazyscriptsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AngularLazyscriptsComponent, AngularLazyscriptsDirective],
                imports: [],
                providers: [AngularLazyscriptsService],
                exports: [AngularLazyscriptsComponent, AngularLazyscriptsDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AngularLazyscriptsService, AngularLazyscriptsComponent, AngularLazyscriptsModule, AngularLazyscriptsDirective };

//# sourceMappingURL=angular-lazyscripts.js.map
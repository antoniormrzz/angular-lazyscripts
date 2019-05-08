(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('angular-lazyscripts', ['exports', '@angular/core'], factory) :
    (factory((global['angular-lazyscripts'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularLazyscriptsService = /** @class */ (function () {
        function AngularLazyscriptsService() {
            this.loadedlist = [];
        }
        /**
         * @param {?} url
         * @return {?}
         */
        AngularLazyscriptsService.prototype.loadExternalScript = /**
         * @param {?} url
         * @return {?}
         */
            function (url) {
                var _this = this;
                /** @type {?} */
                var timeout = new Promise(( /**
                 * @param {?} resolve
                 * @param {?} reject
                 * @return {?}
                 */function (resolve, reject) {
                    /** @type {?} */
                    var id = setTimeout(( /**
                     * @return {?}
                     */function () {
                        clearTimeout(id);
                        reject();
                    }), 15000);
                }));
                /** @type {?} */
                var loadp = new Promise(( /**
                 * @param {?} resolve
                 * @param {?} reject
                 * @return {?}
                 */function (resolve, reject) {
                    if (!_this.loadedlist.includes(url, 0)) {
                        /** @type {?} */
                        var scriptElement = document.createElement('script');
                        scriptElement.src = url;
                        scriptElement.onload = ( /**
                         * @return {?}
                         */function () {
                            _this.loadedlist.push(url);
                            resolve();
                        });
                        document.body.appendChild(scriptElement);
                    }
                    else {
                        resolve();
                    }
                }));
                return Promise.race([loadp, timeout]);
            };
        AngularLazyscriptsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AngularLazyscriptsService.ctorParameters = function () { return []; };
        /** @nocollapse */ AngularLazyscriptsService.ngInjectableDef = i0.defineInjectable({ factory: function AngularLazyscriptsService_Factory() { return new AngularLazyscriptsService(); }, token: AngularLazyscriptsService, providedIn: "root" });
        return AngularLazyscriptsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularLazyscriptsComponent = /** @class */ (function () {
        function AngularLazyscriptsComponent() {
        }
        /**
         * @return {?}
         */
        AngularLazyscriptsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        AngularLazyscriptsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'als-angular-lazyscripts',
                        template: "\n    <p>loaded!</p>\n  "
                    }] }
        ];
        /** @nocollapse */
        AngularLazyscriptsComponent.ctorParameters = function () { return []; };
        return AngularLazyscriptsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularLazyscriptsDirective = /** @class */ (function () {
        function AngularLazyscriptsDirective(template, vc, alsService) {
            this.template = template;
            this.vc = vc;
            this.alsService = alsService;
        }
        Object.defineProperty(AngularLazyscriptsDirective.prototype, "alsLoad", {
            set: /**
             * @param {?} url
             * @return {?}
             */ function (url) {
                var _this = this;
                this.alsService.loadExternalScript(url).then(( /**
                 * @return {?}
                 */function () {
                    _this.vc.createEmbeddedView(_this.template);
                })).catch(( /**
                 * @return {?}
                 */function () {
                    _this.vc.clear();
                }));
            },
            enumerable: true,
            configurable: true
        });
        AngularLazyscriptsDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[alsLoad]'
                    },] }
        ];
        /** @nocollapse */
        AngularLazyscriptsDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef },
                { type: i0.ViewContainerRef },
                { type: AngularLazyscriptsService }
            ];
        };
        AngularLazyscriptsDirective.propDecorators = {
            alsLoad: [{ type: i0.Input }]
        };
        return AngularLazyscriptsDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularLazyscriptsModule = /** @class */ (function () {
        function AngularLazyscriptsModule() {
        }
        AngularLazyscriptsModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [AngularLazyscriptsComponent, AngularLazyscriptsDirective],
                        imports: [],
                        exports: [AngularLazyscriptsComponent, AngularLazyscriptsDirective]
                    },] }
        ];
        return AngularLazyscriptsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AngularLazyscriptsService = AngularLazyscriptsService;
    exports.AngularLazyscriptsComponent = AngularLazyscriptsComponent;
    exports.AngularLazyscriptsModule = AngularLazyscriptsModule;
    exports.AngularLazyscriptsDirective = AngularLazyscriptsDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angular-lazyscripts.umd.js.map
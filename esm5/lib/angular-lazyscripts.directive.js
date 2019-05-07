/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { AngularLazyscriptsService } from './angular-lazyscripts.service';
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
         */
        function (url) {
            var _this = this;
            this.alsService.loadExternalScript(url).then((/**
             * @return {?}
             */
            function () {
                _this.vc.createEmbeddedView(_this.template);
            })).catch((/**
             * @return {?}
             */
            function () {
                _this.vc.clear();
            }));
        },
        enumerable: true,
        configurable: true
    });
    AngularLazyscriptsDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[alsLoad]'
                },] }
    ];
    /** @nocollapse */
    AngularLazyscriptsDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: AngularLazyscriptsService }
    ]; };
    AngularLazyscriptsDirective.propDecorators = {
        alsLoad: [{ type: Input }]
    };
    return AngularLazyscriptsDirective;
}());
export { AngularLazyscriptsDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AngularLazyscriptsDirective.prototype.template;
    /**
     * @type {?}
     * @private
     */
    AngularLazyscriptsDirective.prototype.vc;
    /**
     * @type {?}
     * @private
     */
    AngularLazyscriptsDirective.prototype.alsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1sYXp5c2NyaXB0cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWxhenlzY3JpcHRzLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItbGF6eXNjcmlwdHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFMUU7SUFhRSxxQ0FBb0IsUUFBMEIsRUFBUyxFQUFvQixFQUFTLFVBQW9DO1FBQXBHLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQVMsT0FBRSxHQUFGLEVBQUUsQ0FBa0I7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUEwQjtJQUFJLENBQUM7SUFUN0gsc0JBQWEsZ0RBQU87Ozs7O1FBQXBCLFVBQXFCLEdBQVU7WUFBL0IsaUJBT0M7WUFORCxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUk7OztZQUFDO2dCQUMzQyxLQUFJLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QyxDQUFDLEVBQUMsQ0FBQyxLQUFLOzs7WUFBQztnQkFDUCxLQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2xCLENBQUMsRUFBQyxDQUFBO1FBRUYsQ0FBQzs7O09BQUE7O2dCQVhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztpQkFDdEI7Ozs7Z0JBTG1CLFdBQVc7Z0JBQUUsZ0JBQWdCO2dCQUN4Qyx5QkFBeUI7OzswQkFNL0IsS0FBSzs7SUFXUixrQ0FBQztDQUFBLEFBZkQsSUFlQztTQVpZLDJCQUEyQjs7Ozs7O0lBVTFCLCtDQUFrQzs7Ozs7SUFBQyx5Q0FBNEI7Ozs7O0lBQUMsaURBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3VsYXJMYXp5c2NyaXB0c1NlcnZpY2UgfSBmcm9tICcuL2FuZ3VsYXItbGF6eXNjcmlwdHMuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thbHNMb2FkXSdcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckxhenlzY3JpcHRzRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgc2V0IGFsc0xvYWQodXJsOnN0cmluZyl7XG4gIHRoaXMuYWxzU2VydmljZS5sb2FkRXh0ZXJuYWxTY3JpcHQodXJsKS50aGVuKCgpPT57XG4gICAgdGhpcy52Yy5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZSk7XG4gIH0pLmNhdGNoKCgpPT57XG4gICAgdGhpcy52Yy5jbGVhcigpO1xuICB9KVxuXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LHByaXZhdGUgdmM6IFZpZXdDb250YWluZXJSZWYscHJpdmF0ZSBhbHNTZXJ2aWNlOkFuZ3VsYXJMYXp5c2NyaXB0c1NlcnZpY2UpIHsgfVxuXG59XG4iXX0=
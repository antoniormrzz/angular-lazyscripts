/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { AngularLazyscriptsService } from './angular-lazyscripts.service';
export class AngularLazyscriptsDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1sYXp5c2NyaXB0cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWxhenlzY3JpcHRzLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItbGF6eXNjcmlwdHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFLMUUsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7O0lBVXRDLFlBQW9CLFFBQTBCLEVBQVMsRUFBb0IsRUFBUyxVQUFvQztRQUFwRyxhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQUFTLE9BQUUsR0FBRixFQUFFLENBQWtCO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBMEI7SUFBSSxDQUFDOzs7OztJQVQ3SCxJQUFhLE9BQU8sQ0FBQyxHQUFVO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSTs7O1FBQUMsR0FBRSxFQUFFO1lBQy9DLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLENBQUMsRUFBQyxDQUFDLEtBQUs7OztRQUFDLEdBQUUsRUFBRTtZQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEIsQ0FBQyxFQUFDLENBQUE7SUFFRixDQUFDOzs7WUFYRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7YUFDdEI7Ozs7WUFMbUIsV0FBVztZQUFFLGdCQUFnQjtZQUN4Qyx5QkFBeUI7OztzQkFNL0IsS0FBSzs7Ozs7OztJQVNNLCtDQUFrQzs7Ozs7SUFBQyx5Q0FBNEI7Ozs7O0lBQUMsaURBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3VsYXJMYXp5c2NyaXB0c1NlcnZpY2UgfSBmcm9tICcuL2FuZ3VsYXItbGF6eXNjcmlwdHMuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thbHNMb2FkXSdcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckxhenlzY3JpcHRzRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgc2V0IGFsc0xvYWQodXJsOnN0cmluZyl7XG4gIHRoaXMuYWxzU2VydmljZS5sb2FkRXh0ZXJuYWxTY3JpcHQodXJsKS50aGVuKCgpPT57XG4gICAgdGhpcy52Yy5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZSk7XG4gIH0pLmNhdGNoKCgpPT57XG4gICAgdGhpcy52Yy5jbGVhcigpO1xuICB9KVxuXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LHByaXZhdGUgdmM6IFZpZXdDb250YWluZXJSZWYscHJpdmF0ZSBhbHNTZXJ2aWNlOkFuZ3VsYXJMYXp5c2NyaXB0c1NlcnZpY2UpIHsgfVxuXG59XG4iXX0=
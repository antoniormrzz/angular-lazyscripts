/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class AngularLazyscriptsService {
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
/** @nocollapse */ AngularLazyscriptsService.ngInjectableDef = i0.defineInjectable({ factory: function AngularLazyscriptsService_Factory() { return new AngularLazyscriptsService(); }, token: AngularLazyscriptsService, providedIn: "root" });
if (false) {
    /** @type {?} */
    AngularLazyscriptsService.prototype.loadedlist;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1sYXp5c2NyaXB0cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1sYXp5c2NyaXB0cy8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWxhenlzY3JpcHRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyx5QkFBeUI7SUFJcEM7UUFGQSxlQUFVLEdBQVUsRUFBRSxDQUFDO0lBRVAsQ0FBQzs7Ozs7SUFFakIsa0JBQWtCLENBQUMsR0FBVTs7WUFDdkIsT0FBTyxHQUFHLElBQUksT0FBTzs7Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTs7Z0JBQ3hDLEVBQUUsR0FBRyxVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ3ZCLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDakIsTUFBTSxFQUFFLENBQUE7WUFDVixDQUFDLEdBQUUsS0FBSyxDQUFDO1FBQ1gsQ0FBQyxFQUFDOztZQUVFLEtBQUssR0FBQyxJQUFJLE9BQU87Ozs7O1FBQUMsQ0FBQyxPQUFPLEVBQUMsTUFBTSxFQUFFLEVBQUU7WUFDdkMsSUFBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQzs7c0JBQzVCLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztnQkFDdEQsYUFBYSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0JBQ3hCLGFBQWEsQ0FBQyxNQUFNOzs7Z0JBQUcsR0FBRSxFQUFFO29CQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDMUIsT0FBTyxFQUFFLENBQUM7Z0JBQUEsQ0FBQyxDQUFBLENBQUE7Z0JBQ2IsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDMUM7aUJBQUk7Z0JBQ0gsT0FBTyxFQUFFLENBQUM7YUFDWDtRQUNILENBQUMsRUFBQztRQUVGLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQS9CRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7SUFHQywrQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJMYXp5c2NyaXB0c1NlcnZpY2Uge1xuXG4gIGxvYWRlZGxpc3Q6c3RyaW5nW109W107XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBsb2FkRXh0ZXJuYWxTY3JpcHQodXJsOnN0cmluZyl7XG4gICAgbGV0IHRpbWVvdXQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgaWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgcmVqZWN0KClcbiAgICAgIH0sIDE1MDAwKVxuICAgIH0pXG5cbiAgICBsZXQgbG9hZHA9bmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KSA9PiB7XG4gICAgICBpZighdGhpcy5sb2FkZWRsaXN0LmluY2x1ZGVzKHVybCwwKSl7XG4gICAgICAgIGNvbnN0IHNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0RWxlbWVudC5zcmMgPSB1cmw7XG4gICAgICAgIHNjcmlwdEVsZW1lbnQub25sb2FkID0gKCk9PntcbiAgICAgICAgICB0aGlzLmxvYWRlZGxpc3QucHVzaCh1cmwpO1xuICAgICAgICAgIHJlc29sdmUoKTt9XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0RWxlbWVudCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmFjZShbbG9hZHAsdGltZW91dF0pO1xuICB9XG5cbn1cbiJdfQ==
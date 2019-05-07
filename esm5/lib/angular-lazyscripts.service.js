/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
        var timeout = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            /** @type {?} */
            var id = setTimeout((/**
             * @return {?}
             */
            function () {
                clearTimeout(id);
                reject();
            }), 15000);
        }));
        /** @type {?} */
        var loadp = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (!_this.loadedlist.includes(url, 0)) {
                /** @type {?} */
                var scriptElement = document.createElement('script');
                scriptElement.src = url;
                scriptElement.onload = (/**
                 * @return {?}
                 */
                function () {
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AngularLazyscriptsService.ctorParameters = function () { return []; };
    /** @nocollapse */ AngularLazyscriptsService.ngInjectableDef = i0.defineInjectable({ factory: function AngularLazyscriptsService_Factory() { return new AngularLazyscriptsService(); }, token: AngularLazyscriptsService, providedIn: "root" });
    return AngularLazyscriptsService;
}());
export { AngularLazyscriptsService };
if (false) {
    /** @type {?} */
    AngularLazyscriptsService.prototype.loadedlist;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1sYXp5c2NyaXB0cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1sYXp5c2NyaXB0cy8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWxhenlzY3JpcHRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDO0lBT0U7UUFGQSxlQUFVLEdBQVUsRUFBRSxDQUFDO0lBRVAsQ0FBQzs7Ozs7SUFFakIsc0RBQWtCOzs7O0lBQWxCLFVBQW1CLEdBQVU7UUFBN0IsaUJBc0JDOztZQXJCSyxPQUFPLEdBQUcsSUFBSSxPQUFPOzs7OztRQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07O2dCQUNwQyxFQUFFLEdBQUcsVUFBVTs7O1lBQUM7Z0JBQ2xCLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDakIsTUFBTSxFQUFFLENBQUE7WUFDVixDQUFDLEdBQUUsS0FBSyxDQUFDO1FBQ1gsQ0FBQyxFQUFDOztZQUVFLEtBQUssR0FBQyxJQUFJLE9BQU87Ozs7O1FBQUMsVUFBQyxPQUFPLEVBQUMsTUFBTTtZQUNuQyxJQUFHLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDOztvQkFDNUIsYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO2dCQUN0RCxhQUFhLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDeEIsYUFBYSxDQUFDLE1BQU07OztnQkFBRztvQkFDckIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzFCLE9BQU8sRUFBRSxDQUFDO2dCQUFBLENBQUMsQ0FBQSxDQUFBO2dCQUNiLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzFDO2lCQUFJO2dCQUNILE9BQU8sRUFBRSxDQUFDO2FBQ1g7UUFDSCxDQUFDLEVBQUM7UUFFRixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDOztnQkEvQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7b0NBSkQ7Q0FtQ0MsQUFqQ0QsSUFpQ0M7U0E5QlkseUJBQXlCOzs7SUFFcEMsK0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyTGF6eXNjcmlwdHNTZXJ2aWNlIHtcblxuICBsb2FkZWRsaXN0OnN0cmluZ1tdPVtdO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbG9hZEV4dGVybmFsU2NyaXB0KHVybDpzdHJpbmcpe1xuICAgIGxldCB0aW1lb3V0ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGlkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgICAgIHJlamVjdCgpXG4gICAgICB9LCAxNTAwMClcbiAgICB9KVxuXG4gICAgbGV0IGxvYWRwPW5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCkgPT4ge1xuICAgICAgaWYoIXRoaXMubG9hZGVkbGlzdC5pbmNsdWRlcyh1cmwsMCkpe1xuICAgICAgICBjb25zdCBzY3JpcHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdEVsZW1lbnQuc3JjID0gdXJsO1xuICAgICAgICBzY3JpcHRFbGVtZW50Lm9ubG9hZCA9ICgpPT57XG4gICAgICAgICAgdGhpcy5sb2FkZWRsaXN0LnB1c2godXJsKTtcbiAgICAgICAgICByZXNvbHZlKCk7fVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdEVsZW1lbnQpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBQcm9taXNlLnJhY2UoW2xvYWRwLHRpbWVvdXRdKTtcbiAgfVxuXG59XG4iXX0=
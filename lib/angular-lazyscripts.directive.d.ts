import { TemplateRef, ViewContainerRef } from '@angular/core';
import { AngularLazyscriptsService } from './angular-lazyscripts.service';
export declare class AngularLazyscriptsDirective {
    private template;
    private vc;
    private alsService;
    alsLoad: string;
    constructor(template: TemplateRef<any>, vc: ViewContainerRef, alsService: AngularLazyscriptsService);
}

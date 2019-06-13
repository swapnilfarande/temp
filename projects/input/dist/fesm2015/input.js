import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputService {
    constructor() { }
}
InputService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
InputService.ctorParameters = () => [];
/** @nocollapse */ InputService.ngInjectableDef = ɵɵdefineInjectable({ factory: function InputService_Factory() { return new InputService(); }, token: InputService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-input',
                template: `
    <p>
      input works!
    </p>
  `
            }] }
];
/** @nocollapse */
InputComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputModule {
}
InputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [InputComponent],
                imports: [],
                exports: [InputComponent]
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

export { InputComponent, InputModule, InputService };
//# sourceMappingURL=input.js.map

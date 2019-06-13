import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputService = /** @class */ (function () {
    function InputService() {
    }
    InputService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    InputService.ctorParameters = function () { return []; };
    /** @nocollapse */ InputService.ngInjectableDef = ɵɵdefineInjectable({ factory: function InputService_Factory() { return new InputService(); }, token: InputService, providedIn: "root" });
    return InputService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputComponent = /** @class */ (function () {
    function InputComponent() {
    }
    /**
     * @return {?}
     */
    InputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    InputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-input',
                    template: "\n    <p>\n      input works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    InputComponent.ctorParameters = function () { return []; };
    return InputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputModule = /** @class */ (function () {
    function InputModule() {
    }
    InputModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [InputComponent],
                    imports: [],
                    exports: [InputComponent]
                },] }
    ];
    return InputModule;
}());

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

import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonService {
    constructor() { }
}
ButtonService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ButtonService.ctorParameters = () => [];
/** @nocollapse */ ButtonService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ButtonService_Factory() { return new ButtonService(); }, token: ButtonService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-button',
                template: `
    <p>
      button works Demo testing!
    </p>
  `
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonModule {
}
ButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ButtonComponent],
                imports: [],
                exports: [ButtonComponent]
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

export { ButtonComponent, ButtonModule, ButtonService };
//# sourceMappingURL=button.js.map

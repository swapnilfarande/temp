(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('input', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global.input = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InputService = /** @class */ (function () {
        function InputService() {
        }
        InputService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        InputService.ctorParameters = function () { return []; };
        /** @nocollapse */ InputService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function InputService_Factory() { return new InputService(); }, token: InputService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [InputComponent],
                        imports: [],
                        exports: [InputComponent]
                    },] }
        ];
        return InputModule;
    }());

    exports.InputComponent = InputComponent;
    exports.InputModule = InputModule;
    exports.InputService = InputService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=input.umd.js.map

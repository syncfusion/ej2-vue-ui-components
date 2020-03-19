import { ProgressBar } from '@syncfusion/ej2-progressbar';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ProgressBarAnnotationsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(ProgressBarAnnotationsDirective, _super);
    function ProgressBarAnnotationsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressBarAnnotationsDirective.prototype.render = function () {
        return;
    };
    ProgressBarAnnotationsDirective = __decorate([
        EJComponentDecorator({})
    ], ProgressBarAnnotationsDirective);
    return ProgressBarAnnotationsDirective;
}(Vue));
var ProgressBarAnnotationsPlugin = {
    name: 'e-progressbar-annotations',
    install: function (Vue$$1) {
        Vue$$1.component(ProgressBarAnnotationsPlugin.name, ProgressBarAnnotationsDirective);
    }
};
var ProgressBarAnnotationDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(ProgressBarAnnotationDirective, _super);
    function ProgressBarAnnotationDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressBarAnnotationDirective.prototype.render = function () {
        return;
    };
    ProgressBarAnnotationDirective = __decorate([
        EJComponentDecorator({})
    ], ProgressBarAnnotationDirective);
    return ProgressBarAnnotationDirective;
}(Vue));
var ProgressBarAnnotationPlugin = {
    name: 'e-progressbar-annotation',
    install: function (Vue$$1) {
        Vue$$1.component(ProgressBarAnnotationPlugin.name, ProgressBarAnnotationDirective);
    }
};

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties = ['animation', 'annotations', 'cornerRadius', 'enablePersistence', 'enableRtl', 'endAngle', 'gapWidth', 'height', 'innerRadius', 'isIndeterminate', 'label', 'labelStyle', 'locale', 'margin', 'maximum', 'minimum', 'progressColor', 'progressThickness', 'radius', 'secondaryProgress', 'segmentColor', 'segmentCount', 'showProgressValue', 'startAngle', 'theme', 'trackColor', 'trackThickness', 'type', 'value', 'width', 'animationComplete', 'load', 'loaded', 'progressCompleted', 'textRender', 'valueChanged'];
var modelProps = [];
/**
 * Represents Vuejs ProgressBar Component
 * ```vue
 * <ejs-progressbar></ejs-progressbar>
 * ```
 */
var ProgressBarComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$1(ProgressBarComponent, _super);
    function ProgressBarComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-progressbar-annotations": "e-progressbar-annotation" };
        _this.tagNameMapper = { "e-progressbar-annotations": "e-annotations" };
        _this.ej2Instances = new ProgressBar({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    ProgressBarComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        _this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    };
    ProgressBarComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    ProgressBarComponent.prototype.removeSvg = function () {
        return this.ej2Instances.removeSvg();
    };
    ProgressBarComponent.prototype.requiredModules = function () {
        return this.ej2Instances.requiredModules();
    };
    ProgressBarComponent = __decorate$1([
        EJComponentDecorator({
            props: properties
        })
    ], ProgressBarComponent);
    return ProgressBarComponent;
}(ComponentBase));
var ProgressBarPlugin = {
    name: 'ejs-progressbar',
    install: function (Vue$$1) {
        Vue$$1.component(ProgressBarPlugin.name, ProgressBarComponent);
        Vue$$1.component(ProgressBarAnnotationPlugin.name, ProgressBarAnnotationDirective);
        Vue$$1.component(ProgressBarAnnotationsPlugin.name, ProgressBarAnnotationsDirective);
    }
};

export { ProgressBarAnnotationsDirective, ProgressBarAnnotationDirective, ProgressBarAnnotationsPlugin, ProgressBarAnnotationPlugin, ProgressBarComponent, ProgressBarPlugin };
export * from '@syncfusion/ej2-progressbar';
//# sourceMappingURL=ej2-vue-progressbar.es5.js.map

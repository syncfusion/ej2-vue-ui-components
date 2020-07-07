import { ProgressBar } from '@syncfusion/ej2-progressbar';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ProgressBarAnnotationsDirective = class ProgressBarAnnotationsDirective extends Vue {
    render() {
        return;
    }
};
ProgressBarAnnotationsDirective = __decorate([
    EJComponentDecorator({})
], ProgressBarAnnotationsDirective);
const ProgressBarAnnotationsPlugin = {
    name: 'e-progressbar-annotations',
    install(Vue$$1) {
        Vue$$1.component(ProgressBarAnnotationsPlugin.name, ProgressBarAnnotationsDirective);
    }
};
let ProgressBarAnnotationDirective = class ProgressBarAnnotationDirective extends Vue {
    render() {
        return;
    }
};
ProgressBarAnnotationDirective = __decorate([
    EJComponentDecorator({})
], ProgressBarAnnotationDirective);
const ProgressBarAnnotationPlugin = {
    name: 'e-progressbar-annotation',
    install(Vue$$1) {
        Vue$$1.component(ProgressBarAnnotationPlugin.name, ProgressBarAnnotationDirective);
    }
};

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['animation', 'annotations', 'cornerRadius', 'enablePersistence', 'enablePieProgress', 'enableProgressSegments', 'enableRtl', 'endAngle', 'gapWidth', 'height', 'innerRadius', 'isActive', 'isGradient', 'isIndeterminate', 'isStriped', 'labelStyle', 'locale', 'margin', 'maximum', 'minimum', 'progressColor', 'progressThickness', 'radius', 'rangeColors', 'role', 'secondaryProgress', 'segmentColor', 'segmentCount', 'showProgressValue', 'startAngle', 'theme', 'trackColor', 'trackThickness', 'type', 'value', 'width', 'animationComplete', 'load', 'loaded', 'mouseClick', 'mouseDown', 'mouseLeave', 'mouseMove', 'mouseUp', 'progressCompleted', 'textRender', 'valueChanged'];
const modelProps = [];
/**
 * Represents Vuejs ProgressBar Component
 * ```vue
 * <ejs-progressbar></ejs-progressbar>
 * ```
 */
let ProgressBarComponent = class ProgressBarComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = true;
        this.hasInjectedModules = true;
        this.tagMapper = { "e-progressbar-annotations": "e-progressbar-annotation" };
        this.tagNameMapper = { "e-progressbar-annotations": "e-annotations" };
        this.ej2Instances = new ProgressBar({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    calculateProgressRange(value, minimum, maximum) {
        return this.ej2Instances.calculateProgressRange(value, minimum, maximum);
    }
    calculateSegmentSize(width, thickness) {
        return this.ej2Instances.calculateSegmentSize(width, thickness);
    }
    createClipPath(clipPath, range, d, refresh, thickness, isLabel, isMaximum) {
        return this.ej2Instances.createClipPath(clipPath, range, d, refresh, thickness, isLabel, isMaximum);
    }
    getPathLine(x, width, thickness) {
        return this.ej2Instances.getPathLine(x, width, thickness);
    }
    hide() {
        return this.ej2Instances.hide();
    }
    removeSvg() {
        return this.ej2Instances.removeSvg();
    }
    requiredModules() {
        return this.ej2Instances.requiredModules();
    }
    show() {
        return this.ej2Instances.show();
    }
};
ProgressBarComponent = __decorate$1([
    EJComponentDecorator({
        props: properties
    })
], ProgressBarComponent);
const ProgressBarPlugin = {
    name: 'ejs-progressbar',
    install(Vue$$1) {
        Vue$$1.component(ProgressBarPlugin.name, ProgressBarComponent);
        Vue$$1.component(ProgressBarAnnotationPlugin.name, ProgressBarAnnotationDirective);
        Vue$$1.component(ProgressBarAnnotationsPlugin.name, ProgressBarAnnotationsDirective);
    }
};

export { ProgressBarAnnotationsDirective, ProgressBarAnnotationDirective, ProgressBarAnnotationsPlugin, ProgressBarAnnotationPlugin, ProgressBarComponent, ProgressBarPlugin };
export * from '@syncfusion/ej2-progressbar';
//# sourceMappingURL=ej2-vue-progressbar.es2015.js.map

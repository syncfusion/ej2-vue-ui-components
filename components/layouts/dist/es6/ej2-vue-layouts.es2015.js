import { Splitter } from '@syncfusion/ej2-layouts';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let PanesDirective = class PanesDirective extends Vue {
    render() {
        return;
    }
};
PanesDirective = __decorate([
    EJComponentDecorator({})
], PanesDirective);
const PanesPlugin = {
    name: 'e-panes',
    install(Vue$$1) {
        Vue$$1.component(PanesPlugin.name, PanesDirective);
    }
};
/**
 * 'e-pane' directive represent a pane of Vue Splitter
 * It must be contained in a Splitter component(`ejs-splitter`).
 * ```html
 * <ejs-splitter id='splitter'>
 *   <e-panes>
 *    <e-pane size='150px'></e-pane>
 *    <e-pane size='150px'></e-pane>
 *   </e-panes>
 * </ejs-splitter>
 * ```
 */
let PaneDirective = class PaneDirective extends Vue {
    render() {
        return;
    }
};
PaneDirective = __decorate([
    EJComponentDecorator({})
], PaneDirective);
const PanePlugin = {
    name: 'e-pane',
    install(Vue$$1) {
        Vue$$1.component(PanePlugin.name, PaneDirective);
    }
};

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'height', 'locale', 'orientation', 'paneSettings', 'separatorSize', 'width', 'created', 'resizeStart', 'resizeStop', 'resizing'];
const modelProps = [];
/**
 * Represents the VueJS Splitter component
 * ```html
 * <ejs-splitter></ejs-splitter>
 * ```
 */
let SplitterComponent = class SplitterComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = true;
        this.hasInjectedModules = false;
        this.tagMapper = { "e-panes": "e-pane" };
        this.tagNameMapper = { "e-panes": "e-paneSettings" };
        this.ej2Instances = new Splitter({});
        this.bindProperties();
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    addPane(paneProperties, index) {
        return this.ej2Instances.addPane(paneProperties, index);
    }
    removePane(index) {
        return this.ej2Instances.removePane(index);
    }
};
SplitterComponent = __decorate$1([
    EJComponentDecorator({
        props: properties
    })
], SplitterComponent);
const SplitterPlugin = {
    name: 'ejs-splitter',
    install(Vue$$1) {
        Vue$$1.component(SplitterPlugin.name, SplitterComponent);
        Vue$$1.component(PanePlugin.name, PaneDirective);
        Vue$$1.component(PanesPlugin.name, PanesDirective);
    }
};

export { PanesDirective, PaneDirective, PanesPlugin, PanePlugin, SplitterComponent, SplitterPlugin };
export * from '@syncfusion/ej2-layouts';
//# sourceMappingURL=ej2-vue-layouts.es2015.js.map

import { DashboardLayout, Splitter } from '@syncfusion/ej2-layouts';
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
const properties = ['cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'height', 'locale', 'orientation', 'paneSettings', 'separatorSize', 'width', 'beforeCollapse', 'beforeExpand', 'collapsed', 'created', 'expanded', 'resizeStart', 'resizeStop', 'resizing'];
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
    addPane(paneProperties, index) {
        return this.ej2Instances.addPane(paneProperties, index);
    }
    collapse(index) {
        return this.ej2Instances.collapse(index);
    }
    expand(index) {
        return this.ej2Instances.expand(index);
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

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let PanelsDirective = class PanelsDirective extends Vue {
    render() {
        return;
    }
};
PanelsDirective = __decorate$2([
    EJComponentDecorator({})
], PanelsDirective);
const PanelsPlugin = {
    name: 'e-panels',
    install(Vue$$1) {
        Vue$$1.component(PanelsPlugin.name, PanelsDirective);
    }
};
/**
 * 'e-panels' directive represent a presets of VueJS dashboardlayout component
 * It must be contained in a dashboardlayout component(`ejs-dashboardlayout`).
 * ```html
 * <ejs-dashboardlayout>
 *   <e-panels>
 *   <e-panel></e-panel>
 *   <e-panel></e-panel>
 *   </e-panels>
 * </ejs-dashboardlayout>
 * ```
 */
let PanelDirective = class PanelDirective extends Vue {
    render() {
        return;
    }
};
PanelDirective = __decorate$2([
    EJComponentDecorator({})
], PanelDirective);
const PanelPlugin = {
    name: 'e-panel',
    install(Vue$$1) {
        Vue$$1.component(PanelPlugin.name, PanelDirective);
    }
};

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$1 = ['allowDragging', 'allowFloating', 'allowPushing', 'allowResizing', 'cellAspectRatio', 'cellSpacing', 'columns', 'draggableHandle', 'enablePersistence', 'enableRtl', 'locale', 'mediaQuery', 'panels', 'resizableHandles', 'showGridLines', 'change', 'created', 'destroyed', 'drag', 'dragStart', 'dragStop', 'resize', 'resizeStart', 'resizeStop'];
const modelProps$1 = [];
/**
 * Represents the Essential JS 2 VueJS DashboardLayout Component.
 * ```html
 * <ejs-dashboardlayout></ejs-dashboardlayout>
 * ```
 */
let DashboardLayoutComponent = class DashboardLayoutComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$1;
        this.models = modelProps$1;
        this.hasChildDirective = true;
        this.hasInjectedModules = false;
        this.tagMapper = { "e-panels": "e-panel" };
        this.tagNameMapper = {};
        this.ej2Instances = new DashboardLayout({});
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
    addPanel(panel) {
        return this.ej2Instances.addPanel(panel);
    }
    movePanel(id, row, col) {
        return this.ej2Instances.movePanel(id, row, col);
    }
    removeAll() {
        return this.ej2Instances.removeAll();
    }
    removePanel(id) {
        return this.ej2Instances.removePanel(id);
    }
    resizePanel(id, sizeX, sizeY) {
        return this.ej2Instances.resizePanel(id, sizeX, sizeY);
    }
    serialize() {
        return this.ej2Instances.serialize();
    }
};
DashboardLayoutComponent = __decorate$3([
    EJComponentDecorator({
        props: properties$1
    })
], DashboardLayoutComponent);
const DashboardLayoutPlugin = {
    name: 'ejs-dashboardlayout',
    install(Vue$$1) {
        Vue$$1.component(DashboardLayoutPlugin.name, DashboardLayoutComponent);
        Vue$$1.component(PanelPlugin.name, PanelDirective);
        Vue$$1.component(PanelsPlugin.name, PanelsDirective);
    }
};

export { PanesDirective, PaneDirective, PanesPlugin, PanePlugin, SplitterComponent, SplitterPlugin, PanelsDirective, PanelDirective, PanelsPlugin, PanelPlugin, DashboardLayoutComponent, DashboardLayoutPlugin };
export * from '@syncfusion/ej2-layouts';
//# sourceMappingURL=ej2-vue-layouts.es2015.js.map

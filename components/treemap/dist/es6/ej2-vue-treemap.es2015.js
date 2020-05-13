import { TreeMap } from '@syncfusion/ej2-treemap';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ColorMappingsDirective = class ColorMappingsDirective extends Vue {
    render() {
        return;
    }
};
ColorMappingsDirective = __decorate([
    EJComponentDecorator({})
], ColorMappingsDirective);
const ColorMappingsPlugin = {
    name: 'e-colorMappings',
    install(Vue$$1) {
        Vue$$1.component(ColorMappingsPlugin.name, ColorMappingsDirective);
    }
};
let ColorMappingDirective = class ColorMappingDirective extends Vue {
    render() {
        return;
    }
};
ColorMappingDirective = __decorate([
    EJComponentDecorator({})
], ColorMappingDirective);
const ColorMappingPlugin = {
    name: 'e-colorMapping',
    install(Vue$$1) {
        Vue$$1.component(ColorMappingPlugin.name, ColorMappingDirective);
    }
};

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let LevelsDirective = class LevelsDirective extends Vue {
    render() {
        return;
    }
};
LevelsDirective = __decorate$1([
    EJComponentDecorator({})
], LevelsDirective);
const LevelsPlugin = {
    name: 'e-levels',
    install(Vue$$1) {
        Vue$$1.component(LevelsPlugin.name, LevelsDirective);
    }
};
/**
 * `LevelsDirective` directive represent a levels of the react treemap.
 * ```vue
 * <ejs-treemap>
 * <e-levels>
 * <e-level></e-level>
 * </e-levels>
 * </ejs-treemap>
 * ```
 */
let LevelDirective = class LevelDirective extends Vue {
    render() {
        return;
    }
};
LevelDirective = __decorate$1([
    EJComponentDecorator({})
], LevelDirective);
const LevelPlugin = {
    name: 'e-level',
    install(Vue$$1) {
        Vue$$1.component(LevelPlugin.name, LevelDirective);
    }
};

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['allowImageExport', 'allowPdfExport', 'allowPrint', 'background', 'border', 'breadcrumbConnector', 'colorValuePath', 'dataSource', 'description', 'drillDownView', 'enableBreadcrumb', 'enableDrillDown', 'enablePersistence', 'enableRtl', 'equalColorValuePath', 'format', 'height', 'highlightSettings', 'initialDrillDown', 'layoutType', 'leafItemSettings', 'legendSettings', 'levels', 'locale', 'margin', 'palette', 'query', 'rangeColorValuePath', 'renderDirection', 'selectionSettings', 'tabIndex', 'theme', 'titleSettings', 'tooltipSettings', 'useGroupingSeparator', 'weightValuePath', 'width', 'beforePrint', 'click', 'doubleClick', 'drillEnd', 'drillStart', 'itemClick', 'itemHighlight', 'itemMove', 'itemRendering', 'itemSelected', 'legendItemRendering', 'legendRendering', 'load', 'loaded', 'mouseMove', 'resize', 'rightClick', 'tooltipRendering'];
const modelProps = [];
/**
 * Represents Vuejs TreeMap Component
 * ```vue
 * <ejs-treemap></ejs-treemap>
 * ```
 */
let TreeMapComponent = class TreeMapComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = true;
        this.hasInjectedModules = true;
        this.tagMapper = { "e-levels": { "e-level": { "e-colorMappings": "e-colorMapping" } } };
        this.tagNameMapper = { "e-colorMappings": "e-colorMapping" };
        this.ej2Instances = new TreeMap({});
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
    calculatePreviousLevelChildItems(labelText, drillLevelValues, item, directLevel) {
        return this.ej2Instances.calculatePreviousLevelChildItems(labelText, drillLevelValues, item, directLevel);
    }
    calculateSelectedTextLevels(labelText, item) {
        return this.ej2Instances.calculateSelectedTextLevels(labelText, item);
    }
    clickOnTreeMap(e) {
        return this.ej2Instances.clickOnTreeMap(e);
    }
    compareSelectedLabelWithDrillDownItems(drillLevelValues, item, i) {
        return this.ej2Instances.compareSelectedLabelWithDrillDownItems(drillLevelValues, item, i);
    }
    doubleClickOnTreeMap(e) {
        return this.ej2Instances.doubleClickOnTreeMap(e);
    }
    export(type, fileName, orientation, allowDownload) {
        return this.ej2Instances.export(type, fileName, orientation, allowDownload);
    }
    findTotalWeight(processData, type) {
        return this.ej2Instances.findTotalWeight(processData, type);
    }
    mouseDownOnTreeMap(e) {
        return this.ej2Instances.mouseDownOnTreeMap(e);
    }
    mouseEndOnTreeMap(e) {
        return this.ej2Instances.mouseEndOnTreeMap(e);
    }
    mouseLeaveOnTreeMap(e) {
        return this.ej2Instances.mouseLeaveOnTreeMap(e);
    }
    mouseMoveOnTreeMap(e) {
        return this.ej2Instances.mouseMoveOnTreeMap(e);
    }
    print(id) {
        return this.ej2Instances.print(id);
    }
    reOrderLevelData(start) {
        return this.ej2Instances.reOrderLevelData(start);
    }
    resizeOnTreeMap(e) {
        return this.ej2Instances.resizeOnTreeMap(e);
    }
    rightClickOnTreeMap(e) {
        return this.ej2Instances.rightClickOnTreeMap(e);
    }
    selectItem(levelOrder, isSelected) {
        return this.ej2Instances.selectItem(levelOrder, isSelected);
    }
};
TreeMapComponent = __decorate$2([
    EJComponentDecorator({
        props: properties
    })
], TreeMapComponent);
const TreeMapPlugin = {
    name: 'ejs-treemap',
    install(Vue$$1) {
        Vue$$1.component(TreeMapPlugin.name, TreeMapComponent);
        Vue$$1.component(LevelPlugin.name, LevelDirective);
        Vue$$1.component(LevelsPlugin.name, LevelsDirective);
        Vue$$1.component(ColorMappingPlugin.name, ColorMappingDirective);
        Vue$$1.component(ColorMappingsPlugin.name, ColorMappingsDirective);
    }
};

export { ColorMappingsDirective, ColorMappingDirective, ColorMappingsPlugin, ColorMappingPlugin, LevelsDirective, LevelDirective, LevelsPlugin, LevelPlugin, TreeMapComponent, TreeMapPlugin };
export * from '@syncfusion/ej2-treemap';
//# sourceMappingURL=ej2-vue-treemap.es2015.js.map

import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { TreeMap } from '@syncfusion/ej2-treemap';
import { ColorMappingsDirective, ColorMappingDirective, ColorMappingsPlugin, ColorMappingPlugin } from './colormapping.directive'
import { LevelsDirective, LevelDirective, LevelsPlugin, LevelPlugin } from './levels.directive'


export const properties: string[] = ['background', 'border', 'breadcrumbConnector', 'colorValuePath', 'dataSource', 'description', 'drillDownView', 'enableBreadcrumb', 'enableDrillDown', 'enablePersistence', 'enableRtl', 'equalColorValuePath', 'format', 'height', 'highlightSettings', 'initialDrillDown', 'layoutType', 'leafItemSettings', 'legendSettings', 'levels', 'locale', 'margin', 'palette', 'query', 'rangeColorValuePath', 'renderDirection', 'selectionSettings', 'tabIndex', 'theme', 'titleSettings', 'tooltipSettings', 'useGroupingSeparator', 'weightValuePath', 'width', 'beforePrint', 'click', 'doubleClick', 'drillEnd', 'drillStart', 'itemClick', 'itemHighlight', 'itemMove', 'itemRendering', 'itemSelected', 'legendItemRendering', 'legendRendering', 'load', 'loaded', 'mouseMove', 'resize', 'rightClick', 'tooltipRendering'];
export const modelProps: string[] = [];

/**
 * Represents Vuejs TreeMap Component
 * ```vue
 * <ejs-treemap></ejs-treemap>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class TreeMapComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-levels":{"e-level":{"e-colorMappings":"e-colorMapping"}}};
    public tagNameMapper: Object = {"e-colorMappings":"e-colorMapping"};
    
    constructor() {
        super();
        this.ej2Instances = new TreeMap({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    public setProperties(prop: any, muteOnChange: boolean): void {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public calculatePreviousLevelChildItems(labelText: Object, drillLevelValues: Object, item: Object, directLevel: boolean): boolean {
        return this.ej2Instances.calculatePreviousLevelChildItems(labelText, drillLevelValues, item, directLevel);
    }

    public calculateSelectedTextLevels(labelText: Object, item: Object): Object {
        return this.ej2Instances.calculateSelectedTextLevels(labelText, item);
    }

    public clickOnTreeMap(e: Object): void {
        return this.ej2Instances.clickOnTreeMap(e);
    }

    public compareSelectedLabelWithDrillDownItems(drillLevelValues: Object, item: Object, i: number): Object {
        return this.ej2Instances.compareSelectedLabelWithDrillDownItems(drillLevelValues, item, i);
    }

    public doubleClickOnTreeMap(e: Object): void {
        return this.ej2Instances.doubleClickOnTreeMap(e);
    }

    public export(type: Object, fileName: string, orientation?: Object): void {
        return this.ej2Instances.export(type, fileName, orientation);
    }

    public findTotalWeight(processData: Object[], type: string): void {
        return this.ej2Instances.findTotalWeight(processData, type);
    }

    public mouseDownOnTreeMap(e: Object): void {
        return this.ej2Instances.mouseDownOnTreeMap(e);
    }

    public mouseEndOnTreeMap(e: Object): void {
        return this.ej2Instances.mouseEndOnTreeMap(e);
    }

    public mouseLeaveOnTreeMap(e: Object): void {
        return this.ej2Instances.mouseLeaveOnTreeMap(e);
    }

    public mouseMoveOnTreeMap(e: Object): void {
        return this.ej2Instances.mouseMoveOnTreeMap(e);
    }

    public print(id?: string[] | string | Object): void {
        return this.ej2Instances.print(id);
    }

    public reOrderLevelData(start: number): void {
        return this.ej2Instances.reOrderLevelData(start);
    }

    public resizeOnTreeMap(e: Object): void {
        return this.ej2Instances.resizeOnTreeMap(e);
    }

    public rightClickOnTreeMap(e: Object): void {
        return this.ej2Instances.rightClickOnTreeMap(e);
    }
}

export const TreeMapPlugin = {
    name: 'ejs-treemap',
    install(Vue: any) {
        Vue.component(TreeMapPlugin.name, TreeMapComponent);
        Vue.component(LevelPlugin.name, LevelDirective);
        Vue.component(LevelsPlugin.name, LevelsDirective);
        Vue.component(ColorMappingPlugin.name, ColorMappingDirective);
        Vue.component(ColorMappingsPlugin.name, ColorMappingsDirective);

    }
}

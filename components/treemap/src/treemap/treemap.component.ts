import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { TreeMap } from '@syncfusion/ej2-treemap';
import { LevelsDirective, LevelDirective, LevelsPlugin, LevelPlugin } from './levels.directive'


export const properties: string[] = ['background', 'border', 'colorValuePath', 'dataSource', 'description', 'enableDrillDown', 'enablePersistence', 'enableRtl', 'equalColorValuePath', 'format', 'height', 'highlightSettings', 'initialDrillDown', 'layoutType', 'leafItemSettings', 'legendSettings', 'levels', 'locale', 'margin', 'palette', 'query', 'rangeColorValuePath', 'selectionSettings', 'tabIndex', 'theme', 'titleSettings', 'tooltipSettings', 'useGroupingSeparator', 'weightValuePath', 'width', 'beforePrint', 'click', 'drillEnd', 'drillStart', 'itemClick', 'itemHighlight', 'itemMove', 'itemRendering', 'itemSelected', 'load', 'loaded', 'mouseMove', 'resize', 'tooltipRendering'];
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
    public tagMapper: { [key: string]: Object } = {"e-levels":"e-level"};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new TreeMap({});
        this.bindProperties();
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public clickOnTreeMap(e: Object): void {
        return this.ej2Instances.clickOnTreeMap(e);
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
}

export const TreeMapPlugin = {
    name: 'ejs-treemap',
    install(Vue: any) {
        Vue.component(TreeMapPlugin.name, TreeMapComponent);
        Vue.component(LevelPlugin.name, LevelDirective);
        Vue.component(LevelsPlugin.name, LevelsDirective);

    }
}

import { Options } from 'vue-class-component';
import { ComponentBase, EJComponentDecorator, getProps, allVue, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { TreeMap } from '@syncfusion/ej2-treemap';
import { ColorMappingsDirective, ColorMappingDirective, ColorMappingsPlugin, ColorMappingPlugin } from './colormapping.directive'
import { LevelsDirective, LevelDirective, LevelsPlugin, LevelPlugin } from './levels.directive'


// {{VueImport}}
export const properties: string[] = ['isLazyUpdate', 'allowImageExport', 'allowPdfExport', 'allowPrint', 'background', 'border', 'breadcrumbConnector', 'colorValuePath', 'dataSource', 'description', 'drillDownView', 'enableBreadcrumb', 'enableDrillDown', 'enablePersistence', 'enableRtl', 'equalColorValuePath', 'format', 'height', 'highlightSettings', 'initialDrillDown', 'layoutType', 'leafItemSettings', 'legendSettings', 'levels', 'locale', 'margin', 'palette', 'query', 'rangeColorValuePath', 'renderDirection', 'selectionSettings', 'tabIndex', 'theme', 'titleSettings', 'tooltipSettings', 'useGroupingSeparator', 'weightValuePath', 'width', 'beforePrint', 'click', 'doubleClick', 'drillEnd', 'drillStart', 'itemClick', 'itemHighlight', 'itemMove', 'itemRendering', 'itemSelected', 'legendItemRendering', 'legendRendering', 'load', 'loaded', 'mouseMove', 'resize', 'rightClick', 'tooltipRendering'];
export const modelProps: string[] = [];

export const testProp: any = getProps({props: properties});
export const props = testProp[0];
export const watch = testProp[1];

export const emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged');
for (let props of modelProps) {
    emitProbs.push(
        'update:'+props
    );
}

export const isExecute: any = gh ? false : true;

/**
 * Represents Vuejs TreeMap Component
 * ```vue
 * <ejs-treemap></ejs-treemap>
 * ```
 */
@EJComponentDecorator({
    props: properties
},isExecute)

/* Start Options({
    props: props,
    watch: watch,
    emits: emitProbs,
    provide: function provide() {
        return {
            custom: this.custom
        };
    }
}) End */

export class TreeMapComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-levels":{"e-level":{"e-colorMappings":"e-colorMapping"}}};
    public tagNameMapper: Object = {"e-colorMappings":"e-colorMapping"};
    public isVue3: boolean;
    public templateCollection: any;
    constructor() {
        super(arguments);
        this.isVue3 = !isExecute;
        this.ej2Instances = new TreeMap({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
        this.ej2Instances.clearTemplate = this.clearTemplate;
        this.updated = this.updated;
    }

 public clearTemplate(templateNames?: string[]): any {
    if (!templateNames){
       templateNames = Object.keys(this.templateCollection || {});
    }
    if (templateNames.length &&  this.templateCollection) {
    for (let tempName of templateNames){
       let elementCollection: any = this.templateCollection[tempName];
       if(elementCollection && elementCollection.length) {
       for(let ele of elementCollection) {
           let destroy: any = getValue('__vue__.$destroy', ele);
           if (destroy) {
               ele.__vue__.$destroy();
           }
           if (ele.innerHTML){
               ele.innerHTML = '';
           }
       }
       delete this.templateCollection[tempName];
       }
    }
}
 }



    public setProperties(prop: any, muteOnChange: boolean): void {
        if(this.isVue3) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        if (this.isVue3) {
                            this.ej2Instances.vueInstance.$emit('update:' + key, prop[key]);
                        } else {
                            (this as any).$emit('update:' + key, prop[key]);
                            (this as any).$emit('modelchanged', prop[key]);
                        }
                    }
                });
            });
        }
    }

    public render(createElement: any) {
        let h: any = gh || createElement;
        let slots: any = null;
        if(!isNullOrUndefined((this as any).$slots.default)) {
            slots = gh ? (this as any).$slots.default() : (this as any).$slots.default;
        }
        return h('div', slots);
    }
    public custom(): void {
        this.updated();
    }
    
    public calculatePreviousLevelChildItems(labelText: string, drillLevelValues: any, item: any, directLevel: boolean): boolean {
        return this.ej2Instances.calculatePreviousLevelChildItems(labelText, drillLevelValues, item, directLevel);
    }

    public calculateSelectedTextLevels(labelText: string, item: any): any {
        return this.ej2Instances.calculateSelectedTextLevels(labelText, item);
    }

    public clickOnTreeMap(e: Object): void {
        return this.ej2Instances.clickOnTreeMap(e);
    }

    public compareSelectedLabelWithDrillDownItems(drillLevelValues: any, item: any, i: number): any {
        return this.ej2Instances.compareSelectedLabelWithDrillDownItems(drillLevelValues, item, i);
    }

    public doubleClickOnTreeMap(e: Object): void {
        return this.ej2Instances.doubleClickOnTreeMap(e);
    }

    public export(type: Object, fileName: string, orientation?: Object, allowDownload?: boolean): Object {
        return this.ej2Instances.export(type, fileName, orientation, allowDownload);
    }

    public findTotalWeight(processData: any[], type: string): void {
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

    public selectItem(levelOrder: string[], isSelected?: boolean): void {
        return this.ej2Instances.selectItem(levelOrder, isSelected);
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
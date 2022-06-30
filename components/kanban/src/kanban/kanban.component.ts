import { Options } from 'vue-class-component';
import { ComponentBase, EJComponentDecorator, getProps, allVue, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { Kanban } from '@syncfusion/ej2-kanban';
import { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin } from './columns.directive'
import { StackedHeadersDirective, StackedHeaderDirective, StackedHeadersPlugin, StackedHeaderPlugin } from './stackedheaders.directive'


// {{VueImport}}
export const properties: string[] = ['isLazyUpdate', 'plugins', 'allowDragAndDrop', 'allowKeyboard', 'cardSettings', 'columns', 'constraintType', 'cssClass', 'dataSource', 'dialogSettings', 'enablePersistence', 'enableRtl', 'enableTooltip', 'externalDropId', 'height', 'keyField', 'locale', 'query', 'showEmptyColumn', 'sortSettings', 'stackedHeaders', 'swimlaneSettings', 'tooltipTemplate', 'width', 'actionBegin', 'actionComplete', 'actionFailure', 'cardClick', 'cardDoubleClick', 'cardRendered', 'created', 'dataBinding', 'dataBound', 'dataSourceChanged', 'dataStateChange', 'dialogClose', 'dialogOpen', 'drag', 'dragStart', 'dragStop', 'queryCellInfo'];
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
 * `ej-kanban` represents the VueJS Kanban Component.
 * ```vue
 * <ejs-kanban></ejs-kanban>
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

export class KanbanComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {"e-columns":"e-column","e-stackedHeaders":"e-stackedHeader"};
    public tagNameMapper: Object = {};
    public isVue3: boolean;
    public templateCollection: any;
    constructor() {
        super(arguments);
        this.isVue3 = !isExecute;
        this.ej2Instances = new Kanban({});
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
    
    public addCard(cardData: Object | Object[], index?: number): void {
        return this.ej2Instances.addCard(cardData, index);
    }

    public addColumn(columnOptions: Object, index: number): void {
        return this.ej2Instances.addColumn(columnOptions, index);
    }

    public closeDialog(): void {
        return this.ej2Instances.closeDialog();
    }

    public deleteCard(cardData: string | number | Object | Object[]): void {
        return this.ej2Instances.deleteCard(cardData);
    }

    public deleteColumn(index: number): void {
        return this.ej2Instances.deleteColumn(index);
    }

    public getCardDetails(target: Object): Object {
        return this.ej2Instances.getCardDetails(target);
    }

    public getColumnData(columnKey: string | number, dataSource?: Object[]): Object[] {
        return this.ej2Instances.getColumnData(columnKey, dataSource);
    }

    public getSelectedCards(): Object[] {
        return this.ej2Instances.getSelectedCards();
    }

    public getSwimlaneData(keyField: string): Object[] {
        return this.ej2Instances.getSwimlaneData(keyField);
    }

    public hideColumn(key: string | number): void {
        return this.ej2Instances.hideColumn(key);
    }

    public hideSpinner(): void {
        return this.ej2Instances.hideSpinner();
    }

    public openDialog(action: Object, data?: Object): void {
        return this.ej2Instances.openDialog(action, data);
    }

    public refreshHeader(): void {
        return this.ej2Instances.refreshHeader();
    }

    public refreshUI(args: Object, index?: number): void {
        return this.ej2Instances.refreshUI(args, index);
    }

    public renderTemplates(): void {
        return this.ej2Instances.renderTemplates();
    }

    public resetTemplates(templates?: string[]): void {
        return this.ej2Instances.resetTemplates(templates);
    }

    public showColumn(key: string | number): void {
        return this.ej2Instances.showColumn(key);
    }

    public showSpinner(): void {
        return this.ej2Instances.showSpinner();
    }

    public templateParser(template: string): any {
        return this.ej2Instances.templateParser(template);
    }

    public updateCard(cardData: Object | Object[], index?: number): void {
        return this.ej2Instances.updateCard(cardData, index);
    }
}

export const KanbanPlugin = {
    name: 'ejs-kanban',
    install(Vue: any) {
        Vue.component(KanbanPlugin.name, KanbanComponent);
        Vue.component(ColumnPlugin.name, ColumnDirective);
        Vue.component(ColumnsPlugin.name, ColumnsDirective);
        Vue.component(StackedHeaderPlugin.name, StackedHeaderDirective);
        Vue.component(StackedHeadersPlugin.name, StackedHeadersDirective);

    }
}
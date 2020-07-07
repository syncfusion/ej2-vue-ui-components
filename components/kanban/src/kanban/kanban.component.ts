import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { Kanban } from '@syncfusion/ej2-kanban';
import { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin } from './columns.directive'
import { StackedHeadersDirective, StackedHeaderDirective, StackedHeadersPlugin, StackedHeaderPlugin } from './stackedheaders.directive'


export const properties: string[] = ['allowDragAndDrop', 'allowKeyboard', 'cardSettings', 'columns', 'constraintType', 'cssClass', 'dataSource', 'dialogSettings', 'enablePersistence', 'enableRtl', 'enableTooltip', 'height', 'keyField', 'locale', 'query', 'showEmptyColumn', 'sortSettings', 'stackedHeaders', 'swimlaneSettings', 'tooltipTemplate', 'width', 'actionBegin', 'actionComplete', 'actionFailure', 'cardClick', 'cardDoubleClick', 'cardRendered', 'created', 'dataBinding', 'dataBound', 'dialogClose', 'dialogOpen', 'drag', 'dragStart', 'dragStop', 'queryCellInfo'];
export const modelProps: string[] = [];

/**
 * `ej-kanban` represents the VueJS Kanban Component.
 * ```vue
 * <ejs-kanban></ejs-kanban>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class KanbanComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {"e-columns":"e-column","e-stackedHeaders":"e-stackedHeader"};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new Kanban({});
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
    
    public addCard(cardData: undefined | undefined[]): void {
        return this.ej2Instances.addCard(cardData);
    }

    public addColumn(columnOptions: Object, index: number): void {
        return this.ej2Instances.addColumn(columnOptions, index);
    }

    public closeDialog(): void {
        return this.ej2Instances.closeDialog();
    }

    public deleteCard(cardData: string | number | undefined | undefined[]): void {
        return this.ej2Instances.deleteCard(cardData);
    }

    public deleteColumn(index: number): void {
        return this.ej2Instances.deleteColumn(index);
    }

    public getCardDetails(target: Object): Object {
        return this.ej2Instances.getCardDetails(target);
    }

    public getColumnData(columnKey: string, dataSource?: Object[]): Object[] {
        return this.ej2Instances.getColumnData(columnKey, dataSource);
    }

    public getSelectedCards(): Object[] {
        return this.ej2Instances.getSelectedCards();
    }

    public getSwimlaneData(keyField: string): Object[] {
        return this.ej2Instances.getSwimlaneData(keyField);
    }

    public hideColumn(key: string): void {
        return this.ej2Instances.hideColumn(key);
    }

    public hideSpinner(): void {
        return this.ej2Instances.hideSpinner();
    }

    public openDialog(action: Object, data?: Object): void {
        return this.ej2Instances.openDialog(action, data);
    }

    public showColumn(key: string): void {
        return this.ej2Instances.showColumn(key);
    }

    public showSpinner(): void {
        return this.ej2Instances.showSpinner();
    }

    public updateCard(cardData: undefined | undefined[]): void {
        return this.ej2Instances.updateCard(cardData);
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

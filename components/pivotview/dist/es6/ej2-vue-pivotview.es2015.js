import { PivotFieldList, PivotView } from '@syncfusion/ej2-pivotview';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['allowCalculatedField', 'allowConditionalFormatting', 'allowDeferLayoutUpdate', 'allowDrillThrough', 'allowExcelExport', 'allowPdfExport', 'cellTemplate', 'chartSettings', 'currencyCode', 'dataSource', 'displayOption', 'editSettings', 'enablePersistence', 'enableRtl', 'enableValueSorting', 'enableVirtualization', 'gridSettings', 'groupingBarSettings', 'height', 'hyperlinkSettings', 'locale', 'maxNodeLimitInMemberEditor', 'pivotValues', 'showFieldList', 'showGroupingBar', 'showToolbar', 'showTooltip', 'showValuesButton', 'toolbar', 'width', 'aggregateCellInfo', 'beforeExport', 'beginDrillThrough', 'cellClick', 'cellSelected', 'cellSelecting', 'chartSeriesCreated', 'created', 'dataBound', 'destroyed', 'drill', 'drillThrough', 'enginePopulated', 'enginePopulating', 'fetchReport', 'hyperlinkCellClick', 'load', 'loadReport', 'newReport', 'onFieldDropped', 'onPdfCellRender', 'removeReport', 'renameReport', 'saveReport', 'toolbarClick', 'toolbarRender'];
const modelProps = ['dataSource'];
/**
 * `ejs-pivotview` represents the VueJS PivotView Component.
 * ```vue
 * <ejs-pivotview></ejs-pivotview>
 * ```
 */
let PivotViewComponent = class PivotViewComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = false;
        this.hasInjectedModules = true;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new PivotView({});
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
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
    trigger(eventName, eventProp) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key = this.models.toString().match(/checked|value/) || [];
            let propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    chartExport(type, fileName, orientation, width, height) {
        return this.ej2Instances.chartExport(type, fileName, orientation, width, height);
    }
    csvExport(excelExportProperties, isMultipleExport, workbook, isBlob) {
        return this.ej2Instances.csvExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    }
    excelExport(excelExportProperties, isMultipleExport, workbook, isBlob) {
        return this.ej2Instances.excelExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    }
    getCellTemplate() {
        return this.ej2Instances.getCellTemplate();
    }
    pdfExport(pdfExportProperties, isMultipleExport, pdfDoc, isBlob) {
        return this.ej2Instances.pdfExport(pdfExportProperties, isMultipleExport, pdfDoc, isBlob);
    }
    printChart() {
        return this.ej2Instances.printChart();
    }
    templateParser(template) {
        return this.ej2Instances.templateParser(template);
    }
};
PivotViewComponent = __decorate([
    EJComponentDecorator({
        props: properties,
        model: {
            event: 'modelchanged'
        }
    })
], PivotViewComponent);
const PivotViewPlugin = {
    name: 'ejs-pivotview',
    install(Vue) {
        Vue.component(PivotViewPlugin.name, PivotViewComponent);
    }
};

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$1 = ['allowCalculatedField', 'allowDeferLayoutUpdate', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'locale', 'maxNodeLimitInMemberEditor', 'renderMode', 'showValuesButton', 'target', 'aggregateCellInfo', 'created', 'dataBound', 'destroyed', 'enginePopulated', 'enginePopulating', 'load', 'onFieldDropped'];
const modelProps$1 = [];
/**
 * `ejs-pivotfieldlist` represents the VueJS PivotFieldList Component.
 * ```vue
 * <ejs-pivotfieldlist></ejs-pivotfieldlist>
 * ```
 */
let PivotFieldListComponent = class PivotFieldListComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$1;
        this.models = modelProps$1;
        this.hasChildDirective = false;
        this.hasInjectedModules = false;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new PivotFieldList({});
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
};
PivotFieldListComponent = __decorate$1([
    EJComponentDecorator({
        props: properties$1
    })
], PivotFieldListComponent);
const PivotFieldListPlugin = {
    name: 'ejs-pivotfieldlist',
    install(Vue) {
        Vue.component(PivotFieldListPlugin.name, PivotFieldListComponent);
    }
};

export { PivotViewComponent, PivotViewPlugin, PivotFieldListComponent, PivotFieldListPlugin };
export * from '@syncfusion/ej2-pivotview';
//# sourceMappingURL=ej2-vue-pivotview.es2015.js.map

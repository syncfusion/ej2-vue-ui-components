import { Options } from 'vue-class-component';
import { ComponentBase, EJComponentDecorator, getProps, allVue, gh, isExecute } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { ImageEditor } from '@syncfusion/ej2-image-editor';


// {{VueImport}}
export const properties: string[] = ['isLazyUpdate', 'plugins', 'allowUndoRedo', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'finetuneSettings', 'height', 'isReadOnly', 'locale', 'theme', 'toolbar', 'toolbarTemplate', 'width', 'beforeSave', 'created', 'cropping', 'destroyed', 'fileOpened', 'finetuneValueChanging', 'flipping', 'imageFiltering', 'panning', 'rotating', 'saved', 'shapeChanging', 'toolbarCreated', 'toolbarItemClicked', 'toolbarUpdating', 'zooming'];
export const modelProps: string[] = [];

export const testProp: any = getProps({props: properties});
export const props = testProp[0];
export const watch = testProp[1];

export const emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push(
        'update:'+props
    );
}

/**
 * Represents the VueJS ImageEditor Component.
 * ```html
 * <ejs-imageeditor></ejs-imageeditor>
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

export class ImageEditorComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    public isVue3: boolean;
    public templateCollection: any;
    constructor() {
        super(arguments);
        this.isVue3 = !isExecute;
        this.ej2Instances = new ImageEditor({});
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
        let h: any = !isExecute ? gh : createElement;
        let slots: any = null;
        if(!isNullOrUndefined((this as any).$slots.default)) {
            slots = !isExecute ? (this as any).$slots.default() : (this as any).$slots.default;
        }
        return h('div', slots);
    }
    public custom(): void {
        this.updated();
    }
    
    public applyImageFilter(filterOption: Object): void {
        return this.ej2Instances.applyImageFilter(filterOption);
    }

    public clearSelection(): void {
        return this.ej2Instances.clearSelection();
    }

    public crop(): boolean {
        return this.ej2Instances.crop();
    }

    public deleteShape(id: string): void {
        return this.ej2Instances.deleteShape(id);
    }

    public drawEllipse(x?: number, y?: number, radiusX?: number, radiusY?: number, strokeWidth?: number, strokeColor?: string, fillColor?: string): boolean {
        return this.ej2Instances.drawEllipse(x, y, radiusX, radiusY, strokeWidth, strokeColor, fillColor);
    }

    public drawLine(startX?: number, startY?: number, endX?: number, endY?: number, strokeWidth?: number, strokeColor?: string): boolean {
        return this.ej2Instances.drawLine(startX, startY, endX, endY, strokeWidth, strokeColor);
    }

    public drawRectangle(x?: number, y?: number, width?: number, height?: number, strokeWidth?: number, strokeColor?: string, fillColor?: string): boolean {
        return this.ej2Instances.drawRectangle(x, y, width, height, strokeWidth, strokeColor, fillColor);
    }

    public drawText(x?: number, y?: number, text?: string, fontFamily?: string, fontSize?: number, bold?: boolean, italic?: boolean, color?: string): boolean {
        return this.ej2Instances.drawText(x, y, text, fontFamily, fontSize, bold, italic, color);
    }

    public export(type?: string, fileName?: string): void {
        return this.ej2Instances.export(type, fileName);
    }

    public finetuneImage(finetuneOption: Object, value: number): void {
        return this.ej2Instances.finetuneImage(finetuneOption, value);
    }

    public flip(direction: Object): void {
        return this.ej2Instances.flip(direction);
    }

    public freehandDraw(value: boolean): void {
        return this.ej2Instances.freehandDraw(value);
    }

    public getImageData(): Object {
        return this.ej2Instances.getImageData();
    }

    public getShapeSetting(id: string): Object {
        return this.ej2Instances.getShapeSetting(id);
    }

    public getShapeSettings(): Object[] {
        return this.ej2Instances.getShapeSettings();
    }

    public initialize(): void {
        return this.ej2Instances.initialize();
    }

    public open(data: string | Object): void {
        return this.ej2Instances.open(data);
    }

    public pan(value: boolean): void {
        return this.ej2Instances.pan(value);
    }

    public reset(): void {
        return this.ej2Instances.reset();
    }

    public rotate(degree: number): boolean {
        return this.ej2Instances.rotate(degree);
    }

    public select(type: string, startX?: number, startY?: number, width?: number, height?: number): void {
        return this.ej2Instances.select(type, startX, startY, width, height);
    }

    public selectShape(id: string): boolean {
        return this.ej2Instances.selectShape(id);
    }

    public update(): void {
        return this.ej2Instances.update();
    }

    public zoom(value: number): void {
        return this.ej2Instances.zoom(value);
    }
}

export const ImageEditorPlugin = {
    name: 'ejs-imageeditor',
    install(Vue: any) {
        Vue.component(ImageEditorPlugin.name, ImageEditorComponent);

    }
}
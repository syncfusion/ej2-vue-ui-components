import { ComponentBase, gh, getProps, isExecute, vueDefineComponent, DefineVueComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { ImageEditor, ImageEditorModel } from '@syncfusion/ej2-image-editor';


export const properties: string[] = ['isLazyUpdate', 'plugins', 'allowUndoRedo', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'finetuneSettings', 'height', 'isReadOnly', 'locale', 'quickAccessToolbarTemplate', 'selectionSettings', 'showQuickAccessToolbar', 'theme', 'toolbar', 'toolbarTemplate', 'width', 'zoomSettings', 'beforeSave', 'click', 'created', 'cropping', 'destroyed', 'fileOpened', 'finetuneValueChanging', 'flipping', 'frameChange', 'imageFiltering', 'panning', 'quickAccessToolbarItemClick', 'quickAccessToolbarOpen', 'resizing', 'rotating', 'saved', 'selectionChanging', 'shapeChanging', 'toolbarCreated', 'toolbarItemClicked', 'toolbarUpdating', 'zooming'];
export const modelProps: string[] = [];

export const testProp: any = getProps({props: properties});
export const props = testProp[0], watch = testProp[1], emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) { emitProbs.push('update:'+props) }

/**
 * Represents the VueJS ImageEditor Component.
 * ```html
 * <ejs-imageeditor></ejs-imageeditor>
 * ```
 */
export let ImageEditorComponent: DefineVueComponent<ImageEditorModel> =  vueDefineComponent({
    name: 'ImageEditorComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide() { return { custom: this.custom } },
    data() {
        return {
            ej2Instance: new ImageEditor({}) as any,
            propKeys: properties as string[],
            models: modelProps as string[],
            hasChildDirective: false as boolean,
            hasInjectedModules: false as boolean,
            tagMapper: {} as { [key: string]: Object },
            tagNameMapper: {} as Object,
            isVue3: !isExecute as boolean,
            templateCollection: {} as any,
        }
    },
    created() {

        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
        this.ej2Instances.clearTemplate = this.clearTemplate;
        this.updated = this.updated;
    },
    render(createElement: any) {
        let h: any = !isExecute ? gh : createElement;
        let slots: any = null;
        if(!isNullOrUndefined((this as any).$slots.default)) {
            slots = !isExecute ? (this as any).$slots.default() : (this as any).$slots.default;
        }
        return h('div', slots);
    },
    methods: {
        clearTemplate(templateNames?: string[]): any {
            if (!templateNames){ templateNames = Object.keys(this.templateCollection || {}) }
            if (templateNames.length &&  this.templateCollection) {
                for (let tempName of templateNames){
                    let elementCollection: any = this.templateCollection[tempName];
                    if(elementCollection && elementCollection.length) {
                        for(let ele of elementCollection) {
                            let destroy: any = getValue('__vue__.$destroy', ele);
                            if (destroy) { ele.__vue__.$destroy() }
                            if (ele.innerHTML) { ele.innerHTML = '' }
                        }
                        delete this.templateCollection[tempName];
                    }
                }
            }
        },
        setProperties(prop: any, muteOnChange: boolean): void {
            if(this.isVue3) { this.models = !this.models ? this.ej2Instances.referModels : this.models }
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
        },
        custom(): void {
            this.updated();
        },
        applyImageFilter(filterOption: Object): void {
            return this.ej2Instances.applyImageFilter(filterOption);
        },
        clearSelection(): void {
            return this.ej2Instances.clearSelection();
        },
        crop(): boolean {
            return this.ej2Instances.crop();
        },
        deleteShape(id: string): void {
            return this.ej2Instances.deleteShape(id);
        },
        drawArrow(startX?: number, startY?: number, endX?: number, endY?: number, strokeWidth?: number, strokeColor?: string, arrowStart?: Object, arrowEnd?: Object): boolean {
            return this.ej2Instances.drawArrow(startX, startY, endX, endY, strokeWidth, strokeColor, arrowStart, arrowEnd);
        },
        drawEllipse(x?: number, y?: number, radiusX?: number, radiusY?: number, strokeWidth?: number, strokeColor?: string, fillColor?: string, degree?: number): boolean {
            return this.ej2Instances.drawEllipse(x, y, radiusX, radiusY, strokeWidth, strokeColor, fillColor, degree);
        },
        drawFrame(frameType: Object, color: string, gradientColor: string, size: number, inset: number, offset: number, borderRadius: number, frameLineStyle: Object, lineCount: number): boolean {
            return this.ej2Instances.drawFrame(frameType, color, gradientColor, size, inset, offset, borderRadius, frameLineStyle, lineCount);
        },
        drawImage(data: string | Object, x?: number, y?: number, width?: number, height?: number, isAspectRatio?: boolean, degree?: number): boolean {
            return this.ej2Instances.drawImage(data, x, y, width, height, isAspectRatio, degree);
        },
        drawLine(startX?: number, startY?: number, endX?: number, endY?: number, strokeWidth?: number, strokeColor?: string): boolean {
            return this.ej2Instances.drawLine(startX, startY, endX, endY, strokeWidth, strokeColor);
        },
        drawPath(pointColl: Object[], strokeWidth?: number, strokeColor?: string): boolean {
            return this.ej2Instances.drawPath(pointColl, strokeWidth, strokeColor);
        },
        drawRectangle(x?: number, y?: number, width?: number, height?: number, strokeWidth?: number, strokeColor?: string, fillColor?: string, degree?: number): boolean {
            return this.ej2Instances.drawRectangle(x, y, width, height, strokeWidth, strokeColor, fillColor, degree);
        },
        drawText(x?: number, y?: number, text?: string, fontFamily?: string, fontSize?: number, bold?: boolean, italic?: boolean, color?: string): boolean {
            return this.ej2Instances.drawText(x, y, text, fontFamily, fontSize, bold, italic, color);
        },
        export(type?: string, fileName?: string): void {
            return this.ej2Instances.export(type, fileName);
        },
        finetuneImage(finetuneOption: Object, value: number): void {
            return this.ej2Instances.finetuneImage(finetuneOption, value);
        },
        flip(direction: Object): void {
            return this.ej2Instances.flip(direction);
        },
        freehandDraw(value: boolean): void {
            return this.ej2Instances.freehandDraw(value);
        },
        getImageData(): Object {
            return this.ej2Instances.getImageData();
        },
        getImageDimension(): Object {
            return this.ej2Instances.getImageDimension();
        },
        getShapeSetting(id: string): Object {
            return this.ej2Instances.getShapeSetting(id);
        },
        getShapeSettings(): Object[] {
            return this.ej2Instances.getShapeSettings();
        },
        initialize(): void {
            return this.ej2Instances.initialize();
        },
        open(data: string | Object): void {
            return this.ej2Instances.open(data);
        },
        pan(value: boolean): void {
            return this.ej2Instances.pan(value);
        },
        redo(): void {
            return this.ej2Instances.redo();
        },
        reset(): void {
            return this.ej2Instances.reset();
        },
        resize(width: number, height: number, isAspectRatio?: boolean): boolean {
            return this.ej2Instances.resize(width, height, isAspectRatio);
        },
        rotate(degree: number): boolean {
            return this.ej2Instances.rotate(degree);
        },
        select(type: string, startX?: number, startY?: number, width?: number, height?: number): void {
            return this.ej2Instances.select(type, startX, startY, width, height);
        },
        selectShape(id: string): boolean {
            return this.ej2Instances.selectShape(id);
        },
        undo(): void {
            return this.ej2Instances.undo();
        },
        update(): void {
            return this.ej2Instances.update();
        },
        zoom(zoomFactor: number, zoomPoint?: Object): void {
            return this.ej2Instances.zoom(zoomFactor, zoomPoint);
        },
    }
});

export type ImageEditorComponent = InstanceType<typeof ImageEditorComponent>;

export const ImageEditorPlugin = {
    name: 'ejs-imageeditor',
    install(Vue: any) {
        Vue.component(ImageEditorPlugin.name, ImageEditorComponent);

    }
}
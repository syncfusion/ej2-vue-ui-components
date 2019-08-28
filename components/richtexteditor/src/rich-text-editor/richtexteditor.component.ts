import Vue from 'vue';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { RichTextEditor } from '@syncfusion/ej2-richtexteditor';


export const properties: string[] = ['backgroundColor', 'cssClass', 'editorMode', 'enableAutoUrl', 'enableHtmlEncode', 'enablePersistence', 'enableRtl', 'enableTabKey', 'enabled', 'floatingToolbarOffset', 'fontColor', 'fontFamily', 'fontSize', 'format', 'formatter', 'height', 'htmlAttributes', 'iframeSettings', 'inlineMode', 'insertImageSettings', 'keyConfig', 'locale', 'maxLength', 'pasteCleanupSettings', 'placeholder', 'quickToolbarSettings', 'readonly', 'saveInterval', 'showCharCount', 'tableSettings', 'toolbarSettings', 'undoRedoSteps', 'undoRedoTimer', 'value', 'valueTemplate', 'width', 'actionBegin', 'actionComplete', 'beforeDialogOpen', 'beforeQuickToolbarOpen', 'beforeSanitizeHtml', 'blur', 'change', 'created', 'destroyed', 'dialogClose', 'dialogOpen', 'focus', 'imageRemoving', 'imageSelected', 'imageUploadFailed', 'imageUploadSuccess', 'imageUploading', 'quickToolbarClose', 'quickToolbarOpen', 'resizeStart', 'resizeStop', 'resizing', 'toolbarClick', 'toolbarStatusUpdate'];
export const modelProps: string[] = ['value'];

/**
 * `ejs-richtexteditor` represents the VueJS RichTextEditor Component.
 * ```vue
 * <ejs-richtexteditor></ejs-richtexteditor>
 * ```
 */
@EJComponentDecorator({
    props: properties,
    model: {
        event: 'modelchanged'
    }
})
export class RichTextEditorComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new RichTextEditor({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;

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
    public trigger(eventName: string, eventProp: {[key:string]:Object}): void {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key: string[] = this.models.toString().match(/checked|value/) || [];
            let propKey: string = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                (this as any).$emit('update:'+ propKey, eventProp[propKey]);
                (this as any).$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }            
    }

    public render(createElement: any) {
        return createElement('textarea', (this as any).$slots.default);
    }
    
    public disableToolbarItem(items: string | string[], muteToolbarUpdate?: boolean): void {
        return this.ej2Instances.disableToolbarItem(items, muteToolbarUpdate);
    }

    public enableToolbarItem(items: string | string[], muteToolbarUpdate?: boolean): void {
        return this.ej2Instances.enableToolbarItem(items, muteToolbarUpdate);
    }

    public executeCommand(commandName: Object, value?: string | Object | Object | Object): void {
        return this.ej2Instances.executeCommand(commandName, value);
    }

    public focusIn(): void {
        return this.ej2Instances.focusIn();
    }

    public focusOut(): void {
        return this.ej2Instances.focusOut();
    }

    public getCharCount(): number {
        return this.ej2Instances.getCharCount();
    }

    public getContent(): Object {
        return this.ej2Instances.getContent();
    }

    public getHtml(): string {
        return this.ej2Instances.getHtml();
    }

    public getID(): string {
        return this.ej2Instances.getID();
    }

    public getRange(): Object {
        return this.ej2Instances.getRange();
    }

    public getSelection(): string {
        return this.ej2Instances.getSelection();
    }

    public getText(): string {
        return this.ej2Instances.getText();
    }

    public invokeChangeEvent(): void {
        return this.ej2Instances.invokeChangeEvent();
    }

    public preventDefaultResize(e: Object | Object): void {
        return this.ej2Instances.preventDefaultResize(e);
    }

    public print(): void {
        return this.ej2Instances.print();
    }

    public refreshUI(): void {
        return this.ej2Instances.refreshUI();
    }

    public removeToolbarItem(items: string | string[]): void {
        return this.ej2Instances.removeToolbarItem(items);
    }

    public sanitizeHtml(value: string): string {
        return this.ej2Instances.sanitizeHtml(value);
    }

    public selectAll(): void {
        return this.ej2Instances.selectAll();
    }

    public selectRange(range: Object): void {
        return this.ej2Instances.selectRange(range);
    }

    public setContentHeight(target?: string, isExpand?: boolean): void {
        return this.ej2Instances.setContentHeight(target, isExpand);
    }

    public setEnable(): void {
        return this.ej2Instances.setEnable();
    }

    public setPlaceHolder(): void {
        return this.ej2Instances.setPlaceHolder();
    }

    public setReadOnly(initial?: boolean): void {
        return this.ej2Instances.setReadOnly(initial);
    }

    public showFullScreen(): void {
        return this.ej2Instances.showFullScreen();
    }

    public showSourceCode(): void {
        return this.ej2Instances.showSourceCode();
    }

    public updateValue(value?: string): void {
        return this.ej2Instances.updateValue(value);
    }
}

export const RichTextEditorPlugin = {
    name: 'ejs-richtexteditor',
    install(Vue: any) {
        Vue.component(RichTextEditorPlugin.name, RichTextEditorComponent);

    }
}

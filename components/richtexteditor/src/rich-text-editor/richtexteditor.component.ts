import Vue from 'vue';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { RichTextEditor } from '@syncfusion/ej2-richtexteditor';


export const properties: string[] = ['backgroundColor', 'cssClass', 'editorMode', 'enableHtmlEncode', 'enablePersistence', 'enableRtl', 'enableTabKey', 'enabled', 'floatingToolbarOffset', 'fontColor', 'fontFamily', 'fontSize', 'format', 'formatter', 'height', 'htmlAttributes', 'iframeSettings', 'inlineMode', 'insertImageSettings', 'keyConfig', 'locale', 'maxLength', 'placeholder', 'quickToolbarSettings', 'readonly', 'saveInterval', 'showCharCount', 'tableSettings', 'toolbarSettings', 'undoRedoSteps', 'undoRedoTimer', 'value', 'valueTemplate', 'width', 'actionBegin', 'actionComplete', 'blur', 'change', 'created', 'destroyed', 'focus', 'resizeStart', 'resizeStop', 'resizing', 'toolbarClick'];
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
        //this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        //this.ej2Instances.setProperties = this.setProperties;

        this.bindProperties();
    }
    public trigger(eventName: string, eventProp: {[key:string]:Object}): void {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key: string[] = this.models.toString().match(/checked|value/) || [];
            let propKey: string = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                (this as any).$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }            
    }

    public setProperties(prop: any, muteOnChange: boolean): void {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && (this.models.length !== 0)) {
            let keys: string[] = Object.keys(prop);
            let emitKeys: string[] = [];
            let emitFlag: boolean = false;
            keys.map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        emitKeys.push(key);
                        emitFlag = true;
                    }
                });
            });
            if (emitFlag) {
                emitKeys.map((propKey: string): void => {
                    this.$emit('update:' + propKey, prop[propKey]);
                })
            }
        }
    }

    public render(createElement: any) {
        return createElement('textarea', (this as any).$slots.default);
    }
    
    public disableToolbarItem(items: string | string[]): void {
        return this.ej2Instances.disableToolbarItem(items);
    }

    public enableToolbarItem(items: string | string[]): void {
        return this.ej2Instances.enableToolbarItem(items);
    }

    public executeCommand(commandName: Object, value?: string | Object): void {
        return this.ej2Instances.executeCommand(commandName, value);
    }

    public focusIn(): void {
        return this.ej2Instances.focusIn();
    }

    public focusOut(): void {
        return this.ej2Instances.focusOut();
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

    public onCopy(): void {
        return this.ej2Instances.onCopy();
    }

    public onCut(): void {
        return this.ej2Instances.onCut();
    }

    public onPaste(e?: Object | Object): void {
        return this.ej2Instances.onPaste(e);
    }

    public preventDefaultResize(e: Object | Object): void {
        return this.ej2Instances.preventDefaultResize(e);
    }

    public print(): void {
        return this.ej2Instances.print();
    }

    public refresh(): void {
        return this.ej2Instances.refresh();
    }

    public removeToolbarItem(items: string | string[]): void {
        return this.ej2Instances.removeToolbarItem(items);
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

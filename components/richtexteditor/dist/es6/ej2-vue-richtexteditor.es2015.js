import { RichTextEditor } from '@syncfusion/ej2-richtexteditor';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['backgroundColor', 'cssClass', 'editorMode', 'enableHtmlEncode', 'enablePersistence', 'enableRtl', 'enableTabKey', 'enabled', 'floatingToolbarOffset', 'fontColor', 'fontFamily', 'fontSize', 'format', 'formatter', 'height', 'htmlAttributes', 'iframeSettings', 'inlineMode', 'insertImageSettings', 'keyConfig', 'locale', 'maxLength', 'placeholder', 'quickToolbarSettings', 'readonly', 'saveInterval', 'showCharCount', 'tableSettings', 'toolbarSettings', 'undoRedoSteps', 'undoRedoTimer', 'value', 'valueTemplate', 'width', 'actionBegin', 'actionComplete', 'blur', 'change', 'created', 'destroyed', 'focus', 'resizeStart', 'resizeStop', 'resizing', 'toolbarClick'];
const modelProps = ['value'];
/**
 * `ejs-richtexteditor` represents the VueJS RichTextEditor Component.
 * ```vue
 * <ejs-richtexteditor></ejs-richtexteditor>
 * ```
 */
let RichTextEditorComponent = class RichTextEditorComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = false;
        this.hasInjectedModules = true;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new RichTextEditor({});
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
        //this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        //this.ej2Instances.setProperties = this.setProperties;
        this.bindProperties();
    }
    trigger(eventName, eventProp) {
        if (eventName === 'change' && this.models && (this.models.length !== 0)) {
            let key = this.models.toString().match(/checked|value/) || [];
            let propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && (this.models.length !== 0)) {
            let keys = Object.keys(prop);
            let emitKeys = [];
            let emitFlag = false;
            keys.map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        emitKeys.push(key);
                        emitFlag = true;
                    }
                });
            });
            if (emitFlag) {
                emitKeys.map((propKey) => {
                    this.$emit('update:' + propKey, prop[propKey]);
                });
            }
        }
    }
    render(createElement) {
        return createElement('textarea', this.$slots.default);
    }
    disableToolbarItem(items) {
        return this.ej2Instances.disableToolbarItem(items);
    }
    enableToolbarItem(items) {
        return this.ej2Instances.enableToolbarItem(items);
    }
    executeCommand(commandName, value) {
        return this.ej2Instances.executeCommand(commandName, value);
    }
    focusIn() {
        return this.ej2Instances.focusIn();
    }
    focusOut() {
        return this.ej2Instances.focusOut();
    }
    getContent() {
        return this.ej2Instances.getContent();
    }
    getHtml() {
        return this.ej2Instances.getHtml();
    }
    getID() {
        return this.ej2Instances.getID();
    }
    getRange() {
        return this.ej2Instances.getRange();
    }
    getSelection() {
        return this.ej2Instances.getSelection();
    }
    getText() {
        return this.ej2Instances.getText();
    }
    invokeChangeEvent() {
        return this.ej2Instances.invokeChangeEvent();
    }
    onCopy() {
        return this.ej2Instances.onCopy();
    }
    onCut() {
        return this.ej2Instances.onCut();
    }
    onPaste(e) {
        return this.ej2Instances.onPaste(e);
    }
    preventDefaultResize(e) {
        return this.ej2Instances.preventDefaultResize(e);
    }
    print() {
        return this.ej2Instances.print();
    }
    refresh() {
        return this.ej2Instances.refresh();
    }
    removeToolbarItem(items) {
        return this.ej2Instances.removeToolbarItem(items);
    }
    selectAll() {
        return this.ej2Instances.selectAll();
    }
    selectRange(range) {
        return this.ej2Instances.selectRange(range);
    }
    setContentHeight(target, isExpand) {
        return this.ej2Instances.setContentHeight(target, isExpand);
    }
    setEnable() {
        return this.ej2Instances.setEnable();
    }
    setPlaceHolder() {
        return this.ej2Instances.setPlaceHolder();
    }
    setReadOnly(initial) {
        return this.ej2Instances.setReadOnly(initial);
    }
    showFullScreen() {
        return this.ej2Instances.showFullScreen();
    }
    showSourceCode() {
        return this.ej2Instances.showSourceCode();
    }
    updateValue(value) {
        return this.ej2Instances.updateValue(value);
    }
};
RichTextEditorComponent = __decorate([
    EJComponentDecorator({
        props: properties,
        model: {
            event: 'modelchanged'
        }
    })
], RichTextEditorComponent);
const RichTextEditorPlugin = {
    name: 'ejs-richtexteditor',
    install(Vue) {
        Vue.component(RichTextEditorPlugin.name, RichTextEditorComponent);
    }
};

export { RichTextEditorComponent, RichTextEditorPlugin };
export * from '@syncfusion/ej2-richtexteditor';
//# sourceMappingURL=ej2-vue-richtexteditor.es2015.js.map

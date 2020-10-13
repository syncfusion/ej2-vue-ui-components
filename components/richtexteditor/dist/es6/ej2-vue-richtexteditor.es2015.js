import { RichTextEditor } from '@syncfusion/ej2-richtexteditor';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['autoSaveOnIdle', 'backgroundColor', 'cssClass', 'editorMode', 'enableAutoUrl', 'enableHtmlEncode', 'enableHtmlSanitizer', 'enablePersistence', 'enableResize', 'enableRtl', 'enableTabKey', 'enableXhtml', 'enabled', 'floatingToolbarOffset', 'fontColor', 'fontFamily', 'fontSize', 'format', 'formatter', 'height', 'htmlAttributes', 'iframeSettings', 'inlineMode', 'insertImageSettings', 'keyConfig', 'locale', 'maxLength', 'pasteCleanupSettings', 'placeholder', 'quickToolbarSettings', 'readonly', 'saveInterval', 'showCharCount', 'tableSettings', 'toolbarSettings', 'undoRedoSteps', 'undoRedoTimer', 'value', 'valueTemplate', 'width', 'actionBegin', 'actionComplete', 'afterImageDelete', 'beforeDialogClose', 'beforeDialogOpen', 'beforeImageUpload', 'beforeQuickToolbarOpen', 'beforeSanitizeHtml', 'blur', 'change', 'created', 'destroyed', 'dialogClose', 'dialogOpen', 'focus', 'imageRemoving', 'imageSelected', 'imageUploadFailed', 'imageUploadSuccess', 'imageUploading', 'quickToolbarClose', 'quickToolbarOpen', 'resizeStart', 'resizeStop', 'resizing', 'toolbarClick', 'toolbarStatusUpdate'];
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
    trigger(eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key = this.models.toString().match(/checked|value/) || [];
            let propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            let key = this.models.toString().match(/currentView|selectedDate/) || [];
            let propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    }
    render(createElement) {
        return createElement('textarea', this.$slots.default);
    }
    disableToolbarItem(items, muteToolbarUpdate) {
        return this.ej2Instances.disableToolbarItem(items, muteToolbarUpdate);
    }
    enableToolbarItem(items, muteToolbarUpdate) {
        return this.ej2Instances.enableToolbarItem(items, muteToolbarUpdate);
    }
    executeCommand(commandName, value, option) {
        return this.ej2Instances.executeCommand(commandName, value, option);
    }
    focusIn() {
        return this.ej2Instances.focusIn();
    }
    focusOut() {
        return this.ej2Instances.focusOut();
    }
    getCharCount() {
        return this.ej2Instances.getCharCount();
    }
    getContent() {
        return this.ej2Instances.getContent();
    }
    getHtml() {
        return this.ej2Instances.getHtml();
    }
    getRange() {
        return this.ej2Instances.getRange();
    }
    getSelectedHtml() {
        return this.ej2Instances.getSelectedHtml();
    }
    getSelection() {
        return this.ej2Instances.getSelection();
    }
    getText() {
        return this.ej2Instances.getText();
    }
    getXhtml() {
        return this.ej2Instances.getXhtml();
    }
    hideInlineToolbar() {
        return this.ej2Instances.hideInlineToolbar();
    }
    print() {
        return this.ej2Instances.print();
    }
    refreshUI() {
        return this.ej2Instances.refreshUI();
    }
    removeToolbarItem(items) {
        return this.ej2Instances.removeToolbarItem(items);
    }
    sanitizeHtml(value) {
        return this.ej2Instances.sanitizeHtml(value);
    }
    selectAll() {
        return this.ej2Instances.selectAll();
    }
    selectRange(range) {
        return this.ej2Instances.selectRange(range);
    }
    showFullScreen() {
        return this.ej2Instances.showFullScreen();
    }
    showInlineToolbar() {
        return this.ej2Instances.showInlineToolbar();
    }
    showSourceCode() {
        return this.ej2Instances.showSourceCode();
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

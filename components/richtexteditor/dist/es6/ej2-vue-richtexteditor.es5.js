import { RichTextEditor } from '@syncfusion/ej2-richtexteditor';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties = ['backgroundColor', 'cssClass', 'editorMode', 'enableAutoUrl', 'enableHtmlEncode', 'enableHtmlSanitizer', 'enablePersistence', 'enableResize', 'enableRtl', 'enableTabKey', 'enableXhtml', 'enabled', 'floatingToolbarOffset', 'fontColor', 'fontFamily', 'fontSize', 'format', 'formatter', 'height', 'htmlAttributes', 'iframeSettings', 'inlineMode', 'insertImageSettings', 'keyConfig', 'locale', 'maxLength', 'pasteCleanupSettings', 'placeholder', 'quickToolbarSettings', 'readonly', 'saveInterval', 'showCharCount', 'tableSettings', 'toolbarSettings', 'undoRedoSteps', 'undoRedoTimer', 'value', 'valueTemplate', 'width', 'actionBegin', 'actionComplete', 'beforeDialogOpen', 'beforeQuickToolbarOpen', 'beforeSanitizeHtml', 'blur', 'change', 'created', 'destroyed', 'dialogClose', 'dialogOpen', 'focus', 'imageRemoving', 'imageSelected', 'imageUploadFailed', 'imageUploadSuccess', 'imageUploading', 'quickToolbarClose', 'quickToolbarOpen', 'resizeStart', 'resizeStop', 'resizing', 'toolbarClick', 'toolbarStatusUpdate'];
var modelProps = ['value'];
/**
 * `ejs-richtexteditor` represents the VueJS RichTextEditor Component.
 * ```vue
 * <ejs-richtexteditor></ejs-richtexteditor>
 * ```
 */
var RichTextEditorComponent = /** @__PURE__ @class */ (function (_super) {
    __extends(RichTextEditorComponent, _super);
    function RichTextEditorComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = true;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new RichTextEditor({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    RichTextEditorComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        _this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    };
    RichTextEditorComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    RichTextEditorComponent.prototype.render = function (createElement) {
        return createElement('textarea', this.$slots.default);
    };
    RichTextEditorComponent.prototype.disableToolbarItem = function (items, muteToolbarUpdate) {
        return this.ej2Instances.disableToolbarItem(items, muteToolbarUpdate);
    };
    RichTextEditorComponent.prototype.enableToolbarItem = function (items, muteToolbarUpdate) {
        return this.ej2Instances.enableToolbarItem(items, muteToolbarUpdate);
    };
    RichTextEditorComponent.prototype.executeCommand = function (commandName, value) {
        return this.ej2Instances.executeCommand(commandName, value);
    };
    RichTextEditorComponent.prototype.focusIn = function () {
        return this.ej2Instances.focusIn();
    };
    RichTextEditorComponent.prototype.focusOut = function () {
        return this.ej2Instances.focusOut();
    };
    RichTextEditorComponent.prototype.getCharCount = function () {
        return this.ej2Instances.getCharCount();
    };
    RichTextEditorComponent.prototype.getContent = function () {
        return this.ej2Instances.getContent();
    };
    RichTextEditorComponent.prototype.getHtml = function () {
        return this.ej2Instances.getHtml();
    };
    RichTextEditorComponent.prototype.getRange = function () {
        return this.ej2Instances.getRange();
    };
    RichTextEditorComponent.prototype.getSelectedHtml = function () {
        return this.ej2Instances.getSelectedHtml();
    };
    RichTextEditorComponent.prototype.getSelection = function () {
        return this.ej2Instances.getSelection();
    };
    RichTextEditorComponent.prototype.getText = function () {
        return this.ej2Instances.getText();
    };
    RichTextEditorComponent.prototype.print = function () {
        return this.ej2Instances.print();
    };
    RichTextEditorComponent.prototype.refreshUI = function () {
        return this.ej2Instances.refreshUI();
    };
    RichTextEditorComponent.prototype.removeToolbarItem = function (items) {
        return this.ej2Instances.removeToolbarItem(items);
    };
    RichTextEditorComponent.prototype.sanitizeHtml = function (value) {
        return this.ej2Instances.sanitizeHtml(value);
    };
    RichTextEditorComponent.prototype.selectAll = function () {
        return this.ej2Instances.selectAll();
    };
    RichTextEditorComponent.prototype.selectRange = function (range) {
        return this.ej2Instances.selectRange(range);
    };
    RichTextEditorComponent.prototype.showFullScreen = function () {
        return this.ej2Instances.showFullScreen();
    };
    RichTextEditorComponent.prototype.showSourceCode = function () {
        return this.ej2Instances.showSourceCode();
    };
    RichTextEditorComponent = __decorate([
        EJComponentDecorator({
            props: properties,
            model: {
                event: 'modelchanged'
            }
        })
    ], RichTextEditorComponent);
    return RichTextEditorComponent;
}(ComponentBase));
var RichTextEditorPlugin = {
    name: 'ejs-richtexteditor',
    install: function (Vue) {
        Vue.component(RichTextEditorPlugin.name, RichTextEditorComponent);
    }
};

export { RichTextEditorComponent, RichTextEditorPlugin };
export * from '@syncfusion/ej2-richtexteditor';
//# sourceMappingURL=ej2-vue-richtexteditor.es5.js.map

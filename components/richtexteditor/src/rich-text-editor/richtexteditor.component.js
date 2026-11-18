import { ComponentBase, gh, getProps, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { isUndefined } from '@syncfusion/ej2-base';
import { RichTextEditor } from '@syncfusion/ej2-richtexteditor';
export var properties = ['isLazyUpdate', 'plugins', 'aiAssistantSettings', 'autoSaveOnIdle', 'backgroundColor', 'bulletFormatList', 'codeBlockSettings', 'cssClass', 'editorMode', 'emojiPickerSettings', 'enableAutoUrl', 'enableClipboardCleanup', 'enableHtmlEncode', 'enableHtmlSanitizer', 'enableMarkdownAutoFormat', 'enablePersistence', 'enableResize', 'enableRtl', 'enableTabKey', 'enableWebMcp', 'enableXhtml', 'enabled', 'enterKey', 'exportPdf', 'exportWord', 'fileManagerSettings', 'floatingToolbarOffset', 'fontColor', 'fontFamily', 'fontSize', 'format', 'formatPainterSettings', 'formatter', 'height', 'htmlAttributes', 'iframeSettings', 'importWord', 'inlineMode', 'insertAudioSettings', 'insertImageSettings', 'insertVideoSettings', 'keyConfig', 'lineHeight', 'locale', 'maxLength', 'numberFormatList', 'pasteCleanupSettings', 'placeholder', 'quickToolbarSettings', 'readonly', 'saveInterval', 'shiftEnterKey', 'showCharCount', 'showTooltip', 'slashMenuSettings', 'tableSettings', 'toolbarSettings', 'undoRedoSteps', 'undoRedoTimer', 'value', 'valueTemplate', 'webMcpSettings', 'width', 'actionBegin', 'actionComplete', 'afterImageDelete', 'afterMediaDelete', 'afterPasteCleanup', 'aiAssistantPromptRequest', 'aiAssistantStopRespondingClick', 'aiAssistantToolbarClick', 'beforeClipboardWrite', 'beforeDialogClose', 'beforeDialogOpen', 'beforeFileUpload', 'beforeImageDrop', 'beforeImageUpload', 'beforeMediaDrop', 'beforePasteCleanup', 'beforePopupClose', 'beforePopupOpen', 'beforeQuickToolbarOpen', 'beforeSanitizeHtml', 'beforeWebMcpToolExecute', 'blur', 'change', 'created', 'destroyed', 'dialogClose', 'dialogOpen', 'documentExporting', 'fileRemoving', 'fileSelected', 'fileUploadFailed', 'fileUploadSuccess', 'fileUploading', 'focus', 'imageRemoving', 'imageSelected', 'imageUploadFailed', 'imageUploadSuccess', 'imageUploading', 'quickToolbarClose', 'quickToolbarOpen', 'resizeStart', 'resizeStop', 'resizing', 'selectionChanged', 'slashMenuItemSelect', 'toolbarClick', 'toolbarStatusUpdate', 'updatedToolbarStatus', 'wordImporting'];
export var modelProps = ['value'];
export var testProp = getProps({ props: properties });
export var props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (var _i = 0, modelProps_1 = modelProps; _i < modelProps_1.length; _i++) {
    var props_1 = modelProps_1[_i];
    emitProbs.push('update:' + props_1);
}
/**
 * `ejs-richtexteditor` represents the VueJS RichTextEditor Component.
 * ```ts
 * <ejs-richtexteditor></ejs-richtexteditor>
 * ```
 */
export var RichTextEditorComponent = vueDefineComponent({
    name: 'RichTextEditorComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    model: { event: 'modelchanged' },
    provide: function () { return { custom: this.custom }; },
    data: function () {
        return {
            ej2Instances: new RichTextEditor({}),
            propKeys: properties,
            models: modelProps,
            hasChildDirective: false,
            hasInjectedModules: true,
            tagMapper: {},
            tagNameMapper: {},
            isVue3: !isExecute,
            templateCollection: {},
        };
    },
    created: function () {
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
        this.ej2Instances.clearTemplate = this.clearTemplate;
        this.updated = this.updated;
    },
    render: function (createElement) {
        var h = !isExecute ? gh : createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = !isExecute ? this.$slots.default() : this.$slots.default;
        }
        return h('textarea', slots);
    },
    methods: {
        clearTemplate: function (templateNames) {
            if (!templateNames) {
                templateNames = Object.keys(this.templateCollection || {});
            }
            if (templateNames.length && this.templateCollection) {
                for (var _i = 0, templateNames_1 = templateNames; _i < templateNames_1.length; _i++) {
                    var tempName = templateNames_1[_i];
                    var elementCollection = this.templateCollection[tempName];
                    if (elementCollection && elementCollection.length) {
                        for (var _a = 0, elementCollection_1 = elementCollection; _a < elementCollection_1.length; _a++) {
                            var ele = elementCollection_1[_a];
                            this.destroyPortals(ele);
                        }
                        delete this.templateCollection[tempName];
                    }
                }
            }
        },
        setProperties: function (prop, muteOnChange) {
            var _this = this;
            if (this.isVue3) {
                this.models = !this.models ? this.ej2Instances.referModels : this.models;
            }
            if (this.ej2Instances && this.ej2Instances._setProperties) {
                this.ej2Instances._setProperties(prop, muteOnChange);
            }
            if (prop && this.models && this.models.length) {
                Object.keys(prop).map(function (key) {
                    _this.models.map(function (model) {
                        if ((key === model) && !(/datasource/i.test(key))) {
                            if (_this.isVue3) {
                                _this.ej2Instances.vueInstance.$emit('update:' + key, prop[key]);
                            }
                            else {
                                _this.$emit('update:' + key, prop[key]);
                                _this.$emit('modelchanged', prop[key]);
                            }
                        }
                    });
                });
            }
        },
        trigger: function (eventName, eventProp, successHandler) {
            if (!isExecute) {
                this.models = !this.models ? this.ej2Instances.referModels : this.models;
            }
            if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
                var key = this.models.toString().match(/checked|value/) || [];
                var propKey = key[0];
                if (eventProp && key && !isUndefined(eventProp[propKey])) {
                    if (!isExecute) {
                        this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                        this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                        this.ej2Instances.vueInstance.$emit('update:modelValue', eventProp[propKey]);
                    }
                    else {
                        if (eventName === 'change' || (this.$props && !this.$props.isLazyUpdate)) {
                            this.$emit('update:' + propKey, eventProp[propKey]);
                            this.$emit('modelchanged', eventProp[propKey]);
                        }
                    }
                }
            }
            else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
                var key = this.models.toString().match(/currentView|selectedDate/) || [];
                var propKey = key[0];
                if (eventProp && key && !isUndefined(eventProp[propKey])) {
                    if (!isExecute) {
                        this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                        this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                    }
                    else {
                        this.$emit('update:' + propKey, eventProp[propKey]);
                        this.$emit('modelchanged', eventProp[propKey]);
                    }
                }
            }
            if ((this.ej2Instances && this.ej2Instances._trigger)) {
                this.ej2Instances._trigger(eventName, eventProp, successHandler);
            }
        },
        custom: function () {
            this.updated();
        },
        addAIPromptResponse: function (outputResponse, isFinalUpdate) {
            return this.ej2Instances.addAIPromptResponse(outputResponse, isFinalUpdate);
        },
        addAnchorAriaLabel: function (value) {
            return this.ej2Instances.addAnchorAriaLabel(value);
        },
        cleanList: function (e) {
            return this.ej2Instances.cleanList(e);
        },
        clearAIPromptHistory: function () {
            return this.ej2Instances.clearAIPromptHistory();
        },
        clearUndoRedo: function () {
            return this.ej2Instances.clearUndoRedo();
        },
        closeDialog: function (type) {
            return this.ej2Instances.closeDialog(type);
        },
        destroy: function () {
            return this.ej2Instances.destroy();
        },
        disableToolbarItem: function (items, muteToolbarUpdate) {
            return this.ej2Instances.disableToolbarItem(items, muteToolbarUpdate);
        },
        enableToolbarItem: function (items, muteToolbarUpdate) {
            return this.ej2Instances.enableToolbarItem(items, muteToolbarUpdate);
        },
        executeAIPrompt: function (prompt) {
            return this.ej2Instances.executeAIPrompt(prompt);
        },
        executeCommand: function (commandName, value, option) {
            return this.ej2Instances.executeCommand(commandName, value, option);
        },
        focusIn: function () {
            return this.ej2Instances.focusIn();
        },
        focusOut: function () {
            return this.ej2Instances.focusOut();
        },
        getAIPromptHistory: function () {
            return this.ej2Instances.getAIPromptHistory();
        },
        getCharCount: function () {
            return this.ej2Instances.getCharCount();
        },
        getContent: function () {
            return this.ej2Instances.getContent();
        },
        getHtml: function () {
            return this.ej2Instances.getHtml();
        },
        getRange: function () {
            return this.ej2Instances.getRange();
        },
        getSelectedHtml: function () {
            return this.ej2Instances.getSelectedHtml();
        },
        getSelection: function () {
            return this.ej2Instances.getSelection();
        },
        getText: function () {
            return this.ej2Instances.getText();
        },
        getWebMcpTools: function (toolNames) {
            return this.ej2Instances.getWebMcpTools(toolNames);
        },
        getXhtml: function () {
            return this.ej2Instances.getXhtml();
        },
        hideAIAssistantPopup: function () {
            return this.ej2Instances.hideAIAssistantPopup();
        },
        hideInlineToolbar: function () {
            return this.ej2Instances.hideInlineToolbar();
        },
        print: function () {
            return this.ej2Instances.print();
        },
        refreshUI: function () {
            return this.ej2Instances.refreshUI();
        },
        removeToolbarItem: function (items) {
            return this.ej2Instances.removeToolbarItem(items);
        },
        renderTemplates: function (callBack) {
            return this.ej2Instances.renderTemplates(callBack);
        },
        sanitizeHtml: function (value) {
            return this.ej2Instances.sanitizeHtml(value);
        },
        selectAll: function () {
            return this.ej2Instances.selectAll();
        },
        selectRange: function (range) {
            return this.ej2Instances.selectRange(range);
        },
        showAIAssistantPopup: function () {
            return this.ej2Instances.showAIAssistantPopup();
        },
        showDialog: function (type) {
            return this.ej2Instances.showDialog(type);
        },
        showEmojiPicker: function (x, y) {
            return this.ej2Instances.showEmojiPicker(x, y);
        },
        showFullScreen: function () {
            return this.ej2Instances.showFullScreen();
        },
        showInlineToolbar: function () {
            return this.ej2Instances.showInlineToolbar();
        },
        showSourceCode: function () {
            return this.ej2Instances.showSourceCode();
        },
    }
});
export var RichTextEditorPlugin = {
    name: 'ejs-richtexteditor',
    install: function (Vue) {
        Vue.component(RichTextEditorPlugin.name, RichTextEditorComponent);
    }
};

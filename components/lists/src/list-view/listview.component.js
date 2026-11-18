import { ComponentBase, gh, getProps, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { ListView } from '@syncfusion/ej2-lists';
export var properties = ['isLazyUpdate', 'plugins', 'animation', 'checkBoxPosition', 'cssClass', 'dataSource', 'disableHtmlEncode', 'enable', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'enabled', 'fields', 'groupTemplate', 'headerTemplate', 'headerTitle', 'height', 'htmlAttributes', 'locale', 'query', 'showCheckBox', 'showHeader', 'showIcon', 'sortOrder', 'template', 'width', 'actionBegin', 'actionComplete', 'actionFailure', 'scroll', 'select'];
export var modelProps = [];
export var testProp = getProps({ props: properties });
export var props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (var _i = 0, modelProps_1 = modelProps; _i < modelProps_1.length; _i++) {
    var props_1 = modelProps_1[_i];
    emitProbs.push('update:' + props_1);
}
/**
 * Represents VueJS ListView Component
 * ```
 * <ejs-listview :dataSource='data'></ejs-listview>
 * ```
 */
export var ListViewComponent = vueDefineComponent({
    name: 'ListViewComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide: function () { return { custom: this.custom }; },
    data: function () {
        return {
            ej2Instances: new ListView({}),
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
        return h('div', slots);
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
        custom: function () {
            this.updated();
        },
        addItem: function (data, fields, index) {
            return this.ej2Instances.addItem(data, fields, index);
        },
        back: function () {
            return this.ej2Instances.back();
        },
        checkAllItems: function () {
            return this.ej2Instances.checkAllItems();
        },
        checkItem: function (item) {
            return this.ej2Instances.checkItem(item);
        },
        destroy: function () {
            return this.ej2Instances.destroy();
        },
        disableItem: function (item) {
            return this.ej2Instances.disableItem(item);
        },
        enableItem: function (item) {
            return this.ej2Instances.enableItem(item);
        },
        findItem: function (item) {
            return this.ej2Instances.findItem(item);
        },
        getSelectedItems: function () {
            return this.ej2Instances.getSelectedItems();
        },
        hideItem: function (item) {
            return this.ej2Instances.hideItem(item);
        },
        refreshItemHeight: function () {
            return this.ej2Instances.refreshItemHeight();
        },
        removeItem: function (item) {
            return this.ej2Instances.removeItem(item);
        },
        removeMultipleItems: function (item) {
            return this.ej2Instances.removeMultipleItems(item);
        },
        requiredModules: function () {
            return this.ej2Instances.requiredModules();
        },
        selectItem: function (item) {
            return this.ej2Instances.selectItem(item);
        },
        selectMultipleItems: function (item) {
            return this.ej2Instances.selectMultipleItems(item);
        },
        showItem: function (item) {
            return this.ej2Instances.showItem(item);
        },
        uncheckAllItems: function () {
            return this.ej2Instances.uncheckAllItems();
        },
        uncheckItem: function (item) {
            return this.ej2Instances.uncheckItem(item);
        },
        unselectItem: function (item) {
            return this.ej2Instances.unselectItem(item);
        },
    }
});
export var ListViewPlugin = {
    name: 'ejs-listview',
    install: function (Vue) {
        Vue.component(ListViewPlugin.name, ListViewComponent);
    }
};

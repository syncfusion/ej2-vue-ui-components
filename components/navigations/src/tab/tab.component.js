import { ComponentBase, gh, getProps, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { Tab } from '@syncfusion/ej2-navigations';
import { TabItemsDirective, TabItemDirective, TabItemsPlugin, TabItemPlugin } from './items.directive';
export var properties = ['isLazyUpdate', 'plugins', 'allowDragAndDrop', 'animation', 'clearTemplates', 'cssClass', 'dragArea', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'headerPlacement', 'height', 'heightAdjustMode', 'items', 'loadOn', 'locale', 'overflowMode', 'reorderActiveTab', 'scrollStep', 'selectedItem', 'showCloseButton', 'swipeMode', 'width', 'added', 'adding', 'created', 'destroyed', 'dragged', 'dragging', 'onDragStart', 'removed', 'removing', 'selected', 'selecting'];
export var modelProps = [];
export var testProp = getProps({ props: properties });
export var props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (var _i = 0, modelProps_1 = modelProps; _i < modelProps_1.length; _i++) {
    var props_1 = modelProps_1[_i];
    emitProbs.push('update:' + props_1);
}
/**
 * Represents the VueJS Tab Component.
 * ```html
 * <ejs-tab></ejs-tab>
 * ```
 */
export var TabComponent = vueDefineComponent({
    name: 'TabComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide: function () { return { custom: this.custom }; },
    data: function () {
        return {
            ej2Instances: new Tab({}),
            propKeys: properties,
            models: modelProps,
            hasChildDirective: true,
            hasInjectedModules: false,
            tagMapper: { "e-tabitems": "e-tabitem" },
            tagNameMapper: { "e-tabitems": "e-items" },
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
        addTab: function (items, index) {
            return this.ej2Instances.addTab(items, index);
        },
        destroy: function () {
            return this.ej2Instances.destroy();
        },
        disable: function (value) {
            return this.ej2Instances.disable(value);
        },
        enableTab: function (index, value) {
            return this.ej2Instances.enableTab(index, value);
        },
        getItemIndex: function (tabItemId) {
            return this.ej2Instances.getItemIndex(tabItemId);
        },
        hideTab: function (index, value) {
            return this.ej2Instances.hideTab(index, value);
        },
        refresh: function () {
            return this.ej2Instances.refresh();
        },
        refreshActiveTab: function () {
            return this.ej2Instances.refreshActiveTab();
        },
        refreshActiveTabBorder: function () {
            return this.ej2Instances.refreshActiveTabBorder();
        },
        refreshOverflow: function () {
            return this.ej2Instances.refreshOverflow();
        },
        removeTab: function (index) {
            return this.ej2Instances.removeTab(index);
        },
        select: function (args, event) {
            return this.ej2Instances.select(args, event);
        },
    }
});
export var TabPlugin = {
    name: 'ejs-tab',
    install: function (Vue) {
        Vue.component(TabPlugin.name, TabComponent);
        Vue.component(TabItemPlugin.name, TabItemDirective);
        Vue.component(TabItemsPlugin.name, TabItemsDirective);
    }
};

import { ComponentBase, gh, getProps, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { Menu } from '@syncfusion/ej2-navigations';
import { MenuItemsDirective, MenuItemDirective, MenuItemsPlugin, MenuItemPlugin } from './items.directive';
export var properties = ['isLazyUpdate', 'plugins', 'animationSettings', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableScrolling', 'fields', 'filter', 'hamburgerMode', 'hoverDelay', 'items', 'locale', 'orientation', 'showItemOnClick', 'target', 'template', 'title', 'beforeClose', 'beforeItemRender', 'beforeOpen', 'created', 'onClose', 'onOpen', 'select'];
export var modelProps = [];
export var testProp = getProps({ props: properties });
export var props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (var _i = 0, modelProps_1 = modelProps; _i < modelProps_1.length; _i++) {
    var props_1 = modelProps_1[_i];
    emitProbs.push('update:' + props_1);
}
/**
 * Represents the Essential JS 2 VueJS Menu Component.
 * ```html
 * <ejs-menu :items='menuItems'></ejs-menu>
 * ```
 */
export var MenuComponent = vueDefineComponent({
    name: 'MenuComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide: function () { return { custom: this.custom }; },
    data: function () {
        return {
            ej2Instances: new Menu({}),
            propKeys: properties,
            models: modelProps,
            hasChildDirective: true,
            hasInjectedModules: false,
            tagMapper: { "e-menu-items": "e-" },
            tagNameMapper: { "e-menu-items": "e-items" },
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
        return h('ul', slots);
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
        close: function () {
            return this.ej2Instances.close();
        },
        destroy: function () {
            return this.ej2Instances.destroy();
        },
        enableItems: function (items, enable, isUniqueId) {
            return this.ej2Instances.enableItems(items, enable, isUniqueId);
        },
        getItemIndex: function (item, isUniqueId) {
            return this.ej2Instances.getItemIndex(item, isUniqueId);
        },
        getMenuWidth: function (menuElement, width, isRtl) {
            return this.ej2Instances.getMenuWidth(menuElement, width, isRtl);
        },
        hideItems: function (items, isUniqueId) {
            return this.ej2Instances.hideItems(items, isUniqueId);
        },
        insertAfter: function (items, text, isUniqueId) {
            return this.ej2Instances.insertAfter(items, text, isUniqueId);
        },
        insertBefore: function (items, text, isUniqueId) {
            return this.ej2Instances.insertBefore(items, text, isUniqueId);
        },
        open: function () {
            return this.ej2Instances.open();
        },
        removeItems: function (items, isUniqueId) {
            return this.ej2Instances.removeItems(items, isUniqueId);
        },
        setItem: function (item, id, isUniqueId) {
            return this.ej2Instances.setItem(item, id, isUniqueId);
        },
        showItems: function (items, isUniqueId) {
            return this.ej2Instances.showItems(items, isUniqueId);
        },
    }
});
export var MenuPlugin = {
    name: 'ejs-menu',
    install: function (Vue) {
        Vue.component(MenuPlugin.name, MenuComponent);
        Vue.component(MenuItemPlugin.name, MenuItemDirective);
        Vue.component(MenuItemsPlugin.name, MenuItemsDirective);
    }
};

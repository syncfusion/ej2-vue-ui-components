import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var TabItemsDirective = vueDefineComponent({
    inject: { custom: { default: null } },
    render: function (createElement) {
        if (!isExecute) {
            var h = !isExecute ? gh : createElement;
            var slots = null;
            if (!isNullOrUndefined(this.$slots.default)) {
                slots = !isExecute ? this.$slots.default() : this.$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    },
    updated: function () {
        if (!isExecute && this.custom) {
            this.custom();
        }
    },
    methods: {
        getTag: function () {
            return 'e-tabitems';
        }
    }
});
export var TabItemsPlugin = {
    name: 'e-tabitems',
    install: function (Vue) {
        Vue.component(TabItemsPlugin.name, TabItemsDirective);
    }
};
/**
 * 'e-tabitem' directive represent a item of the Vue Tab
 * It must be contained in a Tab component(`ejs-tab`).
 * ```html
 * <ejs-tab>
 *  <e-tabitems>
 *   <e-tabitem :header='Header 1' :content='Content 1'></e-tabitem>
 *   <e-tabitem :header='Header 2' :content='Content 2'></e-tabitem>
 *  <e-tabitems>
 * </ejs-tab>
 * ```
 */
export var TabItemDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-tabitem';
        }
    }
});
export var TabItemPlugin = {
    name: 'e-tabitem',
    install: function (Vue) {
        Vue.component(TabItemPlugin.name, TabItemDirective);
    }
};

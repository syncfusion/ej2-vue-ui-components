import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var BreadcrumbItemsDirective = vueDefineComponent({
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
            return 'e-breadcrumb-items';
        }
    }
});
export var BreadcrumbItemsPlugin = {
    name: 'e-breadcrumb-items',
    install: function (Vue) {
        Vue.component(BreadcrumbItemsPlugin.name, BreadcrumbItemsDirective);
    }
};
/**
 * `e-breadcrumb-item` directive represent a item of the Vue Breadcrumb.
 * It must be contained in a Breadcrumb component(`ejs-breadcrumb`).
 * ```html
 * <ejs-breadcrumb>
 *   <e-breadcrumb-items>
 *    <e-breadcrumb-item text='Home' url='/'></e-breadcrumb-item>
 *    <e-breadcrumb-item text='Index' url='./index'></e-breadcrumb-item>
 *   </e-breadcrumb-items>
 * </ejs-breadcrumb>
 * ```
 */
export var BreadcrumbItemDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-breadcrumb-item';
        }
    }
});
export var BreadcrumbItemPlugin = {
    name: 'e-breadcrumb-item',
    install: function (Vue) {
        Vue.component(BreadcrumbItemPlugin.name, BreadcrumbItemDirective);
    }
};

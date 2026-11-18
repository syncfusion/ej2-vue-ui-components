import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var MenuItemsDirective = vueDefineComponent({
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
            return 'e-menu-items';
        }
    }
});
export var MenuItemsPlugin = {
    name: 'e-menu-items',
    install: function (Vue) {
        Vue.component(MenuItemsPlugin.name, MenuItemsDirective);
    }
};
export var MenuItemDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-';
        }
    }
});
export var MenuItemPlugin = {
    name: 'e-',
    install: function (Vue) {
        Vue.component(MenuItemPlugin.name, MenuItemDirective);
    }
};

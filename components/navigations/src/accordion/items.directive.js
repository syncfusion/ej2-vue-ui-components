import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var AccordionItemsDirective = vueDefineComponent({
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
            return 'e-accordionitems';
        }
    }
});
export var AccordionItemsPlugin = {
    name: 'e-accordionitems',
    install: function (Vue) {
        Vue.component(AccordionItemsPlugin.name, AccordionItemsDirective);
    }
};
/**
 * 'e-accordionitem' directive represent a item of Vue Accordion
 * It must be contained in a Accordion component(`ejs-accordion`).
 * ```html
 * <ejs-accordion>
 *   <e-accordionitems>
 *    <e-accordionitem header='Header1'></e-accordionitem>
 *    <e-accordionitem header='Header2' content='Content2'></e-accordionitem>
 *   </e-accordionitems>
 * </ejs-accordion>
 * ```
 */
export var AccordionItemDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-accordionitem';
        }
    }
});
export var AccordionItemPlugin = {
    name: 'e-accordionitem',
    install: function (Vue) {
        Vue.component(AccordionItemPlugin.name, AccordionItemDirective);
    }
};

import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var StepsDirective = vueDefineComponent({
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
            return 'e-steps';
        }
    }
});
export var StepsPlugin = {
    name: 'e-steps',
    install: function (Vue) {
        Vue.component(StepsPlugin.name, StepsDirective);
    }
};
/**
 * 'e-step' directive represents a step of the Vue Stepper
 * It must be contained in a Stepper component(`ejs-stepper`).
 * ```html
 * <ejs-stepper>
 *  <e-steps>
 *   <e-step :iconCss='e-icons e-folder' :text='Step 1' />
 *   <e-step :iconCss='e-icons e-folder' :text='Step 2' />
 *  </e-steps>
 * </ejs-stepper>
 * ```
 */
export var StepDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-step';
        }
    }
});
export var StepPlugin = {
    name: 'e-step',
    install: function (Vue) {
        Vue.component(StepPlugin.name, StepDirective);
    }
};

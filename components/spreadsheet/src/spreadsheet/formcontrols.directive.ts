import { gh, isExecute, vueDefineComponent, DefineVueDirective } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { FormControlModel } from '@syncfusion/ej2-spreadsheet';

export let FormControlsDirective =  vueDefineComponent({
    inject: { custom: { default: null } },
    render(createElement: any): void {
        if (!isExecute) {
            let h: any = !isExecute ? gh : createElement;
            let slots: any = null;
            if(!isNullOrUndefined((this as any).$slots.default)) {
                slots = !isExecute ? (this as any).$slots.default() : (this as any).$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    },
    updated(): void {
        if (!isExecute && this.custom) { this.custom() }
    },
    methods: {
        getTag(): string {
            return 'e-formcontrols';
        }
    }
});
export const FormControlsPlugin = {
    name: 'e-formcontrols',
    install(Vue: any) {
        Vue.component(FormControlsPlugin.name, FormControlsDirective);
    }
}

/**
 * `e-formcontrol` directive represent a formcontrol of the VueJS Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```html
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-formcontrols>
 *    <e-formcontrol></e-formcontrol>
 *    </e-formcontrols>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
export let FormControlDirective: DefineVueDirective<FormControlModel> =  vueDefineComponent({
    render(): void {
        return;
    },
    methods: {
        getTag(): string {
            return 'e-formcontrol';
        }
    }
});
export const FormControlPlugin = {
    name: 'e-formcontrol',
    install(Vue: any) {
        Vue.component(FormControlPlugin.name, FormControlDirective);
    }
}
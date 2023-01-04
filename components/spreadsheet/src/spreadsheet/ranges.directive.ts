import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class RangesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const RangesPlugin = {
    name: 'e-ranges',
    install(Vue: any) {
        Vue.component(RangesPlugin.name, RangesDirective);
    }
}

/**
 * `e-range` directive represent a range of the VueJS Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```vue
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-ranges>
 *    <e-range :dataSource='data'></e-range>
 *    </e-ranges>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
@EJComponentDecorator({})
export class RangeDirective extends Vue {
    public render(): void {
        return;
    }
}
export const RangePlugin = {
    name: 'e-range',
    install(Vue: any) {
        Vue.component(RangePlugin.name, RangeDirective);
    }
}

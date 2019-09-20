import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class RowsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const RowsPlugin = {
    name: 'e-rows',
    install(Vue: any) {
        Vue.component(RowsPlugin.name, RowsDirective);
    }
}

/**
 * `e-row` directive represent a row of the VueJS Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```vue
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-rows>
 *    <e-row></e-row>
 *    </e-rows>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
@EJComponentDecorator({})
export class RowDirective extends Vue {
    public render(): void {
        return;
    }
}
export const RowPlugin = {
    name: 'e-row',
    install(Vue: any) {
        Vue.component(RowPlugin.name, RowDirective);
    }
}

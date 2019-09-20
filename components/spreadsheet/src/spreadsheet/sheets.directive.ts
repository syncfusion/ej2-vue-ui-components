import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class SheetsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const SheetsPlugin = {
    name: 'e-sheets',
    install(Vue: any) {
        Vue.component(SheetsPlugin.name, SheetsDirective);
    }
}

/**
 * `e-sheet` directive represent a sheet of the VueJS Spreadsheet.
 * It must be contained in a Spreadsheet component(`ejs-spreadsheet`).
 * ```vue
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet></e-sheet>
 *    <e-sheet></e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
@EJComponentDecorator({})
export class SheetDirective extends Vue {
    public render(): void {
        return;
    }
}
export const SheetPlugin = {
    name: 'e-sheet',
    install(Vue: any) {
        Vue.component(SheetPlugin.name, SheetDirective);
    }
}

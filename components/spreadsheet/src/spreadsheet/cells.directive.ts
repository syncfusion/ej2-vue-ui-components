import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class CellsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const CellsPlugin = {
    name: 'e-cells',
    install(Vue: any) {
        Vue.component(CellsPlugin.name, CellsDirective);
    }
}

/**
 * `e-cell` directive represent a cell of the VueJS Spreadsheet.
 * It must be contained in a `e-row` directive.
 * ```vue
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-rows>
 *    <e-row>
 *    <e-cells>
 *    <e-cell value='A1'></e-cell>
 *    </e-cells>
 *    </e-row>
 *    </e-rows>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
@EJComponentDecorator({})
export class CellDirective extends Vue {
    public render(): void {
        return;
    }
}
export const CellPlugin = {
    name: 'e-cell',
    install(Vue: any) {
        Vue.component(CellPlugin.name, CellDirective);
    }
}

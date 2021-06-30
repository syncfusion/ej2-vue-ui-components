import { ComponentBase, EJComponentDecorator, allVue, gh } from '@syncfusion/ej2-vue-base';
import * as Vue3 from 'vue-class-component';
import Vue from 'vue';

export const isExecute: any = gh ? false : true;

let vueImport: any;
if (!isExecute || parseInt(allVue.version) < 3) {
    vueImport = (Vue3 as any).Vue;
} else {
    vueImport = Vue;
}

@EJComponentDecorator({}, isExecute)
export class CellsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-cells';
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
@EJComponentDecorator({}, isExecute)
export class CellDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-cell';
    }
}
export const CellPlugin = {
    name: 'e-cell',
    install(Vue: any) {
        Vue.component(CellPlugin.name, CellDirective);
    }
}

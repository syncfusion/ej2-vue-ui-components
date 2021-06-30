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
export class SheetsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-sheets';
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
@EJComponentDecorator({}, isExecute)
export class SheetDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-sheet';
    }
}
export const SheetPlugin = {
    name: 'e-sheet',
    install(Vue: any) {
        Vue.component(SheetPlugin.name, SheetDirective);
    }
}

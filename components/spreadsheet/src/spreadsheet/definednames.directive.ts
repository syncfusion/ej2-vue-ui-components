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
export class DefinedNamesDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-definednames';
    }
}
export const DefinedNamesPlugin = {
    name: 'e-definednames',
    install(Vue: any) {
        Vue.component(DefinedNamesPlugin.name, DefinedNamesDirective);
    }
}

/**
 * `e-definedname` directive represent a defined name of the VueJS Spreadsheet.
 * It must be contained in a Spreadsheet component(`ejs-spreadsheet`).
 * ```vue
 * <ejs-spreadsheet>
 *   <e-definednames>
 *    <e-definedname></e-definedname>
 *    <e-definedname></e-definedname>
 *   </e-definednames>
 * </ejs-spreadsheet>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class DefinedNameDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-definedname';
    }
}
export const DefinedNamePlugin = {
    name: 'e-definedname',
    install(Vue: any) {
        Vue.component(DefinedNamePlugin.name, DefinedNameDirective);
    }
}

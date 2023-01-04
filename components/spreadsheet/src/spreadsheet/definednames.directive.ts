import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class DefinedNamesDirective extends Vue {
    public render(): void {
        return;
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
@EJComponentDecorator({})
export class DefinedNameDirective extends Vue {
    public render(): void {
        return;
    }
}
export const DefinedNamePlugin = {
    name: 'e-definedname',
    install(Vue: any) {
        Vue.component(DefinedNamePlugin.name, DefinedNameDirective);
    }
}

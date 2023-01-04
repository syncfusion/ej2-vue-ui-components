import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class ConditionalFormatsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ConditionalFormatsPlugin = {
    name: 'e-conditionalformats',
    install(Vue: any) {
        Vue.component(ConditionalFormatsPlugin.name, ConditionalFormatsDirective);
    }
}

/**
 * `e-conditionalformat` directive represent a conditionalformat of the VueJS Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```vue
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-conditionalformats>
 *    <e-conditionalformat></e-conditionalformat>
 *    </e-conditionalformats>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
@EJComponentDecorator({})
export class ConditionalFormatDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ConditionalFormatPlugin = {
    name: 'e-conditionalformat',
    install(Vue: any) {
        Vue.component(ConditionalFormatPlugin.name, ConditionalFormatDirective);
    }
}

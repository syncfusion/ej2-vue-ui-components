import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class ChipsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ChipsPlugin = {
    name: 'e-chips',
    install(Vue: any) {
        Vue.component(ChipsPlugin.name, ChipsDirective);
    }
}

/**
 * `e-chip` directive represent a chip of the Vue ChipList.
 * ```html
 * <ejs-chiplist > 
 *   <e-chips>
 *    <e-chip text='chip1'></e-chip>
 *    <e-chip text='chip2'></e-chip>
 *   </e-chips>
 * </ejs-chiplist>
 * ```
 */
@EJComponentDecorator({})
export class ChipDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ChipPlugin = {
    name: 'e-chip',
    install(Vue: any) {
        Vue.component(ChipPlugin.name, ChipDirective);
    }
}

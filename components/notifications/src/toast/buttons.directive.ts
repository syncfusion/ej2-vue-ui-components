import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class ButtonModelPropDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ButtonModelPropPlugin = {
    name: 'e-buttonmodelprop',
    install(Vue: any) {
        Vue.component(ButtonModelPropPlugin.name, ButtonModelPropDirective);
    }
}

/**
 * 'e-button' directive represent a button of Vue toast 
 * It must be contained in a Toast component(`ejs-toast`). 
 * ```html
 * <ejs-toast id='toast' :showCloseIcon=true> 
 *   <e-buttons>
 *    <e-button :content='Ok' :isPrimary=true></e-button>
 *    <e-button :content='Cancel'></e-button>
 *   </e-buttons>
 * </ejs-toast>
 * ```
 */
@EJComponentDecorator({})
export class ButtonModelPropsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ButtonModelPropsPlugin = {
    name: 'e-buttonmodelprops',
    install(Vue: any) {
        Vue.component(ButtonModelPropsPlugin.name, ButtonModelPropsDirective);
    }
}

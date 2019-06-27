import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class BubblesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const BubblesPlugin = {
    name: 'e-bubbleSettings',
    install(Vue: any) {
        Vue.component(BubblesPlugin.name, BubblesDirective);
    }
}

/**
 * `BubblesDirective` directive represent a bubble settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-bubbleSettings>
 * <e-bubbleSetting>
 * </e-bubbleSetting>
 * </e-bubbleSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
@EJComponentDecorator({})
export class BubbleDirective extends Vue {
    public render(): void {
        return;
    }
}
export const BubblePlugin = {
    name: 'e-bubbleSetting',
    install(Vue: any) {
        Vue.component(BubblePlugin.name, BubbleDirective);
    }
}

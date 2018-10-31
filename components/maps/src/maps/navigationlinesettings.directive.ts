import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class NavigationLinesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const NavigationLinesPlugin = {
    name: 'e-navigationLineSettings',
    install(Vue: any) {
        Vue.component(NavigationLinesPlugin.name, NavigationLinesDirective);
    }
}

/**
 * `NavigationLinesDirective` directive represent a bubble settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-navigationLineSettings>
 * <e-navigationLineSetting>
 * </e-navigationLineSetting>
 * </e-navigationLineSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
@EJComponentDecorator({})
export class NavigationLineDirective extends Vue {
    public render(): void {
        return;
    }
}
export const NavigationLinePlugin = {
    name: 'e-navigationLineSetting',
    install(Vue: any) {
        Vue.component(NavigationLinePlugin.name, NavigationLineDirective);
    }
}

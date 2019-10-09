import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class CustomCursorsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const CustomCursorsPlugin = {
    name: 'e-cursormaps',
    install(Vue: any) {
        Vue.component(CustomCursorsPlugin.name, CustomCursorsDirective);
    }
}

/**
 * `e-custormaps` directive represent a layers of the vue diagram. 
 * It must be contained in a Diagram component(`ejs-diagram`). 
 * ```vue
 * <ejs-diagram>
 * <e-custormaps>
 * <e-custormap>
 * </e-custormap>
 * </e-custormaps>
</ejs-diagram>
 * ```
 */
@EJComponentDecorator({})
export class CustomCursorDirective extends Vue {
    public render(): void {
        return;
    }
}
export const CustomCursorPlugin = {
    name: 'e-cursormap',
    install(Vue: any) {
        Vue.component(CustomCursorPlugin.name, CustomCursorDirective);
    }
}

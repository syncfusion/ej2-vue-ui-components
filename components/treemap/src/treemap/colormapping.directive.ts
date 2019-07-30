import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class ColorMappingsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ColorMappingsPlugin = {
    name: 'e-colorMappings',
    install(Vue: any) {
        Vue.component(ColorMappingsPlugin.name, ColorMappingsDirective);
    }
}


@EJComponentDecorator({})
export class ColorMappingDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ColorMappingPlugin = {
    name: 'e-colorMapping',
    install(Vue: any) {
        Vue.component(ColorMappingPlugin.name, ColorMappingDirective);
    }
}

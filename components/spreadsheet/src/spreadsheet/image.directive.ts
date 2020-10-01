import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class ImagesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ImagesPlugin = {
    name: 'e-images',
    install(Vue: any) {
        Vue.component(ImagesPlugin.name, ImagesDirective);
    }
}


@EJComponentDecorator({})
export class ImageDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ImagePlugin = {
    name: 'e-image',
    install(Vue: any) {
        Vue.component(ImagePlugin.name, ImageDirective);
    }
}

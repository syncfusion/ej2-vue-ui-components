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
export class ImagesDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-images';
    }
}
export const ImagesPlugin = {
    name: 'e-images',
    install(Vue: any) {
        Vue.component(ImagesPlugin.name, ImagesDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class ImageDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-image';
    }
}
export const ImagePlugin = {
    name: 'e-image',
    install(Vue: any) {
        Vue.component(ImagePlugin.name, ImageDirective);
    }
}

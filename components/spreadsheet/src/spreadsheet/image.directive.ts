import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

export let ImagesDirective =  vueDefineComponent({
    inject: { custom: { default: null } },
    render(createElement: any): void {
        if (!isExecute) {
            let h: any = !isExecute ? gh : createElement;
            let slots: any = null;
            if(!isNullOrUndefined((this as any).$slots.default)) {
                slots = !isExecute ? (this as any).$slots.default() : (this as any).$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    },
    updated(): void {
        if (!isExecute && this.custom) { this.custom() }
    },
    methods: {
        getTag(): string {
            return 'e-images';
        }
    }
});
export const ImagesPlugin = {
    name: 'e-images',
    install(Vue: any) {
        Vue.component(ImagesPlugin.name, ImagesDirective);
    }
}


export let ImageDirective =  vueDefineComponent({
    render(): void {
        return;
    },
    methods: {
        getTag(): string {
            return 'e-image';
        }
    }
});
export const ImagePlugin = {
    name: 'e-image',
    install(Vue: any) {
        Vue.component(ImagePlugin.name, ImageDirective);
    }
}
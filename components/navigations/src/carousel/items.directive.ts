import { ComponentBase, EJComponentDecorator, allVue, gh, isExecute } from '@syncfusion/ej2-vue-base';
import * as Vue3 from 'vue-class-component';
import { Options } from 'vue-class-component';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import Vue from 'vue';
// {{VueImport}}

let vueImport: any;
if (!isExecute || parseInt(allVue.version) < 3) {
    vueImport = (Vue3 as any).Vue;
} else {
    vueImport = Vue;
}

@EJComponentDecorator({}, isExecute)
/* Start Options({
    inject: {
        custom: {
            default: null
        }
    }
}) End */

export class CarouselItemsDirective extends vueImport {
    constructor() {
        super(arguments);
    }
    public render(createElement: any): void {
        if (!isExecute) {
            let h: any = !isExecute ? gh : createElement;
            let slots: any = null;
            if(!isNullOrUndefined((this as any).$slots.default)) {
                slots = !isExecute ? (this as any).$slots.default() : (this as any).$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    }
    public updated(): void {
        if (!isExecute && this.custom) {
            this.custom();
        }
    }
    public getTag(): string {
        return 'e-carousel-items';
    }
}
export const CarouselItemsPlugin = {
    name: 'e-carousel-items',
    install(Vue: any) {
        Vue.component(CarouselItemsPlugin.name, CarouselItemsDirective);
    }
}

/**
 * `e-carousel-item` directive represent a item of the Vue Carousel.
 * It must be contained in a Carousel component(`ejs-carousel`).
 * ```html
 * <ejs-carousel>
 *   <e-carousel-items>
 *    <e-carousel-item template='itemTemplate'></e-carousel-item>
 *    <e-carousel-item template='secondItemTemplate'></e-carousel-item>
 *   </e-carousel-items>
 * </ejs-carousel>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class CarouselItemDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-carousel-item';
    }
}
export const CarouselItemPlugin = {
    name: 'e-carousel-item',
    install(Vue: any) {
        Vue.component(CarouselItemPlugin.name, CarouselItemDirective);
    }
}
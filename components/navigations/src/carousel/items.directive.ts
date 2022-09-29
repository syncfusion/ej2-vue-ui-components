import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class CarouselItemsDirective extends Vue {
    public render(): void {
        return;
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
@EJComponentDecorator({})
export class CarouselItemDirective extends Vue {
    public render(): void {
        return;
    }
}
export const CarouselItemPlugin = {
    name: 'e-carousel-item',
    install(Vue: any) {
        Vue.component(CarouselItemPlugin.name, CarouselItemDirective);
    }
}

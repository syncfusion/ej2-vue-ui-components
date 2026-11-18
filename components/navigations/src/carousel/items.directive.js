import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var CarouselItemsDirective = vueDefineComponent({
    inject: { custom: { default: null } },
    render: function (createElement) {
        if (!isExecute) {
            var h = !isExecute ? gh : createElement;
            var slots = null;
            if (!isNullOrUndefined(this.$slots.default)) {
                slots = !isExecute ? this.$slots.default() : this.$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    },
    updated: function () {
        if (!isExecute && this.custom) {
            this.custom();
        }
    },
    methods: {
        getTag: function () {
            return 'e-carousel-items';
        }
    }
});
export var CarouselItemsPlugin = {
    name: 'e-carousel-items',
    install: function (Vue) {
        Vue.component(CarouselItemsPlugin.name, CarouselItemsDirective);
    }
};
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
export var CarouselItemDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-carousel-item';
        }
    }
});
export var CarouselItemPlugin = {
    name: 'e-carousel-item',
    install: function (Vue) {
        Vue.component(CarouselItemPlugin.name, CarouselItemDirective);
    }
};

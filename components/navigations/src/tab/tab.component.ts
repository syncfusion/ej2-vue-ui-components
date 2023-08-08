import { ComponentBase, gh, getProps, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { Tab } from '@syncfusion/ej2-navigations';
import { TabItemsDirective, TabItemDirective, TabItemsPlugin, TabItemPlugin } from './items.directive'


export const properties: string[] = ['isLazyUpdate', 'plugins', 'allowDragAndDrop', 'animation', 'clearTemplates', 'cssClass', 'dragArea', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'headerPlacement', 'height', 'heightAdjustMode', 'items', 'loadOn', 'locale', 'overflowMode', 'reorderActiveTab', 'scrollStep', 'selectedItem', 'showCloseButton', 'width', 'added', 'adding', 'created', 'destroyed', 'dragged', 'dragging', 'onDragStart', 'removed', 'removing', 'selected', 'selecting'];
export const modelProps: string[] = [];

export const testProp: any = getProps({props: properties});
export const props = testProp[0], watch = testProp[1], emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) { emitProbs.push('update:'+props) }

/**
 * Represents the VueJS Tab Component.
 * ```html
 * <ejs-tab></ejs-tab>
 * ```
 */
export let TabComponent =  vueDefineComponent({
    name: 'TabComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide() { return { custom: this.custom } },
    data() {
        return {
            ej2Instance: new Tab({}) as any,
            propKeys: properties as string[],
            models: modelProps as string[],
            hasChildDirective: true as boolean,
            hasInjectedModules: false as boolean,
            tagMapper: {"e-tabitems":"e-tabitem"} as { [key: string]: Object },
            tagNameMapper: {"e-tabitems":"e-items"} as Object,
            isVue3: !isExecute as boolean,
            templateCollection: {} as any,
        }
    },
    created() {

        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
        this.ej2Instances.clearTemplate = this.clearTemplate;
        this.updated = this.updated;
    },
    render(createElement: any) {
        let h: any = !isExecute ? gh : createElement;
        let slots: any = null;
        if(!isNullOrUndefined((this as any).$slots.default)) {
            slots = !isExecute ? (this as any).$slots.default() : (this as any).$slots.default;
        }
        return h('div', slots);
    },
    methods: {
        clearTemplate(templateNames?: string[]): any {
            if (!templateNames){ templateNames = Object.keys(this.templateCollection || {}) }
            if (templateNames.length &&  this.templateCollection) {
                for (let tempName of templateNames){
                    let elementCollection: any = this.templateCollection[tempName];
                    if(elementCollection && elementCollection.length) {
                        for(let ele of elementCollection) {
                            let destroy: any = getValue('__vue__.$destroy', ele);
                            if (destroy) { ele.__vue__.$destroy() }
                            if (ele.innerHTML) { ele.innerHTML = '' }
                        }
                        delete this.templateCollection[tempName];
                    }
                }
            }
        },
        setProperties(prop: any, muteOnChange: boolean): void {
            if(this.isVue3) { this.models = !this.models ? this.ej2Instances.referModels : this.models }
            if (this.ej2Instances && this.ej2Instances._setProperties) {
                this.ej2Instances._setProperties(prop, muteOnChange);
            }
            if (prop && this.models && this.models.length) {
                Object.keys(prop).map((key: string): void => {
                    this.models.map((model: string): void => {
                        if ((key === model) && !(/datasource/i.test(key))) {
                            if (this.isVue3) {
                                this.ej2Instances.vueInstance.$emit('update:' + key, prop[key]);
                            } else {
                                (this as any).$emit('update:' + key, prop[key]);
                                (this as any).$emit('modelchanged', prop[key]);
                            }
                        }
                    });
                });
            }
        },
        custom(): void {
            this.updated();
        },
        addTab(items: Object[], index?: number): void {
            return this.ej2Instances.addTab(items, index);
        },
        disable(value: boolean): void {
            return this.ej2Instances.disable(value);
        },
        enableTab(index: number, value: boolean): void {
            return this.ej2Instances.enableTab(index, value);
        },
        getItemIndex(tabItemId: string): number {
            return this.ej2Instances.getItemIndex(tabItemId);
        },
        hideTab(index: number, value?: boolean): void {
            return this.ej2Instances.hideTab(index, value);
        },
        refresh(): void {
            return this.ej2Instances.refresh();
        },
        refreshActiveTab(): void {
            return this.ej2Instances.refreshActiveTab();
        },
        refreshActiveTabBorder(): void {
            return this.ej2Instances.refreshActiveTabBorder();
        },
        removeTab(index: number): void {
            return this.ej2Instances.removeTab(index);
        },
        select(args: number | Object, event?: Object): void {
            return this.ej2Instances.select(args, event);
        },
    }
});

export type TabComponent = InstanceType<typeof TabComponent>;

export const TabPlugin = {
    name: 'ejs-tab',
    install(Vue: any) {
        Vue.component(TabPlugin.name, TabComponent);
        Vue.component(TabItemPlugin.name, TabItemDirective);
        Vue.component(TabItemsPlugin.name, TabItemsDirective);

    }
}
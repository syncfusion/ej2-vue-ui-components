import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '../src/index';
import { ChildProperty, Property, Component as Comp, compile, Collection, Event, NotifyPropertyChanges, INotifyPropertyChanged } from '@syncfusion/ej2-base';

export interface StylerModel {
    size?: string;
    enablePersistence?: boolean;
    enableRtl?: boolean;
    locale?: string;
    created?: Function;
    destroyed?: Function;
    content?: string;
    template?: string | Function;
}

export class LocalField extends ChildProperty<LocalField> {
    @Property()
    public status: string;
    @Property()
    public name: string;
}

export interface FieldModel {
      status?: string;
      name?: string;
      template?:string | Function;
}

@NotifyPropertyChanges
export class Styler extends Comp<HTMLElement> implements INotifyPropertyChanged {
    @Property('12px')
    public size: string;
    @Property(false)
    public enablePersistence: boolean;
    @Property('SampleContent')
    public content: string;
    @Property({ color: 'red' })
    public settings: { color: string, size: number };
    @Property()
    public template:string;
    @Property([])
    public items: string[];
    @Property()
    public event1: Function;
    @Collection([], LocalField)
    public fields: FieldModel[];
    @Property('true')
    public enableTouch: boolean;
    @Property()
    public event2: Function;
    @Property()
    public event3: Function;
    @Event()
    public created: Function;
    @Event()
    public destroyed: Function;
    public val:any;
    constructor(fontObj?: StylerModel, id?: string | HTMLElement) {
        super(fontObj, id);
    }
    public touchModule: Touch;
    public preRender(): void { }
    public getModuleName(): string {
        return 'Styler';
    }
    public getPersistData(): string {
        return this.ignoreOnPersist(['size']);
    }
    public render(): void {
        this.element.classList.add('e-styler');
        this.element.style.fontSize = this.size;
        this.element.innerHTML = this.content;
        if(this.template) {
            let compiledString: Function = compile(this.template);
            this.val = compiledString({test:'access'});
        }
    }
    public destroy(): void {
        this.element.classList.remove('e-styler');
        super.destroy();
    }
    public onPropertyChanged(newProp: any, oldProp: any): void {
        this.element.style.fontSize = newProp['size'];
    }
}


export const properties: string[] = ['status', 'name', 'size', 'settings', 'items'];

@EJComponentDecorator({
    props: properties
})
export class VueComponent extends ComponentBase {
    public ej2Instances: any;
    public propKeys:string[] = properties; 
    public hasChildDirective: boolean = true;
    public tagMapper: { [key: string]: Object } = { 'columns': 'column', 'aggregates': { 'aggregate': { 'columns': 'column' } }, 'axes': { 'axis': { 'stripLines': 'stripLine', 'multiLevelLabels': { 'multiLevelLabel': { 'categories': 'category' } } } } };
    constructor() {
        super();
        this.ej2Instances = new Styler({});
        this.bindProperties();
    }

    public render(createElement: any) {
        return createElement('div',(this as any).$slots.default);
    }
}
Vue.component('ejs-vue', VueComponent);

@EJComponentDecorator({
    props:[]
})
export class ChildsDirective extends Vue{
    public render(): any {
        return null;
    }
}
Vue.component('childs', ChildsDirective);

@EJComponentDecorator({
    props:[]
})
export class ChildDirective extends Vue{
    public render(): any {
        return null;
    }
}
Vue.component('child', ChildDirective);


@EJComponentDecorator({
    props:[]
})
export class MultiChildsDirective extends Vue{
    public render(): any {
        return null;
    }
}
Vue.component('multichilds', MultiChildsDirective);

@EJComponentDecorator({
    props:[]
})
export class MultiChildDirective extends Vue{
    public render(): any {
        return null;
    }
}
Vue.component('multichild', MultiChildDirective);
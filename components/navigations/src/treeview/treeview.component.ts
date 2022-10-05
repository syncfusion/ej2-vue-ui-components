import { Options } from 'vue-class-component';
import { ComponentBase, EJComponentDecorator, getProps, allVue, gh, isExecute } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { TreeView } from '@syncfusion/ej2-navigations';


// {{VueImport}}
export const properties: string[] = ['isLazyUpdate', 'plugins', 'allowDragAndDrop', 'allowEditing', 'allowMultiSelection', 'allowTextWrap', 'animation', 'autoCheck', 'checkedNodes', 'cssClass', 'disabled', 'dragArea', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'expandOn', 'expandedNodes', 'fields', 'fullRowNavigable', 'fullRowSelect', 'loadOnDemand', 'locale', 'nodeTemplate', 'selectedNodes', 'showCheckBox', 'sortOrder', 'actionFailure', 'created', 'dataBound', 'dataSourceChanged', 'destroyed', 'drawNode', 'keyPress', 'nodeChecked', 'nodeChecking', 'nodeClicked', 'nodeCollapsed', 'nodeCollapsing', 'nodeDragStart', 'nodeDragStop', 'nodeDragging', 'nodeDropped', 'nodeEdited', 'nodeEditing', 'nodeExpanded', 'nodeExpanding', 'nodeSelected', 'nodeSelecting'];
export const modelProps: string[] = [];

export const testProp: any = getProps({props: properties});
export const props = testProp[0];
export const watch = testProp[1];

export const emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push(
        'update:'+props
    );
}

/**
 * Represents the EJ2 VueJS TreeView Component.
 * ```html
 * <ejs-treeview></ejs-treeview>
 * ```
 */
@EJComponentDecorator({
    props: properties
},isExecute)

/* Start Options({
    props: props,
    watch: watch,
    emits: emitProbs,
    provide: function provide() {
        return {
            custom: this.custom
        };
    }
}) End */

export class TreeViewComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    public isVue3: boolean;
    public templateCollection: any;
    constructor() {
        super(arguments);
        this.isVue3 = !isExecute;
        this.ej2Instances = new TreeView({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
        this.ej2Instances.clearTemplate = this.clearTemplate;
        this.updated = this.updated;
    }

 public clearTemplate(templateNames?: string[]): any {
    if (!templateNames){
       templateNames = Object.keys(this.templateCollection || {});
    }
    if (templateNames.length &&  this.templateCollection) {
    for (let tempName of templateNames){
       let elementCollection: any = this.templateCollection[tempName];
       if(elementCollection && elementCollection.length) {
       for(let ele of elementCollection) {
           let destroy: any = getValue('__vue__.$destroy', ele);
           if (destroy) {
               ele.__vue__.$destroy();
           }
           if (ele.innerHTML){
               ele.innerHTML = '';
           }
       }
       delete this.templateCollection[tempName];
       }
    }
}
 }



    public setProperties(prop: any, muteOnChange: boolean): void {
        if(this.isVue3) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
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
    }

    public render(createElement: any) {
        let h: any = !isExecute ? gh : createElement;
        let slots: any = null;
        if(!isNullOrUndefined((this as any).$slots.default)) {
            slots = !isExecute ? (this as any).$slots.default() : (this as any).$slots.default;
        }
        return h('div', slots);
    }
    public custom(): void {
        this.updated();
    }
    
    public addNodes(nodes: undefined[], target?: string | Object, index?: number, preventTargetExpand?: boolean): void {
        return this.ej2Instances.addNodes(nodes, target, index, preventTargetExpand);
    }

    public beginEdit(node: string | Object): void {
        return this.ej2Instances.beginEdit(node);
    }

    public checkAll(nodes?: string[] | Object[]): void {
        return this.ej2Instances.checkAll(nodes);
    }

    public collapseAll(nodes?: string[] | Object[], level?: number, excludeHiddenNodes?: boolean): void {
        return this.ej2Instances.collapseAll(nodes, level, excludeHiddenNodes);
    }

    public disableNodes(nodes: string[] | Object[]): void {
        return this.ej2Instances.disableNodes(nodes);
    }

    public enableNodes(nodes: string[] | Object[]): void {
        return this.ej2Instances.enableNodes(nodes);
    }

    public ensureVisible(node: string | Object): void {
        return this.ej2Instances.ensureVisible(node);
    }

    public expandAll(nodes?: string[] | Object[], level?: number, excludeHiddenNodes?: boolean): void {
        return this.ej2Instances.expandAll(nodes, level, excludeHiddenNodes);
    }

    public getAllCheckedNodes(): string[] {
        return this.ej2Instances.getAllCheckedNodes();
    }

    public getDisabledNodes(): string[] {
        return this.ej2Instances.getDisabledNodes();
    }

    public getNode(node: string | Object): Object {
        return this.ej2Instances.getNode(node);
    }

    public getTreeData(node?: string | Object): undefined[] {
        return this.ej2Instances.getTreeData(node);
    }

    public moveNodes(sourceNodes: string[] | Object[], target: string | Object, index: number, preventTargetExpand?: boolean): void {
        return this.ej2Instances.moveNodes(sourceNodes, target, index, preventTargetExpand);
    }

    public refreshNode(target: string | Object, newData: undefined[]): void {
        return this.ej2Instances.refreshNode(target, newData);
    }

    public removeNodes(nodes: string[] | Object[]): void {
        return this.ej2Instances.removeNodes(nodes);
    }

    public uncheckAll(nodes?: string[] | Object[]): void {
        return this.ej2Instances.uncheckAll(nodes);
    }

    public updateNode(target: string | Object, newText: string): void {
        return this.ej2Instances.updateNode(target, newText);
    }
}

export const TreeViewPlugin = {
    name: 'ejs-treeview',
    install(Vue: any) {
        Vue.component(TreeViewPlugin.name, TreeViewComponent);

    }
}
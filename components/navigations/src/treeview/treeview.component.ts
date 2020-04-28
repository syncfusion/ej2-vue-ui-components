import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { TreeView } from '@syncfusion/ej2-navigations';


export const properties: string[] = ['allowDragAndDrop', 'allowEditing', 'allowMultiSelection', 'animation', 'autoCheck', 'checkedNodes', 'cssClass', 'disabled', 'dragArea', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'expandOn', 'expandedNodes', 'fields', 'fullRowNavigable', 'fullRowSelect', 'loadOnDemand', 'locale', 'nodeTemplate', 'selectedNodes', 'showCheckBox', 'sortOrder', 'actionFailure', 'created', 'dataBound', 'dataSourceChanged', 'destroyed', 'drawNode', 'keyPress', 'nodeChecked', 'nodeChecking', 'nodeClicked', 'nodeCollapsed', 'nodeCollapsing', 'nodeDragStart', 'nodeDragStop', 'nodeDragging', 'nodeDropped', 'nodeEdited', 'nodeEditing', 'nodeExpanded', 'nodeExpanding', 'nodeSelected', 'nodeSelecting'];
export const modelProps: string[] = [];

/**
 * Represents the EJ2 VueJS TreeView Component.
 * ```html
 * <ejs-treeview></ejs-treeview>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class TreeViewComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new TreeView({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    public setProperties(prop: any, muteOnChange: boolean): void {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
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

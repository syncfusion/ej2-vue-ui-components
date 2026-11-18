import { ComponentBase, gh, getProps, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { TreeView } from '@syncfusion/ej2-navigations';
export var properties = ['isLazyUpdate', 'plugins', 'allowDragAndDrop', 'allowEditing', 'allowMultiSelection', 'allowTextWrap', 'animation', 'autoCheck', 'checkDisabledChildren', 'checkOnClick', 'checkedNodes', 'cssClass', 'disableHtmlEncode', 'disabled', 'dragArea', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'expandOn', 'expandedNodes', 'fields', 'fullRowNavigable', 'fullRowSelect', 'height', 'loadOnDemand', 'locale', 'nodeTemplate', 'selectedNodes', 'showCheckBox', 'sortOrder', 'actionFailure', 'created', 'dataBound', 'dataSourceChanged', 'destroyed', 'drawNode', 'keyPress', 'nodeChecked', 'nodeChecking', 'nodeClicked', 'nodeCollapsed', 'nodeCollapsing', 'nodeDragStart', 'nodeDragStop', 'nodeDragging', 'nodeDropped', 'nodeEdited', 'nodeEditing', 'nodeExpanded', 'nodeExpanding', 'nodeSelected', 'nodeSelecting'];
export var modelProps = [];
export var testProp = getProps({ props: properties });
export var props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (var _i = 0, modelProps_1 = modelProps; _i < modelProps_1.length; _i++) {
    var props_1 = modelProps_1[_i];
    emitProbs.push('update:' + props_1);
}
/**
 * Represents the EJ2 VueJS TreeView Component.
 * ```html
 * <ejs-treeview></ejs-treeview>
 * ```
 */
export var TreeViewComponent = vueDefineComponent({
    name: 'TreeViewComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide: function () { return { custom: this.custom }; },
    data: function () {
        return {
            ej2Instances: new TreeView({}),
            propKeys: properties,
            models: modelProps,
            hasChildDirective: false,
            hasInjectedModules: false,
            tagMapper: {},
            tagNameMapper: {},
            isVue3: !isExecute,
            templateCollection: {},
        };
    },
    created: function () {
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
        this.ej2Instances.clearTemplate = this.clearTemplate;
        this.updated = this.updated;
    },
    render: function (createElement) {
        var h = !isExecute ? gh : createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = !isExecute ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    },
    methods: {
        clearTemplate: function (templateNames) {
            if (!templateNames) {
                templateNames = Object.keys(this.templateCollection || {});
            }
            if (templateNames.length && this.templateCollection) {
                for (var _i = 0, templateNames_1 = templateNames; _i < templateNames_1.length; _i++) {
                    var tempName = templateNames_1[_i];
                    var elementCollection = this.templateCollection[tempName];
                    if (elementCollection && elementCollection.length) {
                        for (var _a = 0, elementCollection_1 = elementCollection; _a < elementCollection_1.length; _a++) {
                            var ele = elementCollection_1[_a];
                            this.destroyPortals(ele);
                        }
                        delete this.templateCollection[tempName];
                    }
                }
            }
        },
        setProperties: function (prop, muteOnChange) {
            var _this = this;
            if (this.isVue3) {
                this.models = !this.models ? this.ej2Instances.referModels : this.models;
            }
            if (this.ej2Instances && this.ej2Instances._setProperties) {
                this.ej2Instances._setProperties(prop, muteOnChange);
            }
            if (prop && this.models && this.models.length) {
                Object.keys(prop).map(function (key) {
                    _this.models.map(function (model) {
                        if ((key === model) && !(/datasource/i.test(key))) {
                            if (_this.isVue3) {
                                _this.ej2Instances.vueInstance.$emit('update:' + key, prop[key]);
                            }
                            else {
                                _this.$emit('update:' + key, prop[key]);
                                _this.$emit('modelchanged', prop[key]);
                            }
                        }
                    });
                });
            }
        },
        custom: function () {
            this.updated();
        },
        addNodes: function (nodes, target, index, preventTargetExpand) {
            return this.ej2Instances.addNodes(nodes, target, index, preventTargetExpand);
        },
        beginEdit: function (node) {
            return this.ej2Instances.beginEdit(node);
        },
        checkAll: function (nodes) {
            return this.ej2Instances.checkAll(nodes);
        },
        collapseAll: function (nodes, level, excludeHiddenNodes) {
            return this.ej2Instances.collapseAll(nodes, level, excludeHiddenNodes);
        },
        destroy: function () {
            return this.ej2Instances.destroy();
        },
        disableNodes: function (nodes) {
            return this.ej2Instances.disableNodes(nodes);
        },
        enableNodes: function (nodes) {
            return this.ej2Instances.enableNodes(nodes);
        },
        ensureVisible: function (node) {
            return this.ej2Instances.ensureVisible(node);
        },
        expandAll: function (nodes, level, excludeHiddenNodes, preventAnimation) {
            return this.ej2Instances.expandAll(nodes, level, excludeHiddenNodes, preventAnimation);
        },
        getAllCheckedNodes: function () {
            return this.ej2Instances.getAllCheckedNodes();
        },
        getDisabledNodes: function () {
            return this.ej2Instances.getDisabledNodes();
        },
        getNode: function (node) {
            return this.ej2Instances.getNode(node);
        },
        getTreeData: function (node) {
            return this.ej2Instances.getTreeData(node);
        },
        moveNodes: function (sourceNodes, target, index, preventTargetExpand) {
            return this.ej2Instances.moveNodes(sourceNodes, target, index, preventTargetExpand);
        },
        refreshNode: function (target, newData) {
            return this.ej2Instances.refreshNode(target, newData);
        },
        removeNodes: function (nodes) {
            return this.ej2Instances.removeNodes(nodes);
        },
        uncheckAll: function (nodes) {
            return this.ej2Instances.uncheckAll(nodes);
        },
        updateNode: function (target, newText) {
            return this.ej2Instances.updateNode(target, newText);
        },
    }
});
export var TreeViewPlugin = {
    name: 'ejs-treeview',
    install: function (Vue) {
        Vue.component(TreeViewPlugin.name, TreeViewComponent);
    }
};

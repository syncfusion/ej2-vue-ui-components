import { ComponentBase, gh, getProps, isExecute, vueDefineComponent, DefineVueComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { BlockEditor, BlockEditorModel } from '@syncfusion/ej2-blockeditor';
import { BlocksDirective, BlockDirective, BlocksPlugin, BlockPlugin } from './blocks.directive'


export const properties: string[] = ['isLazyUpdate', 'plugins', 'blockActionsMenu', 'blocks', 'commandMenu', 'contextMenu', 'cssClass', 'enableAutoHttps', 'enableDragAndDrop', 'enableHtmlEncode', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'inlineToolbar', 'keyConfig', 'labelSettings', 'locale', 'pasteSettings', 'readOnly', 'undoRedoStack', 'users', 'width', 'afterPaste', 'beforePaste', 'blockAdded', 'blockDrag', 'blockDragStart', 'blockDrop', 'blockMoved', 'blockRemoved', 'blur', 'contentChanged', 'created', 'focus', 'keyActionExecuted', 'selectionChanged', 'undoRedoPerformed'];
export const modelProps: string[] = [];

export const testProp: any = getProps({props: properties});
export const props = testProp[0], watch = testProp[1], emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) { emitProbs.push('update:'+props) }

/**
 * Represents the Essential JS 2 VueJS BlockEditor Component
 * ```vue
 * <ejs-blockeditor></ejs-blockeditor>
 * ```
 */
export let BlockEditorComponent: DefineVueComponent<BlockEditorModel> =  vueDefineComponent({
    name: 'BlockEditorComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide() { return { custom: this.custom } },
    data() {
        return {
            ej2Instances: new BlockEditor({}) as any,
            propKeys: properties as string[],
            models: modelProps as string[],
            hasChildDirective: true as boolean,
            hasInjectedModules: false as boolean,
            tagMapper: {"e-blocks":"e-block"} as { [key: string]: Object },
            tagNameMapper: {} as Object,
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
                            this.destroyPortals(ele);
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
        addBlock(block: Object, targetId?: string, isAfter?: boolean): void {
            return this.ej2Instances.addBlock(block, targetId, isAfter);
        },
        destroy(): void {
            return this.ej2Instances.destroy();
        },
        disableToolbarItems(itemId: string | string[]): void {
            return this.ej2Instances.disableToolbarItems(itemId);
        },
        enableToolbarItems(itemId: string | string[]): void {
            return this.ej2Instances.enableToolbarItems(itemId);
        },
        executeToolbarAction(action: Object, value?: string): void {
            return this.ej2Instances.executeToolbarAction(action, value);
        },
        focusIn(): void {
            return this.ej2Instances.focusIn();
        },
        focusOut(): void {
            return this.ej2Instances.focusOut();
        },
        getBlock(blockId: string): Object | null {
            return this.ej2Instances.getBlock(blockId);
        },
        getBlockCount(): number {
            return this.ej2Instances.getBlockCount();
        },
        getBlockElementById(blockId: string): Object | null {
            return this.ej2Instances.getBlockElementById(blockId);
        },
        getContentModelForFragment(fragment: Object, blockModel: Object, referenceNode: Object): Object[] {
            return this.ej2Instances.getContentModelForFragment(fragment, blockModel, referenceNode);
        },
        getCurrentFocusedBlockModel(): Object {
            return this.ej2Instances.getCurrentFocusedBlockModel();
        },
        getDataAsHtml(blockId?: string): string {
            return this.ej2Instances.getDataAsHtml(blockId);
        },
        getDataAsJson(blockId?: string): any {
            return this.ej2Instances.getDataAsJson(blockId);
        },
        getRange(): Object | null {
            return this.ej2Instances.getRange();
        },
        getSelectedBlocks(): Object[] | null {
            return this.ej2Instances.getSelectedBlocks();
        },
        handleBlockTransformation(args: Object): void {
            return this.ej2Instances.handleBlockTransformation(args);
        },
        handleSelectiveDeletions(event: Object): boolean {
            return this.ej2Instances.handleSelectiveDeletions(event);
        },
        moveBlock(fromBlockId: string, toBlockId: string): void {
            return this.ej2Instances.moveBlock(fromBlockId, toBlockId);
        },
        populateUniqueIds(blocks: Object[], parentBlockId?: string): void {
            return this.ej2Instances.populateUniqueIds(blocks, parentBlockId);
        },
        print(): void {
            return this.ej2Instances.print();
        },
        reRenderBlockContent(block: Object): void {
            return this.ej2Instances.reRenderBlockContent(block);
        },
        removeBlock(blockId: string): void {
            return this.ej2Instances.removeBlock(blockId);
        },
        renderBlocks(blocks: Object[]): void {
            return this.ej2Instances.renderBlocks(blocks);
        },
        renderTemplate(block: Object, templateElement: Object): void {
            return this.ej2Instances.renderTemplate(block, templateElement);
        },
        selectAllBlocks(): void {
            return this.ej2Instances.selectAllBlocks();
        },
        selectBlock(blockId: string): void {
            return this.ej2Instances.selectBlock(blockId);
        },
        selectRange(range: Object): void {
            return this.ej2Instances.selectRange(range);
        },
        serializeValue(value: string): string {
            return this.ej2Instances.serializeValue(value);
        },
        setCursorPosition(blockId: string, position: number): void {
            return this.ej2Instances.setCursorPosition(blockId, position);
        },
        setFocusToBlock(block: Object): void {
            return this.ej2Instances.setFocusToBlock(block);
        },
        setSelection(contentId: string, startIndex: number, endIndex: number): void {
            return this.ej2Instances.setSelection(contentId, startIndex, endIndex);
        },
        showFloatingIcons(target: Object): void {
            return this.ej2Instances.showFloatingIcons(target);
        },
        splitAndCreateNewBlockAtCursor(args?: Object): void {
            return this.ej2Instances.splitAndCreateNewBlockAtCursor(args);
        },
        togglePlaceholder(blockElement: Object, isFocused: boolean): void {
            return this.ej2Instances.togglePlaceholder(blockElement, isFocused);
        },
        updateBlock(blockId: string, properties: Object): boolean {
            return this.ej2Instances.updateBlock(blockId, properties);
        },
        updateContentOnUserTyping(blockElement: Object, e?: Object): void {
            return this.ej2Instances.updateContentOnUserTyping(blockElement, e);
        },
    }
});

export type BlockEditorComponent = typeof ComponentBase & {
    ej2Instances: BlockEditor;
    isVue3: boolean;
    isLazyUpdate: Boolean;
    plugins: any[];
    propKeys: string[];
    models: string[];
    hasChildDirective: boolean;
    tagMapper: {
        [key: string]: Object;
    };
    tagNameMapper: Object;
    setProperties(prop: any, muteOnChange: boolean): void;
    trigger(eventName: string, eventProp: {
        [key: string]: Object;
    }, successHandler?: Function): void;
    addBlock(block: Object, targetId?: string, isAfter?: boolean): void;
    destroy(): void;
    disableToolbarItems(itemId: string | string[]): void;
    enableToolbarItems(itemId: string | string[]): void;
    executeToolbarAction(action: Object, value?: string): void;
    focusIn(): void;
    focusOut(): void;
    getBlock(blockId: string): Object | null;
    getBlockCount(): number;
    getBlockElementById(blockId: string): Object | null;
    getContentModelForFragment(fragment: Object, blockModel: Object, referenceNode: Object): Object[];
    getCurrentFocusedBlockModel(): Object;
    getDataAsHtml(blockId?: string): string;
    getDataAsJson(blockId?: string): any;
    getRange(): Object | null;
    getSelectedBlocks(): Object[] | null;
    handleBlockTransformation(args: Object): void;
    handleSelectiveDeletions(event: Object): boolean;
    moveBlock(fromBlockId: string, toBlockId: string): void;
    populateUniqueIds(blocks: Object[], parentBlockId?: string): void;
    print(): void;
    reRenderBlockContent(block: Object): void;
    removeBlock(blockId: string): void;
    renderBlocks(blocks: Object[]): void;
    renderTemplate(block: Object, templateElement: Object): void;
    selectAllBlocks(): void;
    selectBlock(blockId: string): void;
    selectRange(range: Object): void;
    serializeValue(value: string): string;
    setCursorPosition(blockId: string, position: number): void;
    setFocusToBlock(block: Object): void;
    setSelection(contentId: string, startIndex: number, endIndex: number): void;
    showFloatingIcons(target: Object): void;
    splitAndCreateNewBlockAtCursor(args?: Object): void;
    togglePlaceholder(blockElement: Object, isFocused: boolean): void;
    updateBlock(blockId: string, properties: Object): boolean;
    updateContentOnUserTyping(blockElement: Object, e?: Object): void
};

export const BlockEditorPlugin = {
    name: 'ejs-blockeditor',
    install(Vue: any) {
        Vue.component(BlockEditorPlugin.name, BlockEditorComponent);
        Vue.component(BlockPlugin.name, BlockDirective);
        Vue.component(BlocksPlugin.name, BlocksDirective);

    }
}
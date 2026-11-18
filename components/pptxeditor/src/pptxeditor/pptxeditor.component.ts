import { ComponentBase, gh, getProps, isExecute, vueDefineComponent, DefineVueComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';
import { isUndefined } from '@syncfusion/ej2-base';

import { PptxEditor, PptxEditorModel } from '@syncfusion/ej2-pptxeditor';


export const properties: string[] = ['isLazyUpdate', 'plugins', 'ariaLabel', 'canRedo', 'canStartSlideShow', 'canUndo', 'chartRenderer', 'className', 'documentContent', 'documentPath', 'enableCopy', 'enableDownload', 'enableMagnification', 'enableNavigation', 'enablePersistence', 'enablePrint', 'enableRtl', 'enableSlideShow', 'enableTextSelection', 'enableThumbnail', 'enableToolbar', 'externalImagePolicy', 'fileName', 'fontResolution', 'fontSubstitutions', 'height', 'id', 'isLoading', 'isReady', 'locale', 'maxCompressionRatio', 'maxSinglePartBytes', 'maxUncompressedBytes', 'maxZipEntries', 'ribbonLayout', 'role', 'slideIndex', 'tabIndex', 'theme', 'thumbnailPanelVisible', 'thumbnailPanelWidth', 'watermarkText', 'width', 'zoom', 'created', 'currentSlideChanged', 'currentSlideNotesChanged', 'destroyed', 'documentLoad', 'hyperlinkClick', 'loadFailed', 'loadProgress', 'notesPaneClosed', 'notesPaneOpened', 'presentationEnded', 'presentationStarted', 'presenterViewClosed', 'presenterViewOpened', 'slideChange', 'slideChanged', 'unsupportedElement', 'zoomChange'];
export const modelProps: string[] = ['slideIndex', 'thumbnailPanelVisible'];

export const testProp: any = getProps({props: properties});
export const props = testProp[0], watch = testProp[1], emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) { emitProbs.push('update:'+props) }

/**
 * `ejs-pptxeditor` represents the VueJS PPTX Editor Component.
 * ```
 * <ejs-pptxeditor id='editor' :enableToolbar='true' :enableThumbnail='true' :enableSlideShow='true' v-on:document-load='onLoad'></ejs-pptxeditor>
 * ```
 */
export let PptxEditorComponent: DefineVueComponent<PptxEditorModel> =  vueDefineComponent({
    name: 'PptxEditorComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom } },
    data() {
        return {
            ej2Instances: new PptxEditor({}) as any,
            propKeys: properties as string[],
            models: modelProps as string[],
            hasChildDirective: false as boolean,
            hasInjectedModules: true as boolean,
            tagMapper: {} as { [key: string]: Object },
            tagNameMapper: {} as Object,
            isVue3: !isExecute as boolean,
            templateCollection: {} as any,
        }
    },
    created() {
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
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
        trigger(eventName: string, eventProp: {[key:string]:Object}, successHandler?: Function): void {
            if(!isExecute) { this.models = !this.models ? this.ej2Instances.referModels : this.models }
            if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
                let key: string[] = this.models.toString().match(/checked|value/) || [];
                let propKey: string = key[0];
                if (eventProp && key && !isUndefined(eventProp[propKey])) {
                    if (!isExecute) {
                        this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                        this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                        this.ej2Instances.vueInstance.$emit('update:modelValue', eventProp[propKey]);
                    } else {
                        if (eventName === 'change' || ((this as any).$props && !(this as any).$props.isLazyUpdate)) {
                            (this as any).$emit('update:'+ propKey, eventProp[propKey]);
                            (this as any).$emit('modelchanged', eventProp[propKey]);
                        }
                    }
                }
            } else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
                let key: string[] = this.models.toString().match(/currentView|selectedDate/) || [];
                let propKey: string = key[0];
                if (eventProp && key && !isUndefined(eventProp[propKey])) {
                    if (!isExecute) {
                        this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                        this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                    } else {
                        (this as any).$emit('update:'+ propKey, eventProp[propKey]);
                        (this as any).$emit('modelchanged', eventProp[propKey]);
                    }
                }
            }
            if ((this.ej2Instances && this.ej2Instances._trigger)) {
                this.ej2Instances._trigger(eventName, eventProp, successHandler); 
            }
        },

        custom(): void {
            this.updated();
        },
        addRibbonGroup(tabId: string, group: Object, targetId?: string): void {
            return this.ej2Instances.addRibbonGroup(tabId, group, targetId);
        },
        addRibbonItem(groupId: string, item: Object, targetId?: string): void {
            return this.ej2Instances.addRibbonItem(groupId, item, targetId);
        },
        addRibbonTab(tab: Object, targetId?: string): void {
            return this.ej2Instances.addRibbonTab(tab, targetId);
        },
        cancelLoad(): void {
            return this.ej2Instances.cancelLoad();
        },
        destroy(): void {
            return this.ej2Instances.destroy();
        },
        disableRibbonGroup(groupId: string): void {
            return this.ej2Instances.disableRibbonGroup(groupId);
        },
        disableRibbonItem(itemId: string): void {
            return this.ej2Instances.disableRibbonItem(itemId);
        },
        disableRibbonTab(tabId: string): void {
            return this.ej2Instances.disableRibbonTab(tabId);
        },
        download(): void {
            return this.ej2Instances.download();
        },
        enableRibbonGroup(groupId: string): void {
            return this.ej2Instances.enableRibbonGroup(groupId);
        },
        enableRibbonItem(itemId: string): void {
            return this.ej2Instances.enableRibbonItem(itemId);
        },
        enableRibbonTab(tabId: string): void {
            return this.ej2Instances.enableRibbonTab(tabId);
        },
        exitSlideShow(): void {
            return this.ej2Instances.exitSlideShow();
        },
        fitToWindow(): void {
            return this.ej2Instances.fitToWindow();
        },
        fitWidth(): void {
            return this.ej2Instances.fitWidth();
        },
        getFontProvider(): Object {
            return this.ej2Instances.getFontProvider();
        },
        getFontResolutionReport(): Object {
            return this.ej2Instances.getFontResolutionReport();
        },
        getNotRenderedElements(): Object {
            return this.ej2Instances.getNotRenderedElements();
        },
        goToSlide(index: number): void {
            return this.ej2Instances.goToSlide(index);
        },
        hideRibbonGroup(groupId: string): void {
            return this.ej2Instances.hideRibbonGroup(groupId);
        },
        hideRibbonItem(itemId: string): void {
            return this.ej2Instances.hideRibbonItem(itemId);
        },
        hideRibbonTab(tabId: string): void {
            return this.ej2Instances.hideRibbonTab(tabId);
        },
        load(source: Object): Object {
            return this.ej2Instances.load(source);
        },
        nextSlide(): void {
            return this.ej2Instances.nextSlide();
        },
        openFromArrayBuffer(data: Object | Object, fileName?: string): Object {
            return this.ej2Instances.openFromArrayBuffer(data, fileName);
        },
        openFromBase64(data: string, fileName?: string): Object {
            return this.ej2Instances.openFromBase64(data, fileName);
        },
        openFromBlob(blob: Object, fileName?: string): Object {
            return this.ej2Instances.openFromBlob(blob, fileName);
        },
        openFromFile(file: Object): Object {
            return this.ej2Instances.openFromFile(file);
        },
        openFromUrl(url: string): Object {
            return this.ej2Instances.openFromUrl(url);
        },
        previousSlide(): void {
            return this.ej2Instances.previousSlide();
        },
        print(printWindow?: Object): void {
            return this.ej2Instances.print(printWindow);
        },
        renderThumbnailSlide(index: number, contentHost: Object): Object {
            return this.ej2Instances.renderThumbnailSlide(index, contentHost);
        },
        retryLoad(): Object {
            return this.ej2Instances.retryLoad();
        },
        setFontSubstitution(originalName: string, substitute: Object | undefined): void {
            return this.ej2Instances.setFontSubstitution(originalName, substitute);
        },
        setZoom(percent: number): void {
            return this.ej2Instances.setZoom(percent);
        },
        showRibbonGroup(groupId: string): void {
            return this.ej2Instances.showRibbonGroup(groupId);
        },
        showRibbonItem(itemId: string): void {
            return this.ej2Instances.showRibbonItem(itemId);
        },
        showRibbonTab(tabId: string): void {
            return this.ej2Instances.showRibbonTab(tabId);
        },
        startPresenterView(): void {
            return this.ej2Instances.startPresenterView();
        },
        startSlideShowFromBeginning(): void {
            return this.ej2Instances.startSlideShowFromBeginning();
        },
        startSlideShowFromCurrent(): void {
            return this.ej2Instances.startSlideShowFromCurrent();
        },
        zoomIn(): void {
            return this.ej2Instances.zoomIn();
        },
        zoomOut(): void {
            return this.ej2Instances.zoomOut();
        },
        zoomTo100(): void {
            return this.ej2Instances.zoomTo100();
        },
    }
});

export type PptxEditorComponent = typeof ComponentBase & {
    ej2Instances: PptxEditor;
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
    addRibbonGroup(tabId: string, group: Object, targetId?: string): void;
    addRibbonItem(groupId: string, item: Object, targetId?: string): void;
    addRibbonTab(tab: Object, targetId?: string): void;
    cancelLoad(): void;
    destroy(): void;
    disableRibbonGroup(groupId: string): void;
    disableRibbonItem(itemId: string): void;
    disableRibbonTab(tabId: string): void;
    download(): void;
    enableRibbonGroup(groupId: string): void;
    enableRibbonItem(itemId: string): void;
    enableRibbonTab(tabId: string): void;
    exitSlideShow(): void;
    fitToWindow(): void;
    fitWidth(): void;
    getFontProvider(): Object;
    getFontResolutionReport(): Object;
    getNotRenderedElements(): Object;
    goToSlide(index: number): void;
    hideRibbonGroup(groupId: string): void;
    hideRibbonItem(itemId: string): void;
    hideRibbonTab(tabId: string): void;
    load(source: Object): Object;
    nextSlide(): void;
    openFromArrayBuffer(data: Object | Object, fileName?: string): Object;
    openFromBase64(data: string, fileName?: string): Object;
    openFromBlob(blob: Object, fileName?: string): Object;
    openFromFile(file: Object): Object;
    openFromUrl(url: string): Object;
    previousSlide(): void;
    print(printWindow?: Object): void;
    renderThumbnailSlide(index: number, contentHost: Object): Object;
    retryLoad(): Object;
    setFontSubstitution(originalName: string, substitute: Object | undefined): void;
    setZoom(percent: number): void;
    showRibbonGroup(groupId: string): void;
    showRibbonItem(itemId: string): void;
    showRibbonTab(tabId: string): void;
    startPresenterView(): void;
    startSlideShowFromBeginning(): void;
    startSlideShowFromCurrent(): void;
    zoomIn(): void;
    zoomOut(): void;
    zoomTo100(): void
};

export const PptxEditorPlugin = {
    name: 'ejs-pptxeditor',
    install(Vue: any) {
        Vue.component(PptxEditorPlugin.name, PptxEditorComponent);

    }
}
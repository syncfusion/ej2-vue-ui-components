/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
import { setTemplateEngine, getTemplateEngine, getUniqueID, createElement, detach, extend, getValue } from '@syncfusion/ej2-base';
import { aVue as Vue, isExecute } from './component-base';

const stringCompiler: (template: string, helper?: object) => (data: Object | JSON) => string = getTemplateEngine();
/**
 * Returns true if the given Vue 3 component instance is inside a keep-alive.
 *
 * @param {any} vueInstance - Vue component instance.
 * @returns {boolean} Returns true when inside keep-alive.
 */
function isInsideKeepAlive(vueInstance: any): boolean {
    let parent: any = vueInstance && vueInstance.$ && vueInstance.$.parent;
    while (parent) {
        if (parent.type && parent.type.__isKeepAlive) {
            return true;
        }
        parent = parent.parent;
    }
    return false;
}
/**
 * Collect activated/deactivated hooks from rendered vnode tree.
 *
 * @param {any} vnode - VNode instance.
 * @param {any[]} out - Collection of hooks.
 * @returns {void}
 */
function collectHooks(vnode: any, out: any[]): void {
    if (!vnode) {
        return;
    }
    const ci: any = vnode.component;
    if (ci && ci.type && ci.proxy && !ci.isUnmounted) {
        const mergedA: any[] | undefined = Array.isArray(ci['a']) ? ci['a'] : undefined;
        const mergedDa: any[] | undefined = Array.isArray(ci['da']) ? ci['da'] : undefined;
        // Fallback for Vue versions where a/da are unavailable.
        const fallbackOpts: any = ci.proxy.$options || {};
        const activatedHooks: Function[] = mergedA ? mergedA.slice()
            : (Array.isArray(fallbackOpts.activated) ? fallbackOpts.activated : (fallbackOpts.activated ? [fallbackOpts.activated] : []));
        const deactivatedHooks: Function[] = mergedDa ? mergedDa.slice()
            : (Array.isArray(fallbackOpts.deactivated) ? fallbackOpts.deactivated
                : (fallbackOpts.deactivated ? [fallbackOpts.deactivated] : []));
        if (activatedHooks.length || deactivatedHooks.length) {
            out.push({
                activated: activatedHooks.length
                    ? (): void => {
                        for (let i: number = 0; i < activatedHooks.length; i++) {
                            activatedHooks[parseInt(i.toString(), 10)].call(ci.proxy);
                        }
                    }
                    : null,
                deactivated: deactivatedHooks.length
                    ? (): void => {
                        for (let i: number = 0; i < deactivatedHooks.length; i++) {
                            deactivatedHooks[parseInt(i.toString(), 10)].call(ci.proxy);
                        }
                    }
                    : null
            });
        }
        collectHooks(ci.subTree, out);
    }
    if (Array.isArray(vnode.children)) {
        for (let i: number = 0; i < vnode.children.length; i++) {
            collectHooks(vnode.children[parseInt(i.toString(), 10)], out);
        }
    }
}
/**
 * Collect hooks from template collection.
 *
 * @param {any} proxy - Vue component proxy.
 * @returns {any[]} Returns collected hooks.
 */
function collectFromTemplates(proxy: any): any[] {
    const hooks: any[] = [];
    const tc: any = proxy.templateCollection;

    if (!tc) {
        return hooks;
    }
    const keys: string[] = Object.keys(tc);
    for (let k: number = 0; k < keys.length; k++) {
        // eslint-disable-next-line security/detect-object-injection
        const key: string = keys[k];
        // eslint-disable-next-line security/detect-object-injection
        const elems: any[] = tc[key];
        for (let i: number = 0; i < elems.length; i++) {
            // eslint-disable-next-line security/detect-object-injection
            const ele: any = elems[i];
            if (ele && ele._vnode) {
                collectHooks(ele._vnode, hooks);
            }
        }
    }

    return hooks;
}
/**
 * Patch keep-alive lifecycle handling for slot templates.
 *
 * @param {any} vueInstance - Vue component instance.
 * @param {any} app - Rendered vnode.
 * @returns {void}
 */
function patchKeepAlive(vueInstance: any, app: any): void {

    // Walk up to find the direct child of keep-alive.
    const start: any = vueInstance.$;
    let cur: any = start;
    let keepAliveChild: any = null;

    while (cur) {
        if (
            cur.parent &&
            cur.parent.type &&
            cur.parent.type.__isKeepAlive
        ) {
            keepAliveChild = cur;
            break;
        }
        cur = cur.parent;
    }

    if (!keepAliveChild) {
        return;
    }

    // templateCollection is on ejs-grid vueInstance
    const gridProxy: any = vueInstance;

    if (!keepAliveChild.isDeactivated) {
        const immediateHooks: any[] = [];

        collectHooks(app, immediateHooks);

        immediateHooks.forEach((h: any): void => {
            const activated: Function | null = h.activated;

            if (activated) {
                activated();
            }
        });
    }

    if (!keepAliveChild._sfPatched) {
        keepAliveChild._sfPatched = true;

        (keepAliveChild.a || (keepAliveChild.a = [])).push((): void => {
            collectFromTemplates(gridProxy).forEach((h: any): void => {
                const activated: Function | null = h.activated;

                if (activated) {
                    activated();
                }
            });
        });

        (keepAliveChild.da || (keepAliveChild.da = [])).push((): void => {
            collectFromTemplates(gridProxy).forEach((h: any): void => {
                const deactivated: Function | null = h.deactivated;

                if (deactivated) {
                    deactivated();
                }
            });
        });
    }
}
/**
 * Compiler function that convert the template property to DOM element.
 *
 * @param {any} templateElement - represents value of the template property from the component.
 * @param {Object} helper - represents helper object to utilize on template compilation.
 * @returns {NodeList} template element that append to the component.
 */
export function compile(
    templateElement: any,
    helper?: Object
): (data: Object | JSON, component?: any, propName?: any, element?: any, root?: any) => Object {
    return (data: any, context: any, propName: any, element: any, root: any): any => {
        let returnEle: any;
        if (context) {
            let plugins: any = context.vueInstance && context.vueInstance.plugins ? { plugins: context.vueInstance.plugins } : {};
            const vueInstance: any = context.vueInstance ? context.vueInstance :
                ((root && root.vueInstance) ? root.vueInstance : null);
            const pid: string = getUniqueID('templateParentDiv');
            const id: string = getUniqueID('templateDiv');
            const ele: HTMLElement = createElement('div', {
                id: pid,
                innerHTML: '<div id="' + id + '"></div>'
            });
            document.body.appendChild(ele);
            if (!isExecute && (typeof templateElement === 'string' || (templateElement.prototype && templateElement.prototype.CSPTemplate && typeof templateElement === 'function'))) {
                const vueSlot: any = getCurrentVueSlot(context.vueInstance, templateElement, root);
                if (vueSlot) {
                    // Compilation for Vue 3 slot template
                    const app: any = Vue.createVNode({
                        render(): any {
                            return vueSlot[`${templateElement}`]({ data: data });
                        }
                    }, plugins);
                    ele.innerHTML = '';
                    // Get values for Vue 3 slot template
                    getValues(app, context.vueInstance, root);
                    Vue.render(app, ele);
                    returnEle = ele.childNodes;
                    if (vueInstance) {
                        let templateInstance: any = vueInstance.templateCollection;
                        if (!templateInstance) {
                            vueInstance.templateCollection = {};
                            templateInstance = vueInstance.templateCollection;
                        }
                        if (propName) {
                            if (!templateInstance[`${propName}`]) {
                                templateInstance[`${propName}`] = [];
                            }
                            templateInstance[`${propName}`].push(ele);
                        }
                        // Keep-alive support for Vue 3 slot templates.
                        if (isInsideKeepAlive(vueInstance)) {
                            patchKeepAlive(vueInstance, app);
                        }
                    }
                    detach(ele);
                } else {
                    // Compilation for Vue 3 string template
                    detach(ele);
                    return stringCompiler(templateElement, helper)(data);
                }
            } else if (!isExecute) {
                // Compilation for Vue 3 functional template
                const tempObj: any = templateElement.call(this, {});
                const object: any = tempObj;
                const propsData: any = getValue('template.propsData', tempObj);
                const dataObj: any = {
                    data: { data: extend(tempObj.data || {}, data) },
                    parent: context.vueInstance
                };
                if (!object.template) {
                    object.template = object[Object.keys(object)[0]];
                }
                let templateCompRef: any;
                if (object.template.extends) {
                    templateCompRef = object.template.extends._context.components.template;
                } else {
                    templateCompRef = object.template._context.components[templateElement.name];
                    if (!templateCompRef) {
                        const key: any = Object.keys(object.template._context.components)[0];
                        templateCompRef = object.template._context.components[`${key}`];
                    }
                }
                let tempRef: any;
                if (propsData) {
                    if (templateCompRef.setup) {
                        tempRef = (<any>Object).assign({}, propsData);
                    } else {
                        tempRef = (<any>Object).assign(templateCompRef.data(), propsData);
                    }
                }
                else {
                    if (templateCompRef.setup) {
                        tempRef = (<any>Object).assign({}, dataObj.data);
                    } else {
                        tempRef = (<any>Object).assign(templateCompRef.data(), dataObj.data);
                    }
                    if (templateCompRef.components) {
                        const objkeys: any = Object.keys(templateCompRef.components) || [];
                        for (const objstring of objkeys) {
                            const intComponent: any = templateCompRef.components[`${objstring}`];
                            if (intComponent && intComponent.data) {
                                if (!intComponent.__data) { intComponent.__data = intComponent.data; }
                                intComponent.data = function (proxy: any): Object {
                                    return (Object as any).assign(intComponent.__data.call(proxy), dataObj.data);
                                };
                            }
                        }
                    }
                }
                if (templateCompRef.setup) {
                    plugins = (<any>Object).assign(plugins, data);
                }
                templateCompRef.data = function (): any { return tempRef; };
                const app: any = Vue.createVNode(templateCompRef, plugins);
                ele.innerHTML = '';
                // Get values for Vue 3 functional template
                getValues(app, context.vueInstance, root);
                Vue.render(app, ele);
                returnEle = ele.childNodes;
                dataObj.parent = null;
                if (vueInstance) {
                    let templateInstance: any = vueInstance.templateCollection;
                    if (!templateInstance) {
                        vueInstance.templateCollection = {};
                        templateInstance = vueInstance.templateCollection;
                    }
                    if (propName) {
                        if (!templateInstance[`${propName}`]) {
                            templateInstance[`${propName}`] = [];
                        }
                        templateInstance[`${propName}`].push(ele);
                    }
                }
                detach(ele);
            } else if (typeof templateElement === 'string' || (templateElement.prototype && templateElement.prototype.CSPTemplate && typeof templateElement === 'function')) {
                const vueSlot: any = getVueSlot(context.vueInstance, templateElement, root);
                if (vueSlot) {
                    // Get provide values for Vue 2 slot template
                    const provided: any = {};
                    const getProvideValues: any = (vueinstance: any) => {
                        if (vueinstance['$parent']) { getProvideValues(vueinstance.$parent); }
                        if (vueinstance['_provided']) {
                            // eslint-disable-next-line guard-for-in
                            for (const key in vueinstance['_provided']) {
                                // eslint-disable-next-line security/detect-object-injection
                                provided[key] = vueinstance['_provided'][key];
                            }
                        }
                    };
                    const vueInstance: any = context.vueInstance ? context.vueInstance :
                        ((root && root.vueInstance) ? root.vueInstance : null);
                    if (vueInstance) {
                        getProvideValues(vueInstance);
                    }
                    // Compilation for Vue 2 slot template
                    const vueTemplate: any = new Vue({
                        provide: { ...provided },
                        render(): any {
                            return vueSlot[`${templateElement}`]({ data: data });
                        }
                    });
                    vueTemplate.$mount('#' + id);
                    returnEle = ele.childNodes;
                    if (vueInstance) {
                        let templateInstance: any = vueInstance.templateCollection;
                        if (!templateInstance) {
                            vueInstance.templateCollection = {};
                            templateInstance = vueInstance.templateCollection;
                        }
                        if (propName) {
                            if (!templateInstance[`${propName}`]) {
                                templateInstance[`${propName}`] = [];
                            }
                            templateInstance[`${propName}`].push(returnEle[0]);
                        }
                    }
                    detach(ele);
                } else {
                    // Compilation for Vue 2 string template
                    detach(ele);
                    return stringCompiler(templateElement, helper)(data);
                }
            } else {
                // Compilation for Vue 2 functional template
                const tempObj: any = templateElement.call(this, {});
                let templateFunction: any = tempObj.template;
                const propsData: any = getValue('template.propsData', tempObj);
                const dataObj: any = {
                    data: { data: extend(tempObj.data || {}, data) },
                    parent: context.vueInstance
                };
                if (propsData) {
                    templateFunction = tempObj.template.extends;
                    dataObj.propsData = propsData;
                }
                if (typeof templateFunction !== 'function') {
                    templateFunction = Vue.extend(templateFunction);
                }
                if (templateFunction.options.setup) {
                    dataObj.propsData = (<any>Object).assign(dataObj.propsData || {}, data);
                }
                const templateVue: any = new templateFunction(dataObj);
                // let templateVue = new Vue(tempObj.template);
                // templateVue.$data.data = extend(tempObj.data, data);
                templateVue.$mount('#' + id);
                returnEle = ele.childNodes;
                dataObj.parent = null;
                if (vueInstance) {
                    let templateInstance: any = vueInstance.templateCollection;
                    if (!templateInstance) {
                        vueInstance.templateCollection = {};
                        templateInstance = vueInstance.templateCollection;
                    }
                    if (propName) {
                        if (!templateInstance[`${propName}`]) {
                            templateInstance[`${propName}`] = [];
                        }
                        templateInstance[`${propName}`].push(returnEle[0]);
                    }
                }
                detach(ele);
            }
        }
        return returnEle || [];
    };
}

setTemplateEngine({ compile: compile as any });

/**
 * Collect values from the app instance.
 *
 * @param {any} app - represents global application instance
 * @param {any} cInstance - represents Vue component instance
 * @param {any} root - represents parent component instance
 * @returns {void}
 */
function getValues(app: any, cInstance: any, root: any): void {
    const vueInstance: any = cInstance ? cInstance : ((root && root.vueInstance) ? root.vueInstance : null);
    if (!vueInstance) {
        return;
    }
    // Get globally defined variables.
    app['appContext'] = vueInstance['$']['appContext'];
    // Get provide value from child component.
    const provided: any = {};
    const getProvideValue: any = (vueinstance: any) => {
        if (vueinstance['$'] && vueinstance['$']['parent']) { getProvideValue(vueinstance.$.parent); }
        if (vueinstance['provides']) {
            // eslint-disable-next-line guard-for-in
            for (const key in vueinstance['provides']) {
                // eslint-disable-next-line security/detect-object-injection
                provided[key] = vueinstance['provides'][key];
            }
        }
    };
    getProvideValue(vueInstance);
    if (app['appContext']['provides']) {
        app.appContext.provides = { ...app.appContext.provides, ...provided };
    }
}

/**
 * Get the Vue2 slot template from the root or current Vue component.
 *
 * @param {any} vueInstance - represents parent Vue instance.
 * @param {any} templateElement - represents component property value
 * @param {any} root - represents root Vue instance
 * @returns {any} template Vue instance
 */
function getVueSlot(vueInstance: any, templateElement: any, root: any): any {
    if (!vueInstance && !(root && root.vueInstance)) {
        return undefined;
    }
    const instance: any = (root && root.vueInstance) ? root.vueInstance : vueInstance;
    return getVueChildSlot(instance, templateElement);
}

/**
 * Get the Vue2 nested slot template from the root or current Vue component.
 *
 * @param {any} vueInstance - represents parent Vue instance.
 * @param {any} templateElement - represents component property value
 * @returns {any} nested template Vue instance
 */
function getVueChildSlot(vueInstance: any, templateElement: any): any {
    if (!vueInstance) {
        return undefined;
    }
    const slots: any = vueInstance.$slots;
    const scopedSlots: any = vueInstance.$scopedSlots;
    const vSlots: any = vueInstance.scopedSlots;
    const children: any = vueInstance.children;
    if (scopedSlots && scopedSlots[`${templateElement}`]) {
        return scopedSlots;
    } else if (slots && slots.default) {
        const childSlots: any = slots.default;
        for (let i: number = 0; i < childSlots.length; i++) {
            const slot: any = getVueChildSlot(getSlot(childSlots[parseInt(i.toString(), 10)]), templateElement);
            if (slot) {
                return slot;
            }
        }
    } else if (vSlots && vSlots[`${templateElement}`]) {
        return vSlots;
    } else if (children) {
        for (let i: number = 0; i < children.length; i++) {
            const slot: any = getVueChildSlot(getSlot(children[parseInt(i.toString(), 10)]), templateElement);
            if (slot) {
                return slot;
            }
        }
    }
    return undefined;
}

/**
 * Collect the component slot directive instance.
 *
 * @param {any} vnode - represents Vue components slot instance.
 * @returns {any} the slot instance of the directive.
 */
function getSlot(vnode: any): any {
    const slot: any = (vnode.componentOptions && vnode.componentOptions.children) ? vnode.componentOptions :
        (!vnode.data && (vnode.tag === 'e-markersettings' || vnode.tag === 'e-markersetting')) ? vnode : vnode.data;
    return vnode.componentInstance ? vnode.componentInstance : slot;
}

/**
 * Get the Vue3 slot template from the root or current Vue component.
 *
 * @param {any} vueInstance - represents parent Vue instance.
 * @param {any} templateElement - represents component property value
 * @param {any} root - represents root Vue instance
 * @returns {any} slot template instance
 */
function getCurrentVueSlot(vueInstance: any, templateElement: any, root: any): any {
    if (!vueInstance && !(root && root.vueInstance)) {
        return undefined;
    }
    const slots: any = (root && root.vueInstance) ? root.vueInstance.$slots : vueInstance.$slots;
    return getChildVueSlot(slots, templateElement);
}

/**
 * Get the Vue3 nested slot template from the root or current Vue component.
 *
 * @param {any} slots - represents slot instance.
 * @param {any} templateElement - represents component property value
 * @returns {any} nested template Vue instance
 */
function getChildVueSlot(slots: any, templateElement: any): any {
    if (slots && slots[`${templateElement}`]) {
        return slots;
    } else if (slots && slots.default) {
        let childSlots: any = slots.default();
        childSlots = childSlots.flatMap((item: any) => Array.isArray(item.children) ? item.children : item);
        for (let i: number = 0; i < childSlots.length; i++) {
            const slot: any = getChildVueSlot(childSlots[parseInt(i.toString(), 10)].children, templateElement);
            if (slot) {
                return slot;
            }
        }
    }
    return undefined;
}

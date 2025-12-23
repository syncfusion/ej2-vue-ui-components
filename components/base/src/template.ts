/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
import { setTemplateEngine, getTemplateEngine, getUniqueID, createElement, detach, extend, getValue } from '@syncfusion/ej2-base';
import { aVue as Vue, isExecute } from './component-base';

const stringCompiler: (template: string, helper?: object) => (data: Object | JSON) => string = getTemplateEngine();

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
                            if ((context.ej2Instances && context.ej2Instances.getModuleName() === 'grid') || context.getModuleName() === 'grid') {
                                templateInstance[`${propName}`].push(returnEle[0]);
                            } else {
                                templateInstance[`${propName}`].push(ele);
                            }
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
                        if ((context.ej2Instances && context.ej2Instances.getModuleName() === 'grid') || context.getModuleName() === 'grid') {
                            templateInstance[`${propName}`].push(returnEle[0]);
                        } else {
                            templateInstance[`${propName}`].push(ele);
                        }
                    }
                }
                detach(ele);
            } else if (typeof templateElement === 'string' || (templateElement.prototype && templateElement.prototype.CSPTemplate && typeof templateElement === 'function')) {
                const vueSlot: any = getVueSlot(context.vueInstance, templateElement, root);
                if (vueSlot) {
                    // Get provide values for Vue 2 slot template
                    let provided: any = {};
                    const getProvideValues: any = (vueinstance: any) => {
                        if (vueinstance['$parent']) { getProvideValues(vueinstance.$parent); }
                        if (vueinstance['_provided'] && Object.keys(vueinstance['_provided']).length > 0) {
                            provided = { ...provided, ...vueinstance._provided };
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
    let provided: any = {};
    const getProvideValue: any = (vueinstance: any) => {
        if (vueinstance['$'] && vueinstance['$']['parent']) { getProvideValue(vueinstance.$.parent); }
        if (vueinstance['provides'] && Object.keys(vueinstance['provides']).length > 0) {
            provided = { ...provided, ...vueinstance.provides };
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

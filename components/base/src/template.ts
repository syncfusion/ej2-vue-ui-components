import { setTemplateEngine, getTemplateEngine, getUniqueID, createElement, detach, extend, getValue } from "@syncfusion/ej2-base";
import { aVue as Vue, isExecute } from "./component-base";

// tslint:disable:no-any
let stringCompiler: (template: string, helper?: object) => (data: Object | JSON) => string = getTemplateEngine(); 

export function compile(
  templateElement: any,
  helper?: Object
): (data: Object | JSON, component?: any, propName?: any, element?: any, root?: any) => Object {
  let that = this;
  return (data: any, context: any, propName: any, element: any, root: any): any => {
    let returnEle: any;
    if (context) {
      let plugins: any = context.vueInstance && context.vueInstance.plugins ? { plugins: context.vueInstance.plugins } : {};
      const vueInstance: any = context.vueInstance ? context.vueInstance :
                ((root && root.vueInstance) ? root.vueInstance : null);
      let pid: string = getUniqueID("templateParentDiv");
      let id: string = getUniqueID("templateDiv");
      let ele: HTMLElement = createElement("div", {
        id: pid,
        innerHTML: '<div id="' + id + '"></div>',
      });
      document.body.appendChild(ele);
      if (!isExecute && (typeof templateElement === "string" || (templateElement.prototype && templateElement.prototype.CSPTemplate && typeof templateElement === 'function'))) {
        let vueSlot: any = getCurrentVueSlot(context.vueInstance, templateElement, root);
        if (vueSlot) {
          // Compilation for Vue 3 slot template
          let app: any = Vue.createVNode({
            render () {
              return vueSlot[`${templateElement}`]({ data: data });
            }
          }, plugins);
          ele.innerHTML = '';
          // Get values for Vue 3 slot template
          getValues(app, context.vueInstance, root);
          Vue.render(app, ele);
          if (vueInstance) {
            if (!vueInstance['portals']) { vueInstance['portals'] = []; }
            vueInstance.portals.push(...[].slice.call(ele.children));
          }
          returnEle = ele.childNodes;
          detach(ele);
        } else {
          // Compilation for Vue 3 string template
          detach(ele);
          return stringCompiler(templateElement, helper)(data);
        }
      } else if (!isExecute) {
        // Compilation for Vue 3 functional template
        let tempObj: any = templateElement.call(that, {});
        let object: any = tempObj;
        let propsData: any = getValue("template.propsData", tempObj);
        let dataObj: any = {
          data: { data: extend(tempObj.data || {}, data) },
          parent: context.vueInstance,
        };
        if (!object.template) {
          object.template = object[Object.keys(object)[0]]; 
        }
        let templateCompRef: any;
        if (object.template.extends) {
          templateCompRef = object.template.extends._context.components.template;
        } else {
          templateCompRef = object.template._context.components[templateElement.name];
          if(!templateCompRef){
            let key: any = Object.keys(object.template._context.components)[0];
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
            let objkeys: any = Object.keys(templateCompRef.components) || [];
            for (let objstring of objkeys) {
              let intComponent: any = templateCompRef.components[`${objstring}`]
              if (intComponent && intComponent.data) {
                if (!intComponent.__data) intComponent.__data = intComponent.data;
                intComponent.data = function(proxy: any) { return (Object as any).assign(intComponent.__data.call(proxy), dataObj.data) };
              }
            }
          }
        }
        if (templateCompRef.setup) {
          plugins = (<any>Object).assign(plugins, data);
        }
        templateCompRef.data = function () { return tempRef; };
        let app: any = Vue.createVNode(templateCompRef, plugins);
        ele.innerHTML = '';
        // Get values for Vue 3 functional template
        getValues(app, context.vueInstance, root);
        Vue.render(app, ele);
        if (vueInstance) {
          if (!vueInstance['portals']) { vueInstance['portals'] = []; }
          vueInstance.portals.push(...[].slice.call(ele.children));
        }
        returnEle = ele.childNodes;
        if (context.vueInstance) {
          let templateInstance: any = context.vueInstance.templateCollection;
          if (!templateInstance) {
            context.vueInstance.templateCollection = {};
            templateInstance = context.vueInstance.templateCollection;
          }
          if (propName) {
            if (!templateInstance[`${propName}`]) {
              templateInstance[`${propName}`] = [];
            }
            templateInstance[`${propName}`].push(returnEle[0]);
          }
        }
        detach(ele);
      } else if (typeof templateElement === "string" || (templateElement.prototype && templateElement.prototype.CSPTemplate && typeof templateElement === 'function')) {
        let vueSlot: any = getVueSlot(context.vueInstance, templateElement, root);
        if (vueSlot) {
          // Get provide values for Vue 2 slot template
          let provided: any = {};
          let getProvideValues: any = (vueinstance: any) => {
            if (vueinstance['$parent']) getProvideValues(vueinstance.$parent);
            if (vueinstance['_provided'] && Object.keys(vueinstance['_provided']).length > 0) {
              provided = {...provided, ...vueinstance._provided};
            }
          };
          let vueInstance: any = context.vueInstance ? context.vueInstance : ((root && root.vueInstance) ? root.vueInstance : null);
          if (vueInstance) {
            getProvideValues(vueInstance);
          }
          // Compilation for Vue 2 slot template
          let vueTemplate: any = new Vue({
            provide: { ...provided },
            render () {
              return vueSlot[`${templateElement}`]({ data: data });
            }
          });
          vueTemplate.$mount("#" + id);
          if (vueInstance) {
            if (!vueInstance['portals']) { vueInstance['portals'] = []; }
            vueInstance.portals.push(...[].slice.call(ele.children));
          }
          returnEle = ele.childNodes;
          detach(ele);
        } else {
          // Compilation for Vue 2 string template
          detach(ele);
          return stringCompiler(templateElement, helper)(data);
        }
      } else {
        // Compilation for Vue 2 functional template
        let tempObj: any = templateElement.call(that, {});
        let templateFunction = tempObj.template;
        let propsData: any = getValue("template.propsData", tempObj);
        let dataObj: any = {
          data: { data: extend(tempObj.data || {}, data) },
          parent: context.vueInstance,
        };
        if (propsData) {
          templateFunction = tempObj.template.extends;
          dataObj.propsData = propsData;
        }
        if (typeof templateFunction !== "function") {
          templateFunction = Vue.extend(templateFunction);
        }
        if (templateFunction.options.setup) {
          dataObj.propsData = (<any>Object).assign(dataObj.propsData || {}, data);
        }
        let templateVue: any = new templateFunction(dataObj);
        // let templateVue = new Vue(tempObj.template);
        // templateVue.$data.data = extend(tempObj.data, data);
        templateVue.$mount("#" + id);
        if (vueInstance) {
          if (!vueInstance['portals']) { vueInstance['portals'] = []; }
          vueInstance.portals.push(...[].slice.call(ele.children));
        }
        returnEle = ele.childNodes;
        if (context.vueInstance) {
          let templateInstance: any = context.vueInstance.templateCollection;
          if (!templateInstance) {
            context.vueInstance.templateCollection = {};
            templateInstance = context.vueInstance.templateCollection;
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

function getValues(app: any, cInstance: any, root: any): any {
  let vueInstance: any = cInstance ? cInstance : ((root && root.vueInstance) ? root.vueInstance : null);
  if (!vueInstance) {
    return;
  }
  // Get globally defined variables.
  app['appContext'] = vueInstance['$']['appContext'];
  // Get provide value from child component.
  let provided: any = {};
  let getProvideValue: any = (vueinstance: any) => {
    if (vueinstance['$'] && vueinstance['$']['parent']) getProvideValue(vueinstance.$.parent);
    if (vueinstance['provides'] && Object.keys(vueinstance['provides']).length > 0) {
      provided = {...provided, ...vueinstance.provides };
    }
  };
  getProvideValue(vueInstance);
  if (app['appContext']['provides']) {
    app.appContext.provides = {...app.appContext.provides, ...provided};
  }
}

// Get the Vue2 slot template from the root or current Vue component.
function getVueSlot(vueInstance: any, templateElement: any, root: any): any {
  if (!vueInstance && !(root && root.vueInstance)) {
    return undefined;
  }
  let instance: any = (root && root.vueInstance) ? root.vueInstance : vueInstance;
  return getVueChildSlot(instance, templateElement);
}

function getVueChildSlot(vueInstance: any, templateElement: any) {
  if (!vueInstance) {
    return undefined;
  }
  let slots: any = vueInstance.$slots;
  let scopedSlots: any = vueInstance.$scopedSlots;
  let vSlots: any = vueInstance.scopedSlots;
  let children: any = vueInstance.children;
  if (scopedSlots && scopedSlots[`${templateElement}`]) {
    return scopedSlots;
  } else if (slots && slots.default) {
    let childSlots: any = slots.default;
    for (let i: number = 0; i < childSlots.length; i++) {
      let slot: any = getVueChildSlot(getSlot(childSlots[parseInt(i.toString(), 10)]), templateElement);
      if (slot) {
        return slot;
      }
    }
  } else if (vSlots && vSlots[`${templateElement}`]) {
    return vSlots;
  } else if (children) {
    for (let i: number = 0; i < children.length; i++) {
      let slot: any = getVueChildSlot(getSlot(children[parseInt(i.toString(), 10)]), templateElement);
      if (slot) {
        return slot;
      }
    }
  }
  return undefined;
}

function getSlot(vnode: any) {
  let slot: any = (vnode.componentOptions && vnode.componentOptions.children) ? vnode.componentOptions : 
  (!vnode.data && (vnode.tag === 'e-markersettings' || vnode.tag === 'e-markersetting')) ? vnode : vnode.data;
  return vnode.componentInstance ? vnode.componentInstance : slot;
}

// Get the Vue3 slot template from the root or current Vue component.
function getCurrentVueSlot(vueInstance: any, templateElement: any, root: any): any {
  if (!vueInstance && !(root && root.vueInstance)) {
    return undefined;
  }
  let slots: any = (root && root.vueInstance) ? root.vueInstance.$slots : vueInstance.$slots;
  return getChildVueSlot(slots, templateElement);
}

function getChildVueSlot(slots: any, templateElement: any): any {
  if (slots && slots[`${templateElement}`]) {
    return slots;
  } else if (slots && slots.default) {
    let childSlots: any = slots.default();
    childSlots = childSlots.flatMap((item: any) => Array.isArray(item.children) ? item.children : item);
    for (let i: number = 0; i < childSlots.length; i++) {
      let slot: any = getChildVueSlot(childSlots[parseInt(i.toString(), 10)].children, templateElement);
      if (slot) {
        return slot;
      }
    }
  }
  return undefined;
}

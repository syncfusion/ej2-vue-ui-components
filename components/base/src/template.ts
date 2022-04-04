import Vue from "vue";
import {
  setTemplateEngine,
  getTemplateEngine,
  getUniqueID,
  createElement,
  detach,
  extend,
  getValue,
} from "@syncfusion/ej2-base";

import { aVue, allVue, gh } from "./component-base";

// tslint:disable:no-any
let stringCompiler: (
  template: string,
  helper?: object
) => (data: Object | JSON) => string = getTemplateEngine(); 

export function compile(
  templateElement: any,
  helper?: Object
): (data: Object | JSON, component?: any, propName?: any, element?: any, root?: any) => Object {
  let that = this;
  return (data: any, context: any, propName: any, element: any, root: any): any => {
    let returnEle: any;
    if (context) {
      let pid: string = getUniqueID("templateParentDiv");
      let id: string = getUniqueID("templateDiv");
      let ele: HTMLElement = createElement("div", {
        id: pid,
        innerHTML: '<div id="' + id + '"></div>',
      });
      document.body.appendChild(ele);
      if (gh && typeof templateElement === "string") {
        let vue3Slots: any = getVue3Slot(context.vueInstance, templateElement, root);
        if (vue3Slots) {
          // Compilation for Vue 3 slot template
          allVue
            .createApp({
                render () {
                  return vue3Slots[templateElement]({ data: data });
                }
            })
            .mount("#" + id);
          returnEle = ele.childNodes;
          detach(ele);
        } else {
          // Compilation for Vue 3 string template
          detach(ele);
          return stringCompiler(templateElement, helper)(data);
        }
      } else if (gh) {
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
            templateCompRef = object.template._context.components[key];
          }
        }
        let tempRef: any;
        if (propsData) {
          tempRef = (<any>Object).assign(templateCompRef.data(), propsData);
        } else {
          tempRef = (<any>Object).assign(templateCompRef.data(), dataObj.data);
          if (templateCompRef.components) {
            let objkeys: any = Object.keys(templateCompRef.components) || [];
            for (let objstring of objkeys) {
              let intComponent: any = templateCompRef.components[objstring]
              if (intComponent && intComponent.data) {
                let tempRef2: any =  (Object as any).assign(intComponent.data(), dataObj.data);
                intComponent.data = function() { return tempRef2 };
              }
            }
          }
        }
        templateCompRef.data = function () { return tempRef; };
        allVue
          .createApp(templateCompRef)
          .mount("#" + id);
        returnEle = ele.childNodes;
        detach(ele);
      } else if (typeof templateElement === "string") {
        let vue2Slots: any = getVue2Slot(context.vueInstance, templateElement, root);
        if (vue2Slots) {
          // Compilation for Vue 2 slot template
          let vueTemplate: any = new Vue({
            render () {
              return vue2Slots[templateElement]({ data: data });
            }
          });
          vueTemplate.$mount("#" + id);
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
        let templateVue: any = new templateFunction(dataObj);
        // let templateVue = new Vue(tempObj.template);
        // templateVue.$data.data = extend(tempObj.data, data);
        templateVue.$mount("#" + id);
        returnEle = ele.childNodes;
        if (context.vueInstance) {
          let templateInstance: any = context.vueInstance.templateCollection;
          if (!templateInstance) {
            context.vueInstance.templateCollection = {};
            templateInstance = context.vueInstance.templateCollection;
          }
          if (propName) {
            if (!templateInstance[propName]) {
              templateInstance[propName] = [];
            }
            templateInstance[propName].push(returnEle[0]);
          }
        }
        detach(ele);
      }
    }
    return returnEle || [];
  };
}

setTemplateEngine({ compile: compile as any });

// Get the Vue2 slot template from the root or current Vue component.
function getVue2Slot(vueInstance: any, templateElement: any, root: any): any {
  if (!vueInstance && !(root && root.vueInstance)) {
    return undefined;
  }
  let instance: any = (root && root.vueInstance) ? root.vueInstance : vueInstance;
  return getVue2ChildSlot(instance, templateElement);
}

function getVue2ChildSlot(vueInstance: any, templateElement: any) {
  if (!vueInstance) {
    return undefined;
  }
  let slots: any = vueInstance.$slots;
  let scopedSlots: any = vueInstance.$scopedSlots;
  let vSlots: any = vueInstance.scopedSlots;
  let children: any = vueInstance.children;
  if (scopedSlots && scopedSlots[templateElement]) {
    return scopedSlots;
  } else if (slots && slots.default) {
    let childSlots: any = slots.default;
    for (let i: number = 0; i < childSlots.length; i++) {
      let slot: any = getVue2ChildSlot(getSlot(childSlots[i]), templateElement);
      if (slot) {
        return slot;
      }
    }
  } else if (vSlots && vSlots[templateElement]) {
    return vSlots;
  } else if (children) {
    for (let i: number = 0; i < children.length; i++) {
      let slot: any = getVue2ChildSlot(getSlot(children[i]), templateElement);
      if (slot) {
        return slot;
      }
    }
  }
  return undefined;
}

function getSlot(vnode: any) {
  let slot: any = (vnode.componentOptions && vnode.componentOptions.children) ? vnode.componentOptions : vnode.data;
  return vnode.componentInstance ? vnode.componentInstance : slot;
}

// Get the Vue3 slot template from the root or current Vue component.
function getVue3Slot(vueInstance: any, templateElement: any, root: any): any {
  if (!vueInstance && !(root && root.vueInstance)) {
    return undefined;
  }
  let slots: any = (root && root.vueInstance) ? root.vueInstance.$slots : vueInstance.$slots;
  return getVue3ChildSlot(slots, templateElement);
}

function getVue3ChildSlot(slots: any, templateElement: any): any {
  if (slots && slots[templateElement]) {
    return slots;
  } else if (slots && slots.default) {
    let childSlots: any = slots.default();
    for (let i: number = 0; i < childSlots.length; i++) {
      let slot: any = getVue3ChildSlot(childSlots[i].children, templateElement);
      if (slot) {
        return slot;
      }
    }
  }
  return undefined;
}

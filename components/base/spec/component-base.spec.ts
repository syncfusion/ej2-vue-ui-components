import Vue from 'vue';
import { EJComponentDecorator, ComponentBase } from '../src/index';
import { VueComponent } from './sample-component';

describe('test', () => {
    let ele: HTMLElement;
    let result: any;
    beforeEach(() => {
        ele = document.createElement('div');
        document.body.appendChild(ele);
    });
    it('Component Intialized Properly', () => {
        let vue = new Vue({
            el: '#vue',
            template: "<ejs-vue />",
            components: {
                VueComponent
            }
        });
        expect(ele.firstElementChild.classList.contains('e-control')).toBe(true);
        expect((ele.firstElementChild as any).ej2_instances[0].getModuleName()).toBe('Styler');
    });
});
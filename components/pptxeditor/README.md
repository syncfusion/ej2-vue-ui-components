# Vue PPTX Editor Component

The Vue PPTX Editor component is a feature-rich UI component that enables you to view, navigate, present, print, and export PowerPoint presentations (PPTX) online without requiring Microsoft PowerPoint or server-side rendering services. Also known as the presentation viewer and editor, it provides a high-performance, accurate solution for displaying PPTX files directly in the browser with an intuitive user experience. In the initial phase, the SDK is available as a viewer only. Editing capabilities will be considered in a future phase.

This example demonstrates how to open and view PowerPoint presentations directly in the browser with high performance and accuracy. The PPTX Editor provides an intuitive user experience for navigating slides, presenting content, printing presentations, and exporting files. It supports essential PowerPoint elements and is optimized to efficiently handle both small and large presentations.

<p align="center">
  <a href="https://help.syncfusion.com/document-processing/powerpoint/pptx-editor/vue/getting-started?utm_source=npm&utm_medium=listing&utm_campaign=vue-pptx-editor-npm">Getting Started</a>  
</p>

<p align="center">
Trusted by the world's leading companies
  <a href="https://www.syncfusion.com">
    <img src="https://ej2.syncfusion.com/home/images/trusted_companies.png" alt="Syncfusion">
  </a>
</p>

## Setup

### Create an Vue Application

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your Vue 2 applications.To install Vue CLI use the following commands.

```bash
npm install -g @vue/cli
vue create quickstart
cd quickstart
npm run serve
```
Initiating a new project prompts us to choose the type of project to be used for the current application. Select the option `Default ([Vue 2] babel, eslint)` from the menu.

### Adding Syncfusion PPTX Editor package

All Syncfusion Vue packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry. To install Vue Document editor package, use the following command.

```bash
npm install @syncfusion/ej2-vue-pptxeditor --save
```

### Registering PPTX Editor component

You can register the PPTX Editor component in your application by using the **Vue.use()**. Refer to the code example given below.

```typescript
import { PptxEditorPlugin } from '@syncfusion/ej2-vue-pptxeditor';

Vue.use(PptxEditorPlugin);
```

> Registering **PPTXEditorPlugin** in vue, will register the Pptx editor component along with its required child directives globally.

### Adding CSS references for PPTX Editor

Install the styles package from npm using the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

The Tailwind 3 theme package includes an `index.css` file that automatically imports all required PPTX Editor styles. Add the required PPTX Editor theme style in  **style** section of the **App.vue** file.

```html
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pptxeditor/index.css";
```

## Add PPTX Editor component

Add the Vue PPTX editor by using **ejs-pptxeditor** selector in **template** section of the **App.vue** file.

```html
<template>
  <div id="app">
    <ejs-pptxeditor
      ref="editor"
      id="pptxEditor"
      documentPath="/documents/Sample.pptx">
    </ejs-pptxeditor>
  </div>
</template>

<script>
import {
  PptxEditorComponent,
  Toolbar,
  ThumbnailView,
  Magnification,
  Navigation,
  Print,
  SlideShow
} from '@syncfusion/ej2-vue-pptxeditor';

export default {
  name: 'App',
  components: {
    'ejs-pptxeditor': PptxEditorComponent
  },
  provide: {
    pptxeditor: [Toolbar, ThumbnailView, Magnification, Navigation, Print, SlideShow]
  }
};
</script>

<style>
@import "@syncfusion/ej2-tailwind3-theme/styles/pptxeditor/index.css";
</style>

```

## Supported frameworks

The PPTX Editor component is also offered in the following list of frameworks.

| <img src="https://ej2.syncfusion.com/github/images/angular-new.svg" height="50" /><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Angular&nbsp;&nbsp;&nbsp;&nbsp; | <img src="https://ej2.syncfusion.com/github/images/react.svg"  height="50" /><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | <img src="https://ej2.syncfusion.com/github/images/vue.svg" height="50" /><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vue&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | <img src="https://ej2.syncfusion.com/github/images/netcore.svg" height="50" /><br/>&nbsp;&nbsp;ASP.NET&nbsp;Core&nbsp;&nbsp; | <img src="https://ej2.syncfusion.com/github/images/netmvc.svg" height="50" /><br/>&nbsp;&nbsp;ASP.NET&nbsp;MVC&nbsp;&nbsp; | 
| :-----: | :-----: | :-----: | :-----: | :-----: |

## Key features

* Browser-based viewing - Open and view PowerPoint presentations directly in modern web browsers without installing Microsoft PowerPoint.
* Rich slide rendering - Display slides containing text, images, shapes, tables, and other presentation elements with high fidelity.
* Easy navigation - Move through slides using thumbnails, keyboard shortcuts, mouse interactions, or touch gestures.
* Zoom support - Zoom in and out to review slide content with improved readability.
* High performance - Utilize slide virtualization to quickly load and navigate large presentations.
* Slideshow mode - Present slides in full-screen mode for a seamless presentation experience.
* Speaker notes - View presentation notes alongside slides to assist during reviews and presentations.
* Print support - Print presentations directly from the PPTX Editor.
* Export support - Save and export presentations in PowerPoint (.pptx) format.

## Resources

* [Theme Studio](https://ej2.syncfusion.com/themestudio/)
* [Road Map](https://www.syncfusion.com/products/roadmap/pptx-editor-sdk?utm_medium=listing&utm_source=github)
* [E-Books](https://www.syncfusion.com/ebooks?tag=vue&utm_medium=listing&utm_source=github)

## Support

Product support is available through the following mediums.

* [Support ticket](https://support.syncfusion.com/support/tickets/create) - Guaranteed Response in 24 hours | Unlimited tickets | Holiday support
* [Community forum](https://www.syncfusion.com/forums/pptx-editor-sdk?utm_source=npm&utm_medium=listing&utm_campaign=Vue-pptx-editor-npm)
* [GitHub issues](https://github.com/syncfusion/ej2-Vue-ui-components/issues/new)
* [Request feature or report bug](https://www.syncfusion.com/feedback/pptx-editor-sdk?utm_source=npm&utm_medium=listing&utm_campaign=Vue-pptx-editor-npm)
* Live chat

## Changelog

Check the changelog [here](https://github.com/syncfusion/ej2-vue-ui-components/blob/master/components/pptxeditor/CHANGELOG.md?utm_source=npm&utm_medium=listing&utm_campaign=Vue-pptx-editor-npm). Get minor improvements and bug fixes every week to stay up to date with frequent updates.

## License and copyright

> This is a commercial product and requires a paid license for possession or use. Syncfusion<sup>®</sup> licensed software, including this component, is subject to the terms and conditions of Syncfusion<sup>®</sup> [EULA](https://www.syncfusion.com/eula/es/). To acquire a license for 140+ [Vue UI components](https://www.syncfusion.com/vue-components), you can [purchase](https://www.syncfusion.com/sales/products) or [start a free 30-day trial](https://www.syncfusion.com/account/manage-trials/start-trials).

> A [free community license](https://www.syncfusion.com/products/communitylicense) is also available for companies and individuals whose organizations have less than $1 million USD in annual gross revenue and five or fewer developers.

See [LICENSE FILE](https://github.com/syncfusion/ej2-vue-ui-components/blob/master/license?utm_source=npm&utm_medium=listing&utm_campaign=vue-pptx-editor-npm) for more info.

© Copyright 2026 Syncfusion<sup>®</sup> Inc. All Rights Reserved. The Syncfusion<sup>®</sup> Essential Studio<sup>®</sup> license and copyright applies to this distribution.

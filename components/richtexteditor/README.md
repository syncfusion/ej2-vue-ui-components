# Vue Rich Text Editor Component | Vue Markdown Editor

The [Vue Rich Text Editor](https://www.syncfusion.com/vue-components/vue-wysiwyg-rich-text-editor?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm) is a feature-rich WYSIWYG HTML editor and Markdown editor. The Rich Text Editor is widely used to create blogs, forum posts, notes sections, comment sections, messaging applications, and more. The control provides an efficient user interface for a better editing experience with mobile support. It has a variety of tools to edit and format rich content, and it return a valid HTML markup or Markdown (MD) content. It allows users to insert images, links, tables, media files and lists with modular architectures.

<div align="center">
    <h4>
        <a href="https://ej2.syncfusion.com/react/documentation/rich-text-editor/getting-started?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm">📖Getting started</a> &#x2022;
        <a href="https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm#/bootstrap5/rich-text-editor/tools">🚀Online demos</a> &#x2022; 
        <a href="https://www.syncfusion.com/vue-components/vue-wysiwyg-rich-text-editor?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm">🌐Learn more</a>
    </h4>
</div>

<p align="center">
        <img src="https://raw.githubusercontent.com/SyncfusionExamples/nuget-img/master/javascript/javascript-rich-text-editor-new.gif" alt="Vue RichTextEditor Component"/>
</p>

<p align="center">
Trusted by the world's leading companies
  <a href="https://www.syncfusion.com">
    <img src="https://ej2.syncfusion.com/home/images/trusted_companies.png" alt="Bootstrap logo">
  </a>
</p>

## ⚡️ Quick Start

Syncfusion <sup>®</sup> Rich Text Editor is easy to integrate into Vue 2 applications. Just install the package, configure styles, register the component, inject required modules, and render the editor.

### 🛠️ Installation

All Syncfusion<sup>®</sup> Vue packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry. To install Vue Rich Text Editor package, use the following command.

```bash
npm install @syncfusion/ej2-vue-richtexteditor --save
```

This command will:

- Add the `@syncfusion/ej2-vue-richtexteditor` package and its peer dependencies to your `package.json` file.

### ⚙️ Setup

#### 1. Create a Vue Application

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your Vue 2 applications.To install Vue CLI use the following commands.

```bash
npm install -g @vue/cli
vue create quickstart
cd quickstart
npm run serve
```

> 💡 Initiating a new project prompts us to choose the type of project to be used for the current application. Select the option `Default ([Vue 2] babel, eslint)` from the menu.

#### 2. Add CSS References

Add CSS references needed for Rich Text Editor in **style** section of the **App.vue** file from **../node_modules/@syncfusion** package folder.

```html
<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
    @import "../node_modules/@syncfusion/ej2-inputs/styles/bootstrap5.css";
    @import "../node_modules/@syncfusion/ej2-lists/styles/bootstrap5.css";
    @import "../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css";
    @import "../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css";
    @import "../node_modules/@syncfusion/ej2-navigations/styles/bootstrap5.css";
    @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/bootstrap5.css";
    @import "../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/bootstrap5.css";
</style>
```

### 🧩 Register the Rich Text Editor Component

Register the Rich Text Editor globally using `Vue.use()`:

```ts
import { RichTextEditorPlugin } from '@syncfusion/ej2-vue-richtexteditor';
Vue.use(RichTextEditorPlugin);
```

<blockquote>
    <p>ℹ️ <b>Note:</b></p>
    <span><code>RichTextEditorPlugin</code> will globally register the Rich Text Editor component and its child directives. For detailed information on module injection, refer to the <a href="https://ej2.syncfusion.com/vue/documentation/rich-text-editor/module">Documentation</a></span>
</blockquote>

### 🧩 Add the Rich Text Editor Component

Add the Vue Rich Text Editor by using **ejs-richtexteditor** selector in **template** section of the **App.vue** file.

```html
<template>
    <ejs-richtexteditor ref="defaultRTE" :height="400">
       <p>Start editing your content here.</p>
    </ejs-richtexteditor>
</template>

<script>
    import Vue from "vue";
    import { RichTextEditorPlugin, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";

    Vue.use(RichTextEditorPlugin);

    export default {
        provide: {
            richtexteditor:[Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar]
        }
    }
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/bootstrap5.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/bootstrap5.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/bootstrap5.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/bootstrap5.css";
@import "../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/bootstrap5.css";
</style>
```
> Refer the [Getting Started with Vue3](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/get-started#getting-started?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm) for using Syncfusion<sup>®</sup> Vue components in Vue 3 applications.

## 🛠️ Supported frameworks

Rich Text Editor component is also offered in the following frameworks.

| [<img src="https://ej2.syncfusion.com/github/images/js.svg" height="50" />](https://www.syncfusion.com/javascript-ui-controls?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[JavaScript](https://www.syncfusion.com/javascript-ui-controls?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm)&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/angular-new.svg"  height="50" />](https://www.syncfusion.com/angular-components/?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Angular](https://www.syncfusion.com/angular-components/?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/react.svg" height="50" />](https://www.syncfusion.com/react-components?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[React](https://www.syncfusion.com/react-components?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/netcore.svg" height="50" />](https://www.syncfusion.com/aspnet-core-ui-controls?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ASP.NET&nbsp;Core](https://www.syncfusion.com/aspnet-core-ui-controls?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm)&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/netmvc.svg" height="50" />](https://www.syncfusion.com/aspnet-mvc-ui-controls?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm)<br/>&nbsp;&nbsp;[ASP.NET&nbsp;MVC](https://www.syncfusion.com/aspnet-mvc-ui-controls?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm)&nbsp;&nbsp; | 
| :-----: | :-----: | :-----: | :-----: | :-----: |

## 🏗️ Showcase samples

* [Vue HTML editor demo](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm/#/bootstrap5/rich-text-editor/tools.html)
* [Blog posting using Vue rich text editor demo](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm/#/bootstrap5/rich-text-editor/blog-posting.html)
* [Vue Markdown editor demo](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm/#/bootstrap5/rich-text-editor/markdown-editor.html)
* [Vue live Markdown editor demo](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm/#/bootstrap5/rich-text-editor/online-html-editor.html)

## ✨ Key features

* [Edit mode](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm/#/bootstrap5/rich-text-editor/iframe.html) - HTML content is possible to edit in a `div` element or an `iframe` in the rich text editor.

* [@Mentions](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm#/bootstrap5/rich-text-editor/mention-integration.html) - Easily mention users, tags, or items with an autocomplete suggestion list.

* [Slash Menu Support](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm#/bootstrap5/rich-text-editor/smart-suggestion.html) - Quickly insert content blocks using the `/` command.

* [Checklist Suport](https://ej2.syncfusion.com/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm/#/bootstrap5/rich-text-editor/tools.html) - Allows users to create checklists (to-do lists) directly within the editor. Users can easily add interactive checkbox items to their content.

* [Accessibility & WCAG 2.0 Compliance](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/accessibility?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm) - Ensures full accessibility support, making it user-friendly for people who rely on assistive technologies (AT) or keyboard navigation.

* [Preventing Cross-Site Scripting (XSS)](https://ej2.syncfusion.com/aspnetcore/documentation/rich-text-editor/prevent-cross-site-scripting??utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm) - The Rich Text Editor allows users to edit the content with security by preventing cross-site scripting (XSS).

* [HTML code editing](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/miscellaneous/?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm#code-view) - The rich text editor allows users to edit the HTML code directly in the HTML code view. This can be useful for users who are familiar with HTML and want to have more control over the formatting and layout of their content.

* [Markdown editor](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm/#/bootstrap5/rich-text-editor/markdown-preview.html) - The rich text editor allows you to edit Markdown content using the Markdown syntax.

* [Markdown content preview](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm/#/bootstrap5/rich-text-editor/markdown-preview.html) - Preview of the modified Markdown content in the editor, you can give users the ability to see what the formatted content will look like before they save it.

* [Tools](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/toolbar/?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm#toolbar-items) - The rich text editor handles a wide range of features, including inserting images, hyperlinks, tables, formatting tools, and more.

* [Toolbar appearance](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm/#/bootstrap5/rich-text-editor/types.html) - The rich text editor can provide a fully customizable toolbar that allows users to access the various formatting and editing options that are available.

* [Export and Import](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm#/bootstrap5/rich-text-editor/export-document.html) - Supports exporting content to PDF, and Word formats.

* [Copy and paste](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/paste-cleanup?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm) - Copy and paste from Microsoft Word, Outlook, or other editors or sources while preserving formatting, styles, and structure.

* [Undo and redo](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/undo-redo?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm) - Users can use undo and redo actions to reverse or repeat actions they took while editing the content.

* [Module injection](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/getting-started/?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm#module-injection) - It is possible to create a editor that utilizes a modular library to load the necessary functionality on demand. This can be useful for optimizing the performance of the editor.

* [Third-party integration](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/third-party-integration/?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm#third-party-integration) - It is possible to integrate a third-party library into a rich text editor to add additional functionality or features to the editor like `Code-mirror`, `Embedly` and more.

## 📚 Resources

* [Documentation](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/getting-started?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm)
* [Theme Studio](https://ej2.syncfusion.com/themestudio/?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm)
* [What's New](https://www.syncfusion.com/products/whatsnew/vue?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm)
* [Road Map](https://www.syncfusion.com/products/roadmap/vue?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm)
* [E-Books](https://www.syncfusion.com/succinctly-free-ebooks?searchkey=vue&type=all?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm)

## 🤝 Support

Product support is available through following mediums.

* [Support ticket](https://support.syncfusion.com/support/tickets/create?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm) - Guaranteed Response in 24 hours | Unlimited tickets | Holiday support
* [Community forum](https://www.syncfusion.com/forums/vue?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm)
* [GitHub issues](https://github.com/syncfusion/ej2-vue-ui-components/issues/new)
* [Request feature or report bug](https://www.syncfusion.com/feedback/vue?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm)
* Live chat

## 🔄 Change log

Check the changelog [here](https://github.com/syncfusion/ej2-vue-ui-components/blob/master/components/richtexteditor/CHANGELOG.md?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm). Get minor improvements and bug fixes every week to stay up to date with frequent updates.

## ⚖️ License and copyright

> This is a commercial product and requires a paid license for possession or use. Syncfusion<sup>®</sup> licensed software, including this component, is subject to the terms and conditions of Syncfusion<sup>®</sup> [EULA](https://www.syncfusion.com/license/studio/33.2.3/syncfusion_essential_studio_eula.pdf?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm). To acquire a license for 150+ [Vue UI components](https://www.syncfusion.com/vue-components?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm), you can [purchase](https://www.syncfusion.com/sales/pricing?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm) or [start a free 30-day trial](https://www.syncfusion.com/account/manage-trials/start-trials?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm).
> A free community [license](https://www.syncfusion.com/products/communitylicense?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm) is also available for companies and individuals whose organizations have less than $1 million USD in annual gross revenue and five or fewer developers.
See [LICENSE FILE](https://github.com/syncfusion/ej2-vue-ui-components/blob/master/license?utm_source=npm&utm_medium=listing&utm_campaign=vue-rich-text-editor-npm) for more info.

&copy; Copyright 2025 Syncfusion<sup>®</sup> Inc. All Rights Reserved. The Syncfusion<sup>®</sup> Essential<sup>®</sup> Studio license and copyright applies to this distribution.
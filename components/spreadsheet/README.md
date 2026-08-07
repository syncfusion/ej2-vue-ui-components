# Vue Spreadsheet Component

The [Vue Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/vue-spreadsheet-editor?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm) is an user interactive component to organize and analyze data in tabular format with configuration options for customization. It will load data by importing an Excel/CSV file or from local and remote data sources such as JSON, RESTful services, OData services, and more. The populated data can be exported as Excel with xlsx, xls, CSV and PDF formats.

<p align="center">
  <a href="https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/getting-started?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm">Getting started</a> . 
  <a href="https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm#/bootstrap5/spreadsheet/default.html">Online demos</a> . 
  <a href="https://www.syncfusion.com/vue-components/vue-spreadsheet?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm">Learn more</a>
</p>

<p align="center">
    <img src="https://raw.githubusercontent.com/SyncfusionExamples/nuget-img/master/vue/vue-spreadsheet.png" alt="Vue Spreadsheet Component" />
</p>

<p align="center">
Trusted by the world's leading companies
  <a href="https://www.syncfusion.com">
    <img src="https://ej2.syncfusion.com/home/images/trusted_companies.png" alt="Bootstrap logo">
  </a>
</p>

## Setup

### Create a Vue Application

You can use [Vue CLI](https://github.com/vuejs/vue-cli) to setup your Vue 2 applications. To install Vue CLI, use the following command.

```bash
npm install -g @vue/cli
vue create quickstart
cd quickstart
npm run serve
```
Initiating a new project prompts us to choose the type of project to be used for the current application. Select the option `Default ([Vue 2] babel, eslint)` from the menu.

### Add Syncfusion<sup>®</sup> Spreadsheet package

All Syncfusion<sup>®</sup> Vue packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry. To install Vue Spreadsheet package, use the following command.

```bash
npm install @syncfusion/ej2-vue-spreadsheet --save
```

### Register Spreadsheet Component

You can register the Spreadsheet component in your application by using the `Vue.use()`. Refer to the code example given below.

```typescript
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";

Vue.use(SpreadsheetPlugin);
```

> Registering **SpreadsheetPlugin** in Vue, will register the Spreadsheet component along with its required child directives globally.

### Add CSS references for Spreadsheet

Add CSS references needed for Spreadsheet in **style** section of the **App.vue** file from **../node_modules/@syncfusion** package folder.

```html
<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
  @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
  @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css';
</style>
```

## Add Spreadsheet Component

Add the Vue Spreadsheet by using `ejs-spreadsheet` selector in `template` section of the **App.vue** file.

```html
<template>
    <ejs-spreadsheet>
        <e-sheets>
            <e-sheet>
                <e-ranges><e-range :dataSource="data"></e-range></e-ranges>
            </e-sheet>
        </e-sheets>
    </ejs-spreadsheet>
</template>

<script>
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
Vue.use(SpreadsheetPlugin);
export default {
   data: () => {
    return {
      data:  [
        { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, ShipCity: 'Reims' },
        { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, ShipCity: 'Münster' },
        { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, ShipCity: 'Lyon' }
      ]
    }
  }
}
</script>
<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
  @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
  @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css';
</style>
```
> Refer the [Getting Started with Vue3](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/vue-3-getting-started) topic for using Syncfusion<sup>®</sup> Vue components in Vue 3 applications.

## Supported frameworks

Spreadsheet component is also offered in the following list of frameworks.

| [<img src="https://ej2.syncfusion.com/github/images/js.svg" height="50" />](https://www.syncfusion.com/javascript-ui-controls?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[JavaScript](https://www.syncfusion.com/javascript-ui-controls?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm)&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/angular-new.svg"  height="50" />](https://www.syncfusion.com/angular-components/?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Angular](https://www.syncfusion.com/angular-components/?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/react.svg" height="50" />](https://www.syncfusion.com/react-components?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[React](https://www.syncfusion.com/react-components?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/netcore.svg" height="50" />](https://www.syncfusion.com/aspnet-core-ui-controls?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm)<br/>&nbsp;&nbsp;[ASP.NET&nbsp;Core](https://www.syncfusion.com/aspnet-core-ui-controls?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm)&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/netmvc.svg" height="50" />](https://www.syncfusion.com/aspnet-mvc-ui-controls?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm)<br/>&nbsp;&nbsp;[ASP.NET&nbsp;MVC](https://www.syncfusion.com/aspnet-mvc-ui-controls?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm)&nbsp;&nbsp; | 
| :-----: | :-----: | :-----: | :-----: | :-----: |

## Key features

* [Data sources](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/data-binding?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm#local-data): Bind the Spreadsheet component with an array of objects or data from a web service using [DataManager](https://ej2.syncfusion.com/vue/documentation/data/data-binding?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm).
* [Virtualization](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/scrolling#virtual-scrolling?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Provides the option to load large amount of data without performance degradation.
* [Selection](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/selection?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Provides the option to select a cell or range of cells.
* [Editing](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/editing?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Provides the option to dynamically edit a cell.
* [Formulas](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/formulas/?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm#/material/spreadsheet/formula.html): Provides built-in calculation library with pre-defined formulas and named range support.
* [Clipboard](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/clipboard?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Provides the option to perform clipboard operations.
* [Cell formatting](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/formatting#text-and-cell-formatting/?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm#/material/spreadsheet/cell-formatting.html): Provides the option to customize the appearance of cells.
* [Number formatting](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/formatting#number-formatting/?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm#/material/spreadsheet/number-formatting.html): Provides the option to format the cell value.
* [Open](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/open-save#open?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Provides the option to open Excel and CSV files in Spreadsheet.
* [Save](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/open-save#save?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Provides the option to save Spreadsheet data as Excel, CSV, and PDF documents.
* [Sorting](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/sort#sort-by-cell-value?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Helps you to arrange the data to particular order in a selected range of cells.
* [Filtering](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/filter#apply-filter-on-ui?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Helps you to view specific rows in the Spreadsheet by hiding the other rows.
* [Undo Redo](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/undo-redo?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Provides the option to perform undo redo operations in Spreadsheet.
* [Collaborative editing](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/editing?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Provides the option for real time changes across multiple users in the Spreadsheet.
* [Hyperlink](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/link/?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm#/material/spreadsheet/hyperlink.html): Provides the option to navigate to web link or cell reference within the sheet or to other sheet in Spreadsheet.
* [Resize](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/mobile-responsiveness?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Allows you to change the row height and column width. Auto fit the rows and columns based on its content.
* [Wrap text](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/cell-range#wrap-text?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Provides the option to display the large content as multiple lines in a single cell.
* [Data validation](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/cell-range#data-validation/?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm#/material/spreadsheet/data-validation.html): Provides the option to validate edited values based on data validation rules defined for a cell or range of cells.
* [Find and replace](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/searching#find?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Provides the option to find the data and replace it across all sheets in Spreadsheet.
* [Protect sheet](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/protect-sheet/?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm#/material/spreadsheet/protect-sheet.html): Provides the option to restrict user actions like cell editing, row and column insertion, deletion, and resizing.
* [Borders](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/formatting#borders?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Provides the option to customize cell gridlines such as color and its style for enhanced UI.
* [Show/hide](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/worksheet#sheet-visibility?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Provides the option to show/hide rows, columns and sheets.
* [Insert/delete](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/rows-and-columns#insert?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Provides the option to insert/delete rows, columns and sheets.
* [Merge cells](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/cell-range#merge-cells?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Provides the option to combine two or more cells located in the same row or column into a single cell.
* [Conditional formatting](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/formatting#conditional-formatting/?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm#/material/spreadsheet/conditional-formatting.html): Provides the option to format a cell or range of cells based on conditions applied.
* [Autofill](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/cell-range#auto-fill?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Provides the option to fill or copy a series or pattern of values and formats into adjacent cells in any direction.
* [Clear](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/cell-range#clear?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Provides the option to clear the content, formats, and hyperlinks applied to a cell or range of cells in a Spreadsheet.
* [Aggregates](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/formulas?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Provides the option to check the sum, average, count, and more for the selected cells or range in the sheet.
* [Image](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/illustrations#image/?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm#/material/spreadsheet/image.html): Allows you to view, insert, and modify a picture in a Spreadsheet with customizing options.
* [Chart](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/illustrations#chart/?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm#/material/spreadsheet/chart.html): Transforms your Spreadsheet data to an intuitive overview for better understanding and to make smart business decisions.
* [Freeze panes](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/freeze-pane/?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm#/material/spreadsheet/freeze-panes.html): Allows you to keep the specified rows and columns always visible at the top and left side of the sheet while scrolling through the sheet.
* [Password protection](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/protect-sheet#protect-workbook?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Allows you to protect the workbook with a password.
* [Multi-line editing](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/editing?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Allows you to insert a line break between paragraphs of the text within a cell in a Spreadsheet.
* [Calculate range selection](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/selection?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Helps you to select a range or multiple ranges when editing a formula in a cell.
* [Right-to-left (RTL)](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/global-local#right-to-left-rtl?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Aligns content in the Spreadsheet component from right to left.
* [Templates](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/template/?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm#/material/spreadsheet/cell-template.html): Templates can be used to create custom user experiences in the Spreadsheet.
* [Globalization](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/global-local#localization?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Personalize the Spreadsheet component with different languages, as well as culture-specific number, date, and time formatting.
* [Accessibility](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/accessibility?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm): Provides with built-in accessibility support which helps to access all the Spreadsheet component features through the keyboard, screen readers, or other assistive technology devices.

## Resources

* [Theme Studio](https://ej2.syncfusion.com/themestudio/?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm)
* [What's New](https://www.syncfusion.com/products/whatsnew/vue?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm)
* [Road Map](https://www.syncfusion.com/products/roadmap/vue?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm)
* [E-Books](https://www.syncfusion.com/succinctly-free-ebooks?searchkey=vue&type=all?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm)

## Support

Product support is available through the following mediums.

* [Support ticket](https://support.syncfusion.com/support/tickets/create?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm) - Guaranteed Response in 24 hours | Unlimited tickets | Holiday support
* [Community forum](https://www.syncfusion.com/forums/vue?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm)
* [GitHub issues](https://github.com/syncfusion/ej2-vue-ui-components/issues/new?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm)
* [Request feature or report bug](https://www.syncfusion.com/feedback/vue?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm)
* Live chat

## Changelog

Check the changelog [here](https://github.com/syncfusion/ej2-vue-ui-components/blob/master/components/spreadsheet/CHANGELOG.md?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm). Get minor improvements and bug fixes every week to stay up to date with frequent updates.

## License and copyright

> This is a commercial product and requires a paid license for possession or use. Syncfusion<sup>®</sup> licensed software, including this component, is subject to the terms and conditions of Syncfusion<sup>®</sup> [EULA](https://www.syncfusion.com/license/studio/34.1.29/syncfusion_essential_studio_eula.pdf?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm). To acquire a license for 140+ [Vue UI components](https://www.syncfusion.com/vue-components?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm), you can [purchase](https://www.syncfusion.com/sales/pricing?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm) or [start a free 30-day trial](https://www.syncfusion.com/downloads/spreadsheet-editor-sdk?tag=es-ft-vue-spreadsheet-editor-banner).

> A free community [license](https://www.syncfusion.com/products/communitylicense?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm) is also available for companies and individuals whose organizations have less than $1 million USD in annual gross revenue and five or fewer developers.

See [LICENSE FILE](https://github.com/syncfusion/ej2-vue-ui-components/blob/master/license?utm_source=npm&utm_medium=listing&utm_campaign=vue-spreadsheet-editor-npm) for more info.

&copy; Copyright 2025 Syncfusion<sup>®</sup> Inc. All Rights Reserved. The Syncfusion<sup>®</sup> Essential Studio<sup>®</sup> license and copyright applies to this distribution.

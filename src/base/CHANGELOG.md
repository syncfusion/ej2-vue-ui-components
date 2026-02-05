# Changelog

## [Unreleased]

### Common

#### Bug Fixes

- `#I784559` - Fixed a memory leak issue in Vue components when using slot templates after destroying the controls.

## 32.1.20 (2025-12-23)

### Common

#### Bug Fixes

- `#I776886` - Fixed a memory leak issue in Vue components when using slot templates during data source updates.

## 25.1.35 (2024-03-15)

### Common

#### Features

- `#I409207` - Provided compatible support with `Quasar` for the Vue components.

#### Bug Fixes

- `#I552563` - The issue with "the TypeScript intellisense is not shown in the Vue components" has been resolved.

## 24.1.41 (2023-12-18)

### Common

#### Bug Fixes

- The Vue package size is minimised by removing redundant styles.

## 23.2.7 (2023-12-05)

### Common

#### Bug Fixes

- `#I513639` - The issue with "the pager template renders multiple times in the Grid component" has been resolved.

## 23.2.5 (2023-11-23)

### Common

#### Bug Fixes

- Resolved component's compilation issue.

## 23.2.4 (2023-11-20)

### Common

#### Bug Fixes

- `#I508468` - The issue with "unable to access the template data in production mode for Vue components" has been resolved.

## 23.1.36 (2023-09-15)

### Common

#### New Features

- The Vue sample browser has been upgraded to the Vue 3 version.
- Added the StackBlitz option to the Vue sample browser.
- `#I469488`, `#I490441`, `#I491649` - Provided Intellisense support for Vue 3 components using the Volar extension within Visual Studio Code.

## 22.2.5 (2023-07-27)

### Common

#### Bug Fixes

- `#I460439` - The issue with "the Vue components create multiple app instances when using templates" has been resolved.

## 22.1.34 (2023-06-21)

### Common

#### New Features

- Provided the TypeScript 5 compatible support for the Vue components.

## 21.2.9 (2023-06-06)

### Common

#### Bug Fixes

- `#I457123` - The issue with "Unable to render Grid component using v-for and a slot template in Vue 3" has been resolved.
- `#I468694` - The issue with "Unable to access the global directives in Vue 3 slot templates" has been resolved.

## 21.2.6 (2023-05-23)

### Common

#### Bug Fixes

- `#I453141` - The issue with "Unable to access the template data inside the external template while using Composition API" has been resolved.

## 21.1.41 (2023-04-18)

### Common

#### Bug Fixes

- `#I450987`, `#I446640`, `#I181430`, `#FB42508` - The issue with "DocumentEditor performance lag in Vue 3 applications" has been resolved.
- `#I445940` - The issue with "Can't initialize data with a prop value in the Vue 3 template" has been resolved.

## 21.1.38 (2023-04-04)

### Common

#### Bug Fixes

- `#I440657` - The issue with "Unwanted element is added in Vue 3 template element" has been resolved.
- `#I452080` - The issue with "Script error occurred in a Vue + Vitest testing sample" has been resolved.

## 21.1.37 (2023-03-29)

### Common

#### Bug Fixes

- `#I443747` - The issue with "Grid static columns are not rendered in Vue 3" has been resolved.
- `#I450995` - The issue with "Vite with Vue 2.7 sample is not working" has been resolved.
- `#I451413` - The issue with "Script error is occurred while changing the reactive variable value" has been resolved.

## 21.1.35 (2023-03-23)

### Common

#### New Features

- `#I396062`, `#F166897`, `#I412247` - Provided the provide/inject support for Vue template components.
- `#FB38812` - Provided the `Nuxt 3` framework compatible support for the Vue components.
- `#F178140` - Provided the `pnpm` framework compatible support for the Vue components.
- `#F176652` - Provided the `Vitest` testing framework compatible support for the Vue components.
- `#FB38517` - Provided the support to use the Vue components in Vue applications without requiring the `vue-class-component` package.

## 20.4.51 (2023-02-21)

### Common

#### Bug Fixes

- `#I431571` - The issue with "Vue 3 components are not destroyed while routing" has been resolved.

## 20.4.38 (2022-12-21)

### Common

#### Bug Fixes

- `#I409205` - The issue with the "Signature plugin missing in the latest Vue 2 direct script" has been resolved.
- The issue with the "v-model support is not working for the textbox component in Vue 3" has been resolved.

#### New Features

- `#FB34897` - Provided Vue 3 direct script support for Syncfusion Vue components.
- The new `Rating` component has been added to Vue.
- The `AppBar`, `Floating Action Button (FAB)`, `Mention`, `Message` and `Speed Dial` components have been developed to meet industry standards and are now marked production-ready.

#### Breaking Changes

- If you are using Syncfusion's Vue components without first registering a license, a license dialog will appear after a certain limit of usage, preventing further interaction in the application. Please make sure to register a valid license in order to continue using the Syncfusion Vue components without interruption.

## 20.3.47 (2022-09-29)

### Common

#### New Features

- `#I404540`, `#I403034`, `#F176393` - Provided the Vue 2.7 compatible support for the Vue components.

## 20.2.36 (2022-06-30)

### Common

#### New Features

- Provided the TypeScript 4.7 compatible support for the Vue components.
- Provided the option to register the license key by using the `npx` command. Follow these steps to register the license using the `npx` command:

| The `npx` command |
|---|
| Install the Syncfusion packages from `npm`. |
| Add the license key either in the environment variable `SYNCFUSION_LICENSE` or in the `syncfusion-license.txt` text file. |
| Run the command `npx syncfusion-license activate` to automatically register the license. |

## 20.1.61 (2022-06-21)

### Common

#### Bug Fixes

- `#I343901`, `#I362728` - "The routing and i18n are not working within the Vue 3 template components" issue has been resolved.

## 20.1.57 (2022-05-24)

### Common

#### Bug Fixes

- `#I362337` - The issue with the "Row template in the Grid does not work properly in vue 3" has been resolved.

## 20.1.56 (2022-05-17)

### Common

#### Bug Fixes

- `#I377536` - The issue with "Facing an Warning error while running in development mode in Vue 3" has been resolved.

## 20.1.52 (2022-05-04)

### Common

#### Bug Fixes

- `#FB9750` - The issue with "Providers are not accessible for Vue component with typescript application environment" has been resolved.

## 20.1.51 (2022-04-26)

### Common

#### Bug Fixes

- `#I334904`, `#I347008` - The issue with "Script error in Vite + Vue application" has been resolved.

## 20.1.48 (2022-04-12)

### Common

- The "Header Rows in Schedule component not rendered in Vue" issue has been fixed.

## 20.1.47 (2022-04-04)

### Common

#### New Features

- `#F140652`, `#F138394`, `#F148391`, `#I309881`, `#F167735`, `#I228458` - Provided slot template support for the Vue components.

## 19.4.53 (2022-02-22)

### Common

#### Bug Fixes

- `#I364613` - Object property templates are not working in production mode issue has been resolved.

## 19.4.52 (2022-02-15)

### Common

#### Bug Fixes

- `#I362388` - Modules in provider section not works properly issue has been resolved.

## 19.4.47 (2022-01-25)

### Common

#### Bug Fixes

- `#F171693` - The issue with "Vue components are not rendered with node version 16" has been resolved.

## 19.4.40 (2021-12-28)

### Common

#### Bug Fixes

- `#I334904`, `#I347008` - Compatability support for Vue components in Vite js has been resolved.

## 19.4.38 (2021-12-17)

### Common

#### Bug Fixes

- `#I348114` - Peer dependencies issue has been resolved.

## 19.3.47 (2021-10-26)

### Common

#### Bug Fixes

- `#I345561` - Resolved the data loading issue in the external template.

## 17.4.47 (2020-02-05)

### Common

#### Bug Fixes

- `#I260681`, `#I261593` - Resolved the peer dependency warning issues.

## 17.4.41 (2020-01-07)

### Common

#### Bug Fixes

- `#I252331` - Issue with object reference not maintained in Vue has been fixed.

## 17.2.48-beta (2019-08-28)

### Common

#### New Features

- Provided .sync modifier support for Essential JS 2 for Vue components.

## 17.1.1-beta (2019-01-29)

### Common

#### Bug Fixes

- Moved vue from dependency to peer dependency for resolving duplicate dependency installation.

## 16.3.31 (2018-11-07)

### Common

#### Bug Fixes

- Fixed the comptability issues in the child directive elements on using with vuestic admin app.

## 16.3.25 (2018-10-15)

### Common

#### Bug Fixes

- Fixed the child directives property value not updated while specifying property name in kebab-case.

## 16.3.21 (2018-09-22)

### Common

#### Breaking Changes

- The individual npm package will no longer bundle dependent component's style. The online web tool [CRG](https://crg.syncfusion.com/) can be used to combine specific set of component and its dependent component styles.

## 16.3.17 (2018-09-12)

### Common

Base library provide options to enable following Vue functionalities in Essential JS 2 components.

- Model Binding
- Dependency Injection
- Vue Templating

#### Breaking Changes

- The individual npm package will no longer bundle dependent component's style. The online web tool [CRG](https://crg.syncfusion.com/) can be used to combine specific set of component and its dependent component styles.

# Changelog

## [Unreleased]

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

-  `#F140652`, `#F138394`, `#F148391`, `#I309881`, `#F167735`, `#I228458` - Provided slot template support for the Vue components.

## 19.4.53 (2022-02-22)

### Common

#### Bug Fixes

-  `#I364613` - Object property templates are not working in production mode issue has been resolved.

## 19.4.52 (2022-02-15)

### Common

#### Bug Fixes

-  `#I362388` - Modules in provider section not works properly issue has been resolved.

## 19.4.47 (2022-01-25)

### Common

#### Bug Fixes

-  `#F171693` - The issue with "Vue components are not rendered with node version 16" has been resolved.

## 19.4.40 (2021-12-28)

### Common

#### Bug Fixes

-  `#I334904`, `#I347008` - Compatability support for Vue components in Vite js has been resolved.

## 19.4.38 (2021-12-17)

### Common

#### Bug Fixes

-  `#I348114` - Peer dependencies issue has been resolved.

## 19.3.47 (2021-10-26)

### Common

#### Bug Fixes

-  `#I345561` - Resolved the data loading issue in the external template.

## 17.4.47 (2020-02-05)

### Common

#### Bug Fixes

-  `#I260681`, `#I261593` - Resolved the peer dependency warning issues.

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

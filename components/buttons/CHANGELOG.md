# Changelog

## [Unreleased]

## 30.1.37 (2025-06-25)

### Chip

#### Features

- `#FB63852` - Provided drag-and-drop functionality to rearrange chips and move them between containers. To enable drag and drop, set `allowDragAndDrop` to true.

## 28.2.7 (2025-02-25)

### Button

#### Bug Fixes

- `#I692936` - The issue with "Script error thrown while destroying the button due to extra space in cssClass property" has been resolved.

## 28.2.6 (2025-02-18)

### Checkbox

#### Bug Fixes

- `#I688698`- Provided the tab index attribute support to the checkbox element.

## 28.1.39 (2024-01-14)

### Switch

#### Bug Fixes

- `#I933399`- The issue with "Checked state not update properly while changing the switch component programmatically using click event of input element" has been resolved.

## 28.1.37 (2024-12-31)

### Switch

#### Bug Fixes

- `#I664001`- The issue with "Form reset functionality does not work properly for the switch component when it is in a disabled state" has been resolved.

## 28.1.33 (2024-12-12)

### Switch

#### Features

- The Switch component now includes a `beforeChange` event, which enables users to intercept and manage state changes before they occur. This feature supports custom logic, such as validation or cancellation, thereby offering greater flexibility.

### Chip

#### Features

- `#FB16787` - Provided template support to render HTML elements as chip item content.

## 27.2.4 (2024-11-26)

### Checkbox

#### Bug Fixes

- `#F857466`- The issue with "Need to set the label tag for attribute if user changes the checkbox input id in checkbox component" has been resolved.

## 27.2.2 (2024-11-15)

### Checkbox

#### Bug Fixes

- `#F95768`- The issue with "Parent element click event `prevented` while clicking on switch component in angular." has been resolved.

## 27.1.58 (2024-11-05)

### Checkbox

#### Bug Fixes

- `#F95768`- The issue with "Checkbox not getting checked while using `usestate` in react" has been resolved.

## 27.1.53 (2024-10-15)

### Checkbox

#### Bug Fixes

- `#F60464`- The issue with "checkbox state input element checked state was not update properly " has been resolved.

## 27.1.51 (2024-09-30)

### Checkbox

#### Bug Fixes

- `#I909049` - The issue with "Need to set the aria-label attribute for the checkbox input element and not to the wrapper element" has been resolved.

### RadioButton

#### Bug Fixes

- The issue with "Background color issue for disabled unselect radio button in bootstrap5 theme" has been resolved.

## 26.1.35 (2024-06-11)

### Floating Action Button

#### Breaking Changes

- The `refreshPosition` method has been marked as deprecated and will no longer be used. It will be removed in future versions. Previously, this method was used to re-position the FAB when its target was resized. Now, this functionality is handled responsively through CSS at the source level, eliminating the need for manual refreshes.

### Switch

#### Bug Fixes

- `#I382543` - The issue with "Checkbox value not update properly while using edit template of grid" has been resolved.

### Checkbox

#### Bug Fixes

- `#I399484` - The issue with aria-checked accessibility issue in angular checkbox has been fixed.

### RadioButton

#### Bug Fixes

- `#F40707` - Value change event triggered twice in Radio Button component has been fixed.

### Button

#### Bug Fixes

- `#I512179` - The issue with "Duplicate Icon Span while using the `onPropertyChange` of button" has been resolved.

### Chip

#### New Features

- `#I422263` - Provided the htmlAttributes support for the Chip component.

## 19.2.47 (2021-07-13)

### Checkbox

#### Bug Fixes

- Issue with checkbox icon on Mac OS has been resolved.

## 19.2.46 (2021-07-06)

### Chips

#### Bug Fixes

- Issue with `selectedChips` property is not maintained after deletion of Chip items has been resolved.

## 18.4.44 (2021-02-23)

### CheckBox

#### Bug Fixes

- Issue with destroy has been fixed.

### RadioButton

#### Bug Fixes

- `#313420` - Value argument always passed as on in change event issue resolved.

## 18.4.41 (2021-02-02)

### CheckBox

#### Bug Fixes

- Issue with click event has been fixed.

## 18.4.33 (2021-01-05)

### CheckBox

#### Bug Fixes

- Issue with destroy has been fixed.

## 18.4.30 (2020-12-17)

### Chips

#### Bug Fixes

- `#293361` - The issue with "The Chip is not selected while setting the string values" has been resolved.

## 18.3.40 (2020-10-13)

### Button

#### Bug Fixes

- Warning message has been resolved.

## 18.2.58 (2020-09-15)

### CheckBox

#### Bug Fixes

- Issue with destroy method has been fixed.

## 18.2.44 (2020-07-07)

### Chips

#### Bug Fixes

- `#278394` - Issue with delete event has been fixed.

## 18.1.48 (2020-05-05)

### Chips

#### New Features

- `#152050` - Support for adding images to a chip using the `trailingIconUrl` and `leadingIconUrl` property has been included.

## 18.1.43 (2020-04-07)

### Radio Button

#### Bug Fixes

- Radio button not working properly when clicked inside splitter control has been resolved.

## 17.4.49 (2020-02-11)

### Button

#### Bug Fixes

- CSS validation issues has been resolved.

## 17.4.46 (2020-01-30)

### Chips

#### New Features

- `#256381` - Now, the `beforeClick` event triggers while clicking the chips.
- `#256381` - Now, the `selectedChips` property maintains the value field that is provided to the chip.

## 17.4.43 (2020-01-14)

### Button

#### Bug Fixes

- Disabled button not working properly has been resolved.

## 17.4.41 (2020-01-07)

### Chips

#### Bug Fixes

- `#256994` - The issue with aria-selected value maintenance in a single selection has been fixed.

## 17.4.39 (2019-12-17)

### Chips

#### Bug Fixes

- `#250583` - Now, the selected chips values are maintained after selecting and deselecting the chips.

## 17.3.16 (2019-10-09)

### CheckBox

### RadioButton

### Switch

#### Bug Fixes

- Adding common cssClass for wrapper.

## 17.2.35 (2019-07-17)

### Chips

#### Bug Fixes

- `#239111` - Issue with getting selected chip using `getSelectedChips` method in Edge browser has been fixed.

## 17.2.28-beta (2019-06-27)

### Chips

#### Breaking Changes

- Property selection enum type name changed from "selection" to "Selection".

## 17.1.50 (2019-06-04)

### Button

#### New Features

- Provided method to focusIn and click.

## 17.1.40 (2019-04-09)

### RadioButton

#### New Features

- Provided `getSelectedValue` method to find the value of selected radio button in a group.

## 17.1.1-beta (2019-01-29)

### Chips

The Chip control contains a small block of essential information that triggers an event on click action. It also contains the primary text, image, or both, and is mostly used in mails, contacts, or filter tags.

- `Input chip` - Basic chip with delete icon that represents a person or entity and enables  removal of chips from the chip list collection.
- `Choice chip` - Used to select a choice from the available options.
- `Filter chip` - Used to select multiple choices from the available options.
- `Action chip` - Used to trigger actions for primary content.

## 16.4.53 (2019-02-13)

### Button

#### Bug Fixes

- Flat button text is not visible in bootstrap theme issue is fixed.

## 16.4.40-beta (2018-12-10)

### Chips

The Chip control contains a small block of essential information that triggers an event on click action. It also contains the primary text, image, or both, and is mostly used in mails, contacts, or filter tags.

- `Input chip` - Basic chip with delete icon that represents a person or entity and enables  removal of chips from the chip list collection.
- `Choice chip` - Used to select a choice from the available options.
- `Filter chip` - Used to select multiple choices from the available options.
- `Action chip` - Used to trigger actions for primary content.

## 16.3.33 (2018-11-20)

### CheckBox

#### Bug Fixes

- Add multiple classes dynamically to `cssClass` property issue fixed.

## 16.2.49 (2018-08-21)

### Common

#### Bug Fixes

- Provided renderer support.

## 16.2.41 (2018-06-25)

### Button

#### Breaking Changes

- Default color changed for the flat button.

undefinedButton is a graphical user interface element that triggers an event on its click action.

- **Types** - Provided with different types of Button.

- **Predefined Styles** - Provided with predefined styles of Button.

- **Sizes** - Provided with different sizes of Button.

- **Icons** - Supports text and icon on the Button.

### RadioButton

#### Bug Fixes

- Wrapped text of a RadioButton label overlaps with next RadioButton label issue fixed.

undefinedRadioButton is a graphical user interface element that allows to select one option from the choices.

- **States** - Provided with different states of RadioButton.

- **Label** - Supports label and its positioning.

- **Sizes** - Provided with different sizes of RadioButton.

### Switch

Switch is a graphical user interface element that allows you to toggle between checked and unchecked states.

- **Text** - Supports text.
- **Sizes** - Provided with different sizes of Switch.

Switch is a graphical user interface element that allows you to toggle between checked and unchecked states.

- **Text** - Supports text.
- **Sizes** - Provided with different sizes of Switch.### CheckBox

CheckBox is a graphical user interface element that allows to select one or more options from the choices.

- **States** - Provided with different states of CheckBox.

- **Label** - Supports label and its positioning.

- **Sizes** - Provided with different sizes of CheckBox.

## 16.1.28 (2018-03-09)

### CheckBox

#### Bug Fixes

- Style compatibility issue fixed.

## 16.1.24 (2018-02-22)

### Common

#### Breaking Changes

Pascal casing changes in Button Component.

Enum Name | Old Property Value | New Property Value
-----|-----|-----
`IconPosition` | left | Left
`IconPosition` | right | Right

Pascal casing changes in CheckBox Component.

Enum Name | Old Property Value | New Property Value
-----|-----|-----
`LabelPosition` | after | After
`LabelPosition` | before | Before

Pascal casing changes in RadioButton Component.

Enum Name | Old Property Value | New Property Value
-----|-----|-----
`RadioLabelPosition` | after | After
`RadioLabelPosition` | before | Before

## 15.4.30-preview (2018-02-14)

### CheckBox

#### Bug Fixes

- Label text responsive issue fixed.

## 15.4.27-preview (2018-01-30)

### CheckBox

#### Bug Fixes

- Wrapped text overlaps frame icon issue fixed.

## 15.4.26-preview (2018-01-23)

### CheckBox

#### Bug Fixes

- Theme compatibility issue resolved for CSS components.

## 15.4.23-preview (2017-12-27)

### Common

#### New Features

- Added typing file for ES5 global scripts (dist/global/index.d.ts).

#### Breaking Changes

- Modified the module bundle file name for ES6 bundling.

## 15.4.22-preview (2017-12-14)

### RadioButton

#### Bug Fixes

- RadioButton not working properly with ngModel issue fixed.

## 15.4.21-preview (2017-12-08)

### RadioButton

#### Bug Fixes

- Custom material theme issue fixed.

## 15.4.20-preview (2017-12-01)

### Common

#### New Features

- Upgraded TypeScript version to 2.6.2

## 15.4.17-preview (2017-11-13)

### Button

Button is a graphical user interface element that triggers an event on its click action.

- **Types** - Provided with different types of Button.

- **Predefined Styles** - Provided with predefined styles of Button.

- **Sizes** - Provided with different sizes of Button.

- **Icons** - Supports text and icon on the Button.

### CheckBox

CheckBox is a graphical user interface element that allows to select one or more options from the choices.

- **States** - Provided with different states of CheckBox.

- **Label** - Supports label and its positioning.

- **Sizes** - Provided with different sizes of CheckBox.

### RadioButton

RadioButton is a graphical user interface element that allows to select one option from the choices.

- **States** - Provided with different states of RadioButton.

- **Label** - Supports label and its positioning.

- **Sizes** - Provided with different sizes of RadioButton.## 18.4.39 (2021-01-28)

### RadioButton

#### Bug Fixes

- `#260887`, `#300238`, `F159600` - `v-model` property not updated issue resolved.

### CheckBox

#### New Features

- `#241256` - Array model support provided.


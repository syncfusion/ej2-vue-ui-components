# Changelog

## [Unreleased]

## 31.1.23 (2025-10-07)

### Image Editor

#### Bug Fixes

- `#I762686` - The issue with "Script error thrown and shapes not removed when 'undo' method is called programmatically" has been resolved.

## 31.1.21 (2025-09-23)

### Image Editor

#### Bug Fixes

- `#I762246` - The issue with "Cancel argument not working for select action in 'ShapeChanging' event" has been resolved.

## 31.1.17 (2025-09-05)

### Image Editor

#### Features

- `Opening images with custom width and height` - Users can now open images with specified width and height values using the imageSettings parameter in the `Open` method. This enhancement introduces three additional properties: `width,` `height,` and `isAspectRatio.` Image dimensions can be precisely controlled while preserving the aspect ratio, if needed. This provides more control over rendering images, especially when dealing with high-resolution images or fixed canvas requirements.

- `Underline and strikethrough support for text annotation` - `Underline` and `Strikethrough` formatting options have been added to text annotations. This feature is useful for creating instructional materials, documentation screenshots, and professional image presentations.

- `Loading BMP images` - Users can load BMP (Bitmap) image files, expanding its file format compatibility. Users can upload BMP files via the file uploader UI or programmatically using the `Open` method. This addresses the needs of design professionals and users working with high-resolution images.

#### Bug Fixes

- `#I733422` - The issue with "Annotations were not returned in image data when calling the 'getImageData' method inside the 'editComplete' event" has been resolved.
- `#I736512` - The issue with "Aspect ratio not maintained during bottom edge resize of crop selection in Image Editor" has been resolved.

## 29.2.5 (2025-05-21)

### Image Editor

#### Bug Fixes

- The issue with "Image smoothing not working properly after window resize" has been resolved.

## 29.2.4 (2025-05-14)

### Image Editor

#### Features

- The Image Editor component now supports image smoothing through the new `imageSmoothingEnabled` property. This property allows users to enable or disable the smoothing effect applied to high-resolution images during rendering. When enabled, it improves visual clarity by reducing pixelation with high-quality smoothing. This enhancement ensures sharper image rendering, especially when working with detailed images.

## 29.1.38 (2025-04-15)

### Image Editor

#### Bug Fixes

- The issue with "Crop selection resizing beyond image bounds on mobile" has been resolved.

## 29.1.37 (2025-04-08)

### Image Editor

#### Bug Fixes

- `#I704085` - The issue with "Page crashes when changing color in freehand pen tool with custom toolbar" has been resolved.

## 29.1.35 (2025-04-01)

### Image Editor

#### Bug Fixes

- `#I703503` - The issue with "Redact feature not working properly in straightened image" has been resolved.
- `#I701384` - The issue with "Error after changing outline color in text annotation" has been resolved.

## 28.1.33 (2024-12-12)

### Image Editor

- The issue with "Localization issue in ImageEditor" has been resolved.
- The issue with "Image Editor arrow intersection point is improper" has bee resolved.

#### Features

- The Image Editor component now includes support for image restrictions through `uploadSettings`. Developers can specify allowed image extensions and set minimum and maximum image sizes. If an image does not meet the criteria, users will receive an alert message, ensuring improved image validation and better control over uploads.

- The Image Editor component now supports the `WebP` format, allowing users to upload and save WEBP images.

## 27.1.50 (2024-09-24)

### Image Editor

#### Features

- Added new action types 'resize-start' and 'resize-end' to the selectionChanging event. The event triggers 'resize-start' when resizing begins and 'resize-end' when resizing ends.

#### Bug Fixes

- `#I910189` - The issue with "Localization issue in ImageEditor" has been resolved.
- `#I629743` - The issue with "zoomed event not triggered for mousewheel zoom" has been resolved.

## 27.1.48 (2024-09-18)

### ImageEditor

#### Features

- `Redact support` - The Redact support in the Image Editor allows users to effortlessly conceal sensitive information by applying blur or pixel effect to specific areas of an image. Ideal for maintaining privacy in photos. This feature is particularly valuable for protecting privacy and complying with data protection regulations, making it easier to securely share images without compromising sensitive information.

- `Text annotation enhancement` - The enhanced Text Annotation feature in the Image Editor allows users to customize their annotations with fill color, outline color, and outline width. Ideal for making text stand out and improving readability, this tool ensures that your annotations are both clear and visually appealing for any image.

- `Rectangle annotation enhancement` - The enhanced Rectangle Annotation feature in the Image Editor now includes support for adjusting the border radius, allowing users to create annotations with rounded or sharp corners. This enhancement provides greater flexibility in customizing the look of your annotations, adding a touch of style and refinement to your visual content.

## 26.1.40 (2024-07-02)

### Image Editor

#### Bug Fixes

- The issue with "keyboard navigation not proper" has been resolved.
- `#I603404` - The issue with "ImageEditor drawText method text selection issue with multiline" has been resolved.
- `#I603806` - The issue with "ImageEditor Undo/Redo collection was not working properly for pen drawing annotation" has been resolved.

## 26.1.38 (2024-06-19)

### Image Editor

#### Bug Fixes

- The issue with "image not loading in react ug sample" has been resolved.

## 26.1.35 (2024-06-11)

### Image Editor

#### Bug Fixes

- `#I565340` - The issue with "Script error thrown when attempting to reopen a base64 URL using a custom toolbar in mobile mode" has been resolved.

- `#I566745` - The issue with "FontSize is not updated properly while using the updateShape method" has been resolved.

## 25.1.35 (2024-03-15)

### Image Editor

#### Bug Fixes

- Issue with "Toolbar not refreshing while using select public method" has been resolved.

### ImageEditor

#### Features

- Provided support for image straightening allows users to adjust an image by rotating it clockwise or counter clockwise. The rotating degree value should be within the range of -45 to +45 degrees for accurate straightening. Positive values indicate clockwise rotation, while negative values indicate counter clockwise rotation.

- Provided support to add additional font families for text annotation.

## 24.1.41 (2023-12-18)

### ImageEditor

#### Features

- Provided support for image straightening allows users to adjust an image by rotating it clockwise or counter clockwise. The rotating degree value should be within the range of -45 to +45 degrees for accurate straightening. Positive values indicate clockwise rotation, while negative values indicate counter clockwise rotation.

- Provided support to add additional font families for text annotation.

## 23.1.36 (2023-09-15)

### ImageEditor

#### Features

- Provided support for image annotations allowing users to insert and display multiple images in addition to the main image they are editing.
- Provided support for frames allowing users to add decorative borders or frames around images. Frames can enhance the visual appeal of an image..
- Provided resizing support allowing users to adjust the size and dimensions of an image to suit their needs, such as printing, web display, or other purposes.

## 22.2.11 (2023-08-29)

### Image Editor

#### Bug Fixes

- `#I494726` - The issue with "Annotations pen drawing not working properly in ipad" has been resolved.

## 22.2.10 (2023-08-22)

### Image Editor

#### Bug Fixes

- Issue with "toolbar" property has been resolved.

- Issue with "Script error thrown while editing multiple text area" has been resolved.

## 22.2.9 (2023-08-15)

### Image Editor

#### Bug Fixes

- Issue with "Script error thrown while applying text area changes to canvas" has been resolved.

## 22.2.5 (2023-07-27)

### Image Editor

#### Bug Fixes

- Issue with "Path size not proper after saving" has been resolved.

## 22.1.39 (2023-07-18)

### Image Editor

#### Bug Fixes

- Issue with "Circle cropped image is not saved properly" has been resolved.

## 22.1.38 (2023-07-11)

### Image Editor

#### Bug Fixes

- Issue with "Image not drawn properly after opening image as ImageData" has been resolved.

## 22.1.37 (2023-07-04)

### Image Editor

#### Bug Fixes

- Issue with "Touch events are not un-wired properly while destroying control" has been resolved.

## 22.1.36 (2023-06-28)

### Image Editor

#### Bug Fixes

- Issue with "Refreshing the Image Editor dimension while resizing" has been resolved.

## 22.1.34 (2023-06-21)

### Image Editor

#### Bug Fixes

- Issue with "GetImageData method returns low resolution data" has been resolved.

#### Features

- Provided support for path annotations allowing users to annotate specific paths or routes within a document or graphical representation.
- Provided support for arrow annotations allowing users to easily indicate direction or flow within their content.
- Provided quick access toolbar support which improve accessibility when working with shapes. It automatically appears when shapes are selected, providing convenient access to commonly used tools and options.

#### Breaking Changes

- Previously, the "ShapeChanging" event was triggered for both shape modifications and selection customizations. However, a new event called "SelectionChanging" has been introduced specifically for selection customizations.

## 21.1.39 (2023-04-11)

### Image Editor

#### Bug Fixes

- Issue with "Shape changing event not triggered while inserting crop selection" has been resolved.

## 21.1.37 (2023-03-29)

### Image Editor

#### Bug Fixes

- Issue with "Script error thrown while using Toolbar Template" has been resolved.

## 21.1.35 (2023-03-23)

### Image Editor

#### Features

- Provided the undo/redo support, that records all the actions so that it can be reverted later if necessary.
- Provided pinch zoom support to zoom in or out the image while performing pinch on touch enabled devices.
- Provided mouse wheel zoom support to zoom in/out the image while scrolling mouse wheel with ctrl key press.
- Provided public method 'getImageDimension' to get the current image size with its coordinates.
- Provided click event to get the current cursor position on the image.

#### Breaking Changes

|Previous Enum Name|Modified Enum Name|
|-----------|-----------|
|ImageFinetuneOptions|ImageFinetuneOption|
|ImageFilterOptions|ImageFilterOption|
|ImageEditorCommands|ImageEditorCommand|

#### Bug Fixes

- Issue with "Script error thrown while resizing control without toolbar" has been resolved.

## 20.4.40 (2022-12-28)

### Image Editor

#### Bug Fixes

- Issue with "Toolbar Alignment" has been resolved.

## 20.4.38 (2022-12-21)

### Image Editor

#### Bug Fixes

- Issue with "Toolbar Template Alignment" has been resolved.

## 20.3.48 (2022-10-05)

### Image Editor

#### Bug Fixes

- Issue with "Screen Orientation Alignment in mobile mode" has been resolved.

## 20.3.47 (2022-09-29)

### Image Editor

The Image Editor control is a graphical user interface used for editing images. It provides built-in support for rotate, flip, zoom, and crop the images based on the selection. It also has support for inserting an annotations including rectangle, ellipse, line, text, and freehand drawings.

- **Selection** - The selection region can be a `square` or `circle`, customized to various aspects ratios, and customized by dragging and resizing.
- **Crop** - The image can be cropped based on the selection.
- **Rotate** - The image can be rotated both clockwise and anticlockwise by 90 degrees.
- **Flip** - The image can be flipped both horizontally and vertically.
- **Zoom** - The image can be zoomed in and out.
- **Pan** - View the entire image by toggling the pan option from the toolbar.
- **Freehand drawing** - Draw freehand on the image and adjust the pen's stroke width and stroke color.
- **Reset** - Revert all the edited states and load the original image.
- **Save** - Save the edited image in JPEG, PNG, and SVG formats.
- **Annotation** - `Text`, `rectangle`, `ellipse`, and `line` annotation shapes are supported.
The Image Editor component is a graphical user interface used for editing images. It provides built-in support for rotate, flip, zoom, and crop the images based on the selection. It also has support for inserting an annotations including rectangle, ellipse, line, text, and freehand drawings.

- **Selection** - The selection region can be a `square` or `circle`, customized to various aspects ratios, and customized by dragging and resizing.
- **Crop** - The image can be cropped based on the selection.
- **Rotate** - The image can be rotated both clockwise and anticlockwise by 90 degrees.
- **Flip** - The image can be flipped both horizontally and vertically.
- **Zoom** - The image can be zoomed in and out.
- **Pan** - View the entire image by toggling the pan option from the toolbar.
- **Freehand drawing** - Draw freehand on the image and adjust the pen's stroke width and stroke color.
- **Reset** - Revert all the edited states and load the original image.
- **Save** - Save the edited image in JPEG, PNG, and SVG formats.
- **Annotation** - `Text`, `rectangle`, `ellipse`, and `line` annotation shapes are supported.
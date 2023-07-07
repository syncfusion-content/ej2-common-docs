---
layout: post
title: Material3 Theme in ##Platform_Name## Appearance control | Syncfusion
description: Learn here all about Material3 Theme in Syncfusion ##Platform_Name## Appearance control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Material3 Theme 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Material3 Theme

Material 3 is an updated theme that encompasses enhanced theming, components, and personalization features, including dynamic color capabilities. It has been specifically designed to align seamlessly with the new visual style and system UI introduced in Android 12 and above. For more detailed information, please refer to the following link: [ Link to Material 3 Information](https://m3.material.io/).

## Syncfusion Material3 Theme

Material 3 theme has been incorporated into all Syncfusion EJ2 Controls. The theme includes light and dark variants and utilizes CSS variables for easy customization of control colors in CSS format. This implementation enables seamless switching between light and dark color schemes, offering users a flexible solution to suit their preferences and application needs.

> Note: It is important to note that the Material3 theme incorporates CSS variables with rgb() values for color variables. It is advisable to avoid using hex values in this context, as it may result in improper functionality.

| Color Variants | Correct | Incorrect |
|----|----|----|
|Primary | 103, 80, 164 | #6750a4 |
|Secondary | 98, 91, 113 | #625b71 |
|Surface | 255, 255, 255 | #ffffff |
|Success | 0, 172, 126 | #00ac7e |

## What are Css Variables?

CSS variables, also known as custom properties, are a powerful feature in CSS that allows you to define reusable values and apply them throughout your stylesheets. Prefixed with "--," CSS variables can be utilized in any property value within a CSS rule. To retrieve the value of a CSS variable, the var() function is used. CSS variables can access the Document Object Model (DOM), enabling the creation of variables with either local or global scope. For further details, please consult the following link: [Link to CSS Variables Information](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

### How does Syncfusion Theming utilize CSS Variables?

The Material 3 theme in our system incorporates CSS variable support, utilizing CSS variables with rgb() values for color customization.

```css
:root {
  --color-sf-black: 0, 0, 0;
  --color-sf-white: 255, 255, 255;
  --color-sf-primary: 103, 80, 164;
  --color-sf-primary-container: 234, 221, 255;
  --color-sf-secondary: 98, 91, 113;
  --color-sf-secondary-container: 232, 222, 248;
  --color-sf-tertiary: 125, 82, 96;
  --color-sf-tertiary-container: 255, 216, 228;
  --color-sf-surface: 255, 255, 255;
  --color-sf-surface-variant: 231, 224, 236;
  --color-sf-background: var(--color-sf-surface);
  --color-sf-on-primary: 255, 255, 255;
  --color-sf-on-primary-container: 33, 0, 94;
  --color-sf-on-secondary: 255, 255, 255;
  --color-sf-on-secondary-container: 30, 25, 43;
  --color-sf-on-tertiary: 255, 255, 255;
}
```

### Exploring Color Customization

Through the utilization of these CSS variables, customization of the color variables becomes remarkably straightforward. For example, to customize the primary color variable in this theme, simply modify its value in the root values.

**Default primary value**

![default primary value](images/material3-default.PNG)

**Customized primary value**

![customized primary value](images/material3-customize.PNG)

With this CSS variable support, you can effortlessly customize the color variable values for our EJ2 controls.

## Dark mode support

The controls in our system now seamlessly transition between light and dark modes without any noticeable delay, achieved by consolidating the light theme and dark theme configurations into a single definition file.

![dark mode](images/material3.gif)

```css
.e-dark-mode {
  --color-sf-black: 0, 0, 0;
  --color-sf-white: 255, 255, 255;
  --color-sf-primary: 208, 188, 255;
  --color-sf-primary-container: 79, 55, 139;
  --color-sf-secondary: 204, 194, 220;
  --color-sf-secondary-container: 74, 68, 88;
  --color-sf-tertiary: 239, 184, 200;
  --color-sf-tertiary-container: 99, 59, 72;
  --color-sf-surface: 28, 27, 31;
  --color-sf-surface-variant: 28, 27, 31;
  --color-sf-background: var(--color-sf-surface);
  --color-sf-on-primary: 55, 30, 115;
  --color-sf-on-primary-container: 234, 221, 255;
  --color-sf-on-secondary: 51, 45, 65;
  --color-sf-on-secondary-container: 232, 222, 248;
  --color-sf-on-tertiary: 73, 37, 50;
}
```

### How to switch to dark mode

Thanks to the CSS variable support, transitioning between light and dark theme modes has become effortless. To switch to dark mode, simply add the 'e-dark-mode' class to the body section of your application. Upon adding this class, the theme will seamlessly switch to dark mode. Please refer to the example image below for guidance.

![dark mode](images/material3-dark.PNG)

## ThemeStudio application

The Material 3 theme has been seamlessly integrated into the ThemeStudio application, offering a comprehensive solution to meet your customization requirements.

Access the Syncfusion ThemeStudio application, featuring the Material 3 theme, via the following link: [Link to Syncfusion ThemeStudio with Material 3 Theme](https://ej2.syncfusion.com/themestudio/?theme=material3)

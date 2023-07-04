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

Material 3 includes updated theming, components, and personalization features like dynamic color. It is designed to be cohesive with the new visual style and system UI on Android 12 and above. For more information refer this [link](https://m3.material.io/).

## Syncfusion Material3 Theme

We have added the material 3 theme light and dark variants to all Syncfusion EJ2 Controls. With the implementation of CSS variables in this theme, we've made it effortless to customize the Syncfusion control colors directly within the CSS format. This approach allows users to easily switch between light and dark color schemes, providing seamless adaptability to their preferences and application needs.

> Note: In Material3 theme, we have used CSS variables with rgb() values for our color variables.Please note that utilizing hex values in this case will result in improper functionality.

| Color Variants | Correct | Incorrect |
|----|----|----|
|Primary | 103, 80, 164 | #6750a4 |
|Secondary | 98, 91, 113 | #625b71 |
|Surface | 255, 255, 255 | #ffffff |
|Success | 0, 172, 126 | #00ac7e |

## What are Css Variables?

CSS variables, also known as custom properties, are a powerful feature in CSS that enables you to define reusable values and utilize them throughout your stylesheets. They are prefixed with "--" and can be used in any property value within a CSS rule. To insert the value of a CSS variable, you can use the var() function. CSS variables can access the Document Object Model (DOM), allowing you to create variables with either local or global scope. For more information, please refer to this [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

### How syncfusion theming utilize css variables?

We have integrated CSS variable support for our Material 3 theme. In this theme, we have incorporated CSS variables with rgb() values for our color variables.

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

Using these CSS variables, you can easily customize the color variables. For example, to customize the primary color variable in this theme, you can simply change its value in the root values.

**Default primary value**

![default primary value](images/material3-default.png)

**Customized primary value**

![customized primary value](images/material3-customize.png)

With this CSS variable support, you can effortlessly customize the color variable values for our EJ2 controls.

## Dark mode support

We have unified the light theme and dark theme values into a single definition file. This allows for easy switching between light and dark modes for our controls.

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

With this CSS variable support, switching between light and dark theme modes is a breeze. To switch to dark mode, simply add the 'e-dark-mode' class to the body section of your application. Once you've added this class, the theme will switch to dark mode. Please refer to the image below for an example.

![dark mode](images/material3-dark.png)

## ThemeStudio application

We have also integrated the Material 3 theme into our ThemeStudio application. So, you can utilize this application for your customization needs as well.

https://ej2.syncfusion.com/themestudio/?theme=material3

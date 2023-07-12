---
layout: post
title: Content Security Policy in  ##Platform_Name## Common control | Syncfusion
description: Learn here all about Content Security Policy in Syncfusion  ##Platform_Name##  Common control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: common
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Content Security Policy

Content Security Policy (CSP) is a security feature implemented by web browsers that helps to protect against attacks such as cross-site scripting (XSS) and data injection. It does this by limiting the sources from which certain types of content can be loaded on a web page.

When enabling strict [Content Security Policy (CSP)](https://csp.withgoogle.com/docs/strict-csp.html), some browser features are disabled by default. In order to use Syncfusion controls with strict CSP mode, it is necessary to include following directives in the CSP meta tag.

* Syncfusion controls eliminate the need for the `unsafe-eval` directive in the meta tag. It is recommended to rewrite the inline string and external templates as [function template](../template#function-template) approach for Syncfusion controls template properties in the application. This approach ensures compliance with strict Content Security Policy (CSP) guidelines.

N> If users prefer to continue using inline string and external templates, it is necessary to include the `unsafe-eval` directive in the CSP meta tag in order to bypass the CSP violation.

* Syncfusion controls uses **base64** as a font icon and it is not allowed in strict CSP enabled site. To overcome this, it’s necessary to add the [`font-src data:`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src) directive in the meta tag.

* The **inline styles** are generally not considered best practice for security reasons. However, in the case of Syncfusion controls, where built-in themes, dimension settings, and UI interaction modifications are present, their usage becomes necessary in certain situations. In order to achieve the desired design, inline styles are utilized along with the inclusion of the [`Roboto’s external font`](https://fonts.googleapis.com/css?family=Roboto:400,500).

* To allow the execution of inline styles and the inclusion of the external font, it is necessary to include the [unsafe-inline](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script) directive within the `style-src` directive of the CSP meta tag. This adjustment ensures seamless rendering and proper functioning of Syncfusion controls by enabling the controls to apply the required visual enhancements and dynamic interactions that enhance the overall user experience.

The following meta tag is included within the `<head>` tag and resolves the CSP violation on the application's side when utilizing Syncfusion controls.

```html
<head>
    ...
    <meta http-equiv="Content-Security-Policy" content="default-src 'self';
    script-src 'self';
    style-src 'self' https://fonts.googleapis.com/ 'unsafe-inline';
    font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data: cdn.syncfusion.com 'unsafe-inline';" />
</head>
```

> [View the JavaScript sample enabled with strict CSP in Github](https://github.com/SyncfusionExamples/ej2-javascript-csp/)

> [View the TypeScript sample enabled with strict CSP in Github](https://github.com/SyncfusionExamples/ej2-typescript-csp/)

N> From the release 2023 Vol1 - 22.1 version, the Content Security Policy for Syncfusion controls has been enhanced by eliminating the usage of the `unsafe-eval` directive and implement a [function template](../template#function-template) approach for template properties.

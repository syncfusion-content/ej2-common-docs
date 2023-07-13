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

Content Security Policy (CSP) is a security feature implemented by web browsers that helps to protect against attacks such as cross-site scripting (XSS) and data injection. It limits the sources from which content can be loaded on a web page.

To enable strict [Content Security Policy (CSP)](https://csp.withgoogle.com/docs/strict-csp.html), some browser features are disabled by default. In order to use Syncfusion controls with strict CSP mode, it is essential to include following directives in the CSP meta tag.

* Syncfusion controls uses **base64** as a font icon and it is not allowed in strict CSP enabled site. To overcome this, it is necessary to add the [`font-src data:`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src) in the meta tag.

* For the built in themes and styles, we use the **inline styles** and [`Roboto’s external font`](https://fonts.googleapis.com/css?family=Roboto:400,500), which is also blocked. To allow them [`style-src 'self' unsafe-inline`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script) must be included in the meta tag.

The following meta tag is included within the `<head>` tag and resolves the CSP violation on the application's side when utilizing Syncfusion controls.

```html
<head>
    ...
    <meta http-equiv="Content-Security-Policy" content="default-src 'none';
    script-src 'self'
    style-src 'self' https://fonts.googleapis.com/ 'unsafe-inline';
    font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data: cdn.syncfusion.com 'unsafe-inline';" />
</head>
```

> [View the JavaScript sample enabled with strict CSP in Github](https://github.com/SyncfusionExamples/ej2-javascript-csp-example)

## See also

* [How to resolve the Content Security Policy (CSP) errors](../how-to/csp-errors)
---
layout: post
title: Security Considerations in  ##Platform_Name## Common control | Syncfusion
description: Learn here all about Security Considerations in Syncfusion  ##Platform_Name##  Common control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: common
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Syncfusion Javascript - Security Considerations

Security is a critical aspect of web applications to protect them from various threats and vulnerabilities. Using HTTPS to encrypt data, checking and cleaning user inputs, and setting up robust authentication methods like multi-factor authentication are essential steps.

Syncfusion Javascript controls are implemented with these security considerations.

## Security Vulnerabilities

Security vulnerabilities in web applications refer to weaknesses or flaws in the design, implementation, or configuration of a web application that can be exploited by attackers to compromise the application's integrity, confidentiality, or availability. Here we can see some of the vulnerabilities.

* Cross-Site Scripting- XSS ([Cross-Site Scripting](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)) is a security vulnerability that can occur in web applications. It allows an attacker to inject malicious code into a web page, which is then executed in the browser of a user who visits the page. JavaScript is commonly used to carry out XSS attacks because it can be easily injected into a web page and executed in the user's browser.

To prevent the above security vulnerabilities, syncfusion controls focused on this type of vulnerabilities and considered the security features.

## Security Considerations

Security is a critical aspect of software development, and considering security from the beginning of the development process is essential to secure applications. Here are some key security considerations for Syncfusion Javascript controls.

* Content Security Policy
* HTML Sanitizer
* Function Template

### Content Security Policy

[Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) (CSP) is a one of the security feature, that helps the detect the cross-site-scripting(XSS) attacks and malicious code injection. It will throw the errors and warnings while using the inline-styles and inline scripts, eval, new Function, etc in your applications.

If you want to utilize the CSP in your application, add a `<meta>` tag and add the CSP directives. Syncfusion Javascript controls are considered and implemented with CSP directives. These directives are below.

#### CSP Directives

|    Directives    |    Description    |    Examples    |
|------------------|-------------------|----------------|
|  `style-src`  | Defines the allowed sources for loading stylesheets. This helps mitigate style-based attacks by restricting the locations from which styles can be applied. | `style-src 'self' https://cdn.syncfusion.com/ https://fonts.googleapis.com/ 'unsafe-inline';`|
|  `font-src`  | Defines the allowed sources for loading fonts. It helps prevent font-related security issues by restricting the locations from which fonts can be loaded. | `font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data: cdn.syncfusion.com 'unsafe-inline';` |
|  `img-src`  | Specifies the allowed sources for loading images. It helps control from where images can be displayed on the web page. | `img-src 'self' data:"` |

> In CSP directives, there is no need to include `script-src` in the meta tag. If you are adding inline scripts, you can use this directive.

#### CSP Sources

|  Source  |  Description  | Examples  |
|----------|---------------|-----------|
|  `self`  |  Refers to the origin from which the protected document is being served, including the same URL scheme and port number  |  `style-src 'self'`  |
|  `data`  | Enables a website to fetch resources using the data scheme, such as loading Base64-encoded images.  |  `img-src 'self' data:`  |
|  `unsafe-inline`  | Allows the use of inline resources, such as inline `style` elements.  |  `style-src 'self' https://fonts.googleapis.com/ 'unsafe-inline'`  |

To know more information about the CSP, refer this [documentation](https://ej2.syncfusion.com/documentation/common/troubleshoot/content-security-policy).

### HTML Sanitizer

An HTML sanitizer is a tool or program that helps remove potentially malicious or harmful code from HTML documents. This type of sanitizer is commonly used in web applications to prevent cross-site scripting (XSS) attacks, which can inject malicious code into a website and compromise user data. HTML sanitizers typically work by analyzing HTML code and removing any potentially dangerous or unwanted elements, such as script tags, inline styles, or event handlers. They may also modify or clean up other aspects of the HTML, such as removing extra whitespace or fixing malformed code.

Several Syncfusion UI controls accept user input values in the form of HTML strings, to prevent the malicious code injection we have implemented the [enableHtmlSanitizer](https://ej2.syncfusion.com/javascript/documentation/api/button#enablehtmlsanitizer) API.

When this property is enabled, the HTML string undergoes a thorough sanitization process before being rendered in the component. This approach ensures that user inputs containing potential security threats are meticulously filtered, addressing the risk of XSS and contributing to the overall security robustness of our components in the face of potential attacks.

```ts
import { SanitizeHtmlHelper } from '@syncfusion/ej2-base';

let html: string = '<script>alert("XSS");</script>';

let sanitizedHtml: string = SanitizeHtmlHelper.sanitize(html);
```

### Function Template

Using Syncfusion Javascript UI Controls, users can customize and add the functionalities. To achieve this, Syncfusion provided the template support also. A template can contains a variety of elements, depending on the context in which it is being used. This template rendering also compatible with Content Security Policy. For more information, you can refer this [documentation](https://ej2.syncfusion.com/documentation/common/template#function-template).

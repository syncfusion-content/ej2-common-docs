---
layout: post
title: Security Vulnerabilities and Considerations in  ##Platform_Name## Common control | Syncfusion
description: Learn here all about Security Vulnerabilities and Considerations in Syncfusion  ##Platform_Name##  Common control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: common
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Security Vulnerabilities and Considerations

This document outlines critical security enhancements and fixes introduced in the latest volume release of Syncfusion Essential JS2 controls. These updates are designed to address specific vulnerabilities and ensure the robust security of the components.

At Syncfusion, we prioritize the security of our controls to ensure a robust and trustworthy environment for our users. We have implemented comprehensive measures to mitigate potential security vulnerabilities, including but not limited to cross-site scripting and insecure dependencies.

## Static Code Analysis

To uphold stringent security standards, we employ [ESLint](https://eslint.org/) and [ESLint plugin](https://github.com/eslint-community/eslint-plugin-security) security tools for thorough static code analysis. These tools help us identify and address potential vulnerabilities in our codebase, ensuring that our software is resilient to security threats.

## Software Composition Analysis

In addition to static code analysis, We have integrated the [SOOS](https://soos.io/) security tool to identifying and managing any potential risks associated with third-party dependencies with our Sycnfusion packages.

## Security Considerations

Providing security considerations for our controls is a crucial aspect of ensuring the resilience and integrity of our software. Two key measures have been implemented to mitigate potential vulnerabilities:

1.	Content Security Policy
2.	HTML Sanitizer

### Content Security Policy

Syncfusion empowers the integration of Content Security Policy (CSP) as a pivotal security feature within our controls.This strong security feature helps protect against dangers like cross-site scripting (XSS) and data injection attacks. It limits the sources from which content can be loaded on a web page. Below are some common CSP directives:

#### CSP Directives

|    Directives    |    Description    |    Examples    |
|------------------|-------------------|----------------|
|  `default-src`   | This directive sets the default source for content that is not explicitly specified by other directives. It applies to all content types, such as scripts, styles, images, etc. | `default-src 'self' cdn.syncfusion.com;`|
|  `style-src`  | Defines the allowed sources for loading stylesheets. This helps mitigate style-based attacks by restricting the locations from which styles can be applied. | `style-src 'self' https://cdn.syncfusion.com/ https://fonts.googleapis.com/ 'unsafe-inline';`|
|  `font-src`  | Defines the allowed sources for loading fonts. It helps prevent font-related security issues by restricting the locations from which fonts can be loaded. | `font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data: cdn.syncfusion.com 'unsafe-inline';` |
|  `img-src`  | Specifies the allowed sources for loading images. It helps control from where images can be displayed on the web page. | `img-src 'self' data:"` |

To know more information, refer to the [CSP documentation](https://ej2.syncfusion.com/documentation/common/troubleshoot/content-security-policy).

### HTML Sanitizer

HTML sanitization is a crucial security measure employed to mitigate the risk of security vulnerabilities, particularly Cross-Site Scripting (XSS). This type of attack involves malicious code injection, typically in JavaScript but also potentially in HTML or CSS, within a web application. Recognizing that certain Syncfusion components accept user input values in the form of HTML strings, we have implemented a proactive solution. The [enableHtmlSanitizer](https://ej2.syncfusion.com/documentation/api/button#enablehtmlsanitizer) API is introduced for this purpose. When this property is enabled, the HTML string undergoes a thorough sanitization process before being rendered in the component. This approach ensures that user inputs containing potential security threats are meticulously filtered, addressing the risk of XSS and contributing to the overall security robustness of our components in the face of potential attacks.

```ts
import { SanitizeHtmlHelper } from '@syncfusion/ej2-base';

let html: string = '<script>alert("XSS");</script>';

let sanitizedHtml: string = SanitizeHtmlHelper.sanitize(html);
```

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

This document provides a description of the security updates available for Syncfusion Essential JS2 controls for volume release.

At Syncfusion, we prioritize the security of our controls to ensure a robust and trustworthy environment for our users. We have implemented comprehensive measures to mitigate potential security vulnerabilities, including but not limited to cross-site scripting and insecure dependencies.

## Static Code Analysis

To uphold stringent security standards, we employ [ESLint](https://eslint.org/) and [ESLint plugin](https://github.com/eslint-community/eslint-plugin-security#rules) security tools for thorough static code analysis. These tools help us identify and address potential vulnerabilities in our codebase, ensuring that our software is resilient to security threats. Beyond identifying syntax errors, ESLint and its security plugins delve deeper into code patterns and structures, exposing potential vulnerabilities like insecure data handling, suspicious function calls, and injection risks. They also enforce best practices for secure coding, such as avoiding unsafe globals and minimizing external dependencies.

## Software Composition Analysis

In our commitment to proactive security measures, we leverage [SOOS](https://soos.io/), a robust Software Composition Analysis (SCA) tool that extends beyond conventional vulnerability detection in third-party dependencies. SOOS provides invaluable insights into the broader open-source ecosystem surrounding our software, enabling us to make informed decisions about the sustainability and maintenance of our dependencies. Notably, it offers guidance on best practices for dependency management, suggesting secure alternatives or options when vulnerabilities are identified. Furthermore, SOOS facilitates the creation of a comprehensive inventory of our project's dependencies, aiding in regulatory compliance and providing transparency to stakeholders. Its seamless integration with popular package managers and version control systems streamlines the analysis process, allowing developers to effortlessly incorporate security checks into their daily workflows. The tool's continuous monitoring capabilities ensure that our software remains resilient to emerging threats, reinforcing a proactive and adaptive security posture. With SOOS, our approach goes beyond mere vulnerability remediation, encompassing the holistic management and sustainability of our software supply chain.

## Security Considerations

Providing security considerations for our controls is a crucial aspect of ensuring the resilience and integrity of our software. Two key measures have been implemented to mitigate potential vulnerabilities:

1.	Content Security Policy
2.	HTML Sanitizer

### Content Security Policy

Content Security Policy (CSP) stands as a crucial security standard, offering a robust defense against diverse cyber threats, notably Cross-Site Scripting (XSS). This standard empowers web developers to explicitly declare trusted sources of content for a specific web page, enhancing the control and security posture of web applications. Implemented through a set of directives, CSP establishes rules governing the loading of resources and execution of scripts within a web page. By defining these rules, CSP acts as a proactive safeguard, significantly reducing the risk of malicious code injection and unauthorized content loading. The adoption of CSP contributes to a more secure online environment by providing a systematic and configurable framework to mitigate potential vulnerabilities associated with web-based attacks. Below are some common CSP directives:

#### CSP Directives

|    Directives    |    Description    |    Examples    |
|------------------|-------------------|----------------|
|  `default-src`   | This directive sets the default source for content that is not explicitly specified by other directives. It applies to all content types, such as scripts, styles, images, etc. | `default-src 'self' cdn.syncfusion.com;`|
|  `script-src`  | Specifies the allowed sources for JavaScript. This directive helps prevent XSS attacks by defining from where the browser is allowed to execute script code. | `script-src 'self' https://cdn.syncfusion.com/;`|
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

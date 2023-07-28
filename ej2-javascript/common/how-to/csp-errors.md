---
layout: post
title: How to resolve the Content Security Policy in  ##Platform_Name## Common control | Syncfusion
description: Learn here all about Content Security Policy in Syncfusion  ##Platform_Name##  Common control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: common
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to resolve Content Security Policy (CSP) errors

Enabling the strict Content Security Policy (CSP) may cause the following issues with the Essential JS 2 controls in your application.

## Template rendering

> From the 2023 Vol2 - 22.1 release onwards, the Content Security Policy for Syncfusion controls has been enhanced. The usage of the `unsafe-eval` directive has been eliminated from the CSP meta tag.

In your application, utilizes string or external templates, it is advisable to rewrite them using the [function template](https://ej2.syncfusion.com/javascript/documentation/common/template#function-template) approach for template properties.

N> If users prefer to continue using inline string and external templates, it is necessary to include the `unsafe-eval` directive in the CSP meta tag in order to bypass the CSP violation.

## Image loading

Syncfusion license banner utilize the image from **base64**, which is not allowed on strict CSP-enabled sites. To overcome this restriction, it is necessary to add the [`img-src data:`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) directive in the meta tag or consider [registering the license key](https://ej2.syncfusion.com/javascript/documentation/licensing/license-key-registration).

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

# Syncfusion JavaScript - Security Considerations

Security is a critical aspect of web applications to protect them from various threats and vulnerabilities. Using HTTPS to encrypt data, checking and cleaning user inputs, and setting up robust authentication methods like multi-factor authentication are essential steps.

Syncfusion JavaScript controls are implemented with these security considerations.

## Security Vulnerabilities

Security vulnerabilities in web applications refer to weaknesses or flaws in the design, implementation, or configuration of a web application that can be exploited by attackers to compromise the application's integrity, confidentiality, or availability. Here we can see some of the vulnerabilities.

* Cross-Site Scripting- XSS ([Cross-Site Scripting](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)) is a security vulnerability that can occur in web applications. It allows an attacker to inject malicious code into a web page, which is then executed in the browser of a user who visits the page. JavaScript is commonly used to carry out XSS attacks because it can be easily injected into a web page and executed in the user's browser.

To implement the web application with secured aspects, Syncfusion JavaScript controls are supported.

## Security Considerations

Security is a critical aspect of software development, and considering security from the beginning of the development process is essential to secure applications. Here are some key security considerations for Syncfusion JavaScript controls.

* Content Security Policy
* HTML Sanitizer
* Function Template
* Browser Storage

### Content Security Policy

[Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) (CSP) is a one of the security feature, that helps the detect the cross-site-scripting(XSS) attacks and malicious code injection. It will throw the errors and warnings while using the inline-styles and inline scripts, eval, new Function, etc in your applications.

To implement Content Security Policy (CSP) in your application, include a `<meta>` tag with specified CSP directives. Syncfusion JavaScript controls have been designed and implemented with adherence to these CSP directives, ensuring enhanced security. These directives are below.

#### CSP Directives

|    Directives    |    Description    |    Examples    |
|------------------|-------------------|----------------|
|  `style-src`  | Defines the allowed sources for loading stylesheets. This helps mitigate style-based attacks by restricting the locations from which styles can be applied. | `style-src 'self' https://cdn.syncfusion.com/ https://fonts.googleapis.com/ 'unsafe-inline';`|
|  `font-src`  | Defines the allowed sources for loading fonts. It helps prevent font-related security issues by restricting the locations from which fonts can be loaded. | `font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ data: cdn.syncfusion.com 'unsafe-inline';` |
|  `img-src`  | Specifies the allowed sources for loading images. It helps control from where images can be displayed on the web page. | `img-src 'self' data:"` |

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

Some Syncfusion JavaScript controls are utilize the sanitizer property. These controls are below.

<style>
# table
{
border:0 !important;
line-height: 2!important;
}

tr
{
border:0 !important;
}

td
{
border:0 !important;
vertical-align: top;
}

.controlanchorlink
{
text-decoration: none !important;
font-size: 14px !important;
text-align: left !important;
padding: 5px 0px;
letter-spacing: 1px;
}
.controlcategory
{
font-size: 14px !important;
text-align: left !important;
font-weight: bold !important;
letter-spacing: 0.7px;
}

</style>

<table id="table" style="border: 0px;">
<tbody>
<colgroup>
<col style="width: 25%">
<col style="width: 25%">
<col style="width: 25%">
<col style="width: 25%">
</colgroup>
</tbody>
<tr>
  <td>
      <div><p class="controlcategory">Controls</p></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/accordion#enablehtmlsanitizer">Accordion</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/button#enablehtmlsanitizer">Button</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/check-box/checkBoxModel/#enablehtmlsanitizer">CheckBox</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/context-menu#enablehtmlsanitizer">ContextMenu</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/dashboard-layout#enablehtmlsanitizer">Dashboard</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/dialog#enablehtmlsanitizer">Dialog</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/drop-down-button#enablehtmlsanitizer">DropDown Button</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/drop-down-tree#enablehtmlsanitizer">DropDown Tree</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/floating-action-button#enablehtmlsanitizer">Floating Action Button</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/file-manager#enablehtmlsanitizer">File Manager</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/gantt#enablehtmlsanitizer">Gantt</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/grid/#enablehtmlsanitizer">Grid</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/kanban#enablehtmlsanitizer">Kanban</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/list-view#enablehtmlsanitizer">List View</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/menu#enablehtmlsanitizer">Menu</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/multi-select#enablehtmlsanitizer">MultiSelect</a></div>
  </td>
  <td>
      <div><p class="controlcategory">Controls</p></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/pivotfieldlist#enablehtmlsanitizer">Pivotfield</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/pivotview#enablehtmlsanitizer">PivotView</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/progress-button#enablehtmlsanitizer">Progress Button</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/radio-button#enablehtmlsanitizer">Radio Button</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/rich-text-editor/miscellaneous#custom-cross-site-scripting">RichTextEditor</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/schedule/#enablehtmlsanitizer">Schedule</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/slider#enablehtmlsanitizer">Slider</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/split-button#enablehtmlsanitizer">Split Button</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/splitter#enablehtmlsanitizer">Splitter</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/tab#enablehtmlsanitizer">Tab</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/toast#enablehtmlsanitizer">Toast</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/tooltip#enablehtmlsanitizer">Tooltip</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/toolbar#enablehtmlsanitizer">Toolbar</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/treegrid#enablehtmlsanitizer">TreeGrid</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/treeview#enablehtmlsanitizer">Treeview</a></div>
      <div class="controlanchorlink"><a target="_blank" href="https://ej2.syncfusion.com/documentation/api/uploader#enablehtmlsanitizer">Uploader</a></div>
  </td>
</tr>
</table>
To sanitize input values in a web application using Syncfusion sanitizer, you can use the following code.

```ts
import { SanitizeHtmlHelper } from '@syncfusion/ej2-base';

let html: string = '<script>alert("XSS");</script>';

let sanitizedHtml: string = SanitizeHtmlHelper.sanitize(html);
```

To sanitize the template content with Syncfusion JavaScript controls, please refer the below code.

```ts
import { Dialog } from '@syncfusion/ej2-popups'; 
import { Button } from '@syncfusion/ej2-buttons'; 
import { SanitizeHtmlHelper } from '@syncfusion/ej2-base'; 

let dialog: Dialog = new Dialog({ 
  header: SanitizeHtmlHelper.sanitize( 
    headerimg + 
      '<div id="dlg-template" title="Nancy" class="e-icon-settings"> Nancy </div><div onmousemove=function(){alert("XSS")}>XSS</div>') 
  }); 
```
When `enableHtmlSanitizer` is `true`, the content will be sanitized and displays the code.

![With sanitizer property](images/with-sanitizer-property.png)

When `enableHtmlSanitizer` is `false` or not included this property, the malicious code will be interpreted as script, and the alert pop-up window will be open.

![Without sanitizer property](images/without-sanitizer-property.png)

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/common/draggable-default-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/draggable-default-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/draggable-default-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/common/draggable-default-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/draggable-default-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/draggable-default-cs1" %}
{% endif %}

### Function Template

 Users can customize the control's appearance and functionality to suit their application's specific needs through template support. Syncfusion function template support also compatible with Content Security Policy. For more information, you can refer this [documentation](https://ej2.syncfusion.com/documentation/common/template#function-template).

### Browser Storage
Browser storage refers to the mechanisms provided by web browsers to store data locally on a user's device. There are mainly two types of browser storage options available to web developers.

* Cookies 
* Local Storage

#### Cookies

[Cookies](https://www.cloudflare.com/en-gb/learning/privacy/what-are-cookies/) are small pieces of data stored on a user's device by the web browser while browsing a website. They are commonly used in web applications for various purposes, such as session management, user authentication, and tracking user behavior.

Syncfusion JavaScript controls do not utilize any cookies to store data.

#### Local Storage

[Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) is a type of web storage mechanism provided by web browsers that allows web applications to store data locally on a user's device. It provides a simple key-value pair storage interface and is accessible via JavaScript.

Syncfusion JavaScript controls utilize local storage only when persistence is enabled.

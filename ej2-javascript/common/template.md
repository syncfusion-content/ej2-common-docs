---
layout: post
title: Template in  ##Platform_Name## Common control | Syncfusion
description: Learn here all about Template in Syncfusion  ##Platform_Name##  Common control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: common
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Template in Syncfusion ##Platform_Name## controls

Syncfusion JavaScript controls are rendered with a pre-defined layout or structure that is used to define how the control should be rendered on the user interface. The user wants to customise the appearance of the control and add functionality that is specific to the needs of the application. Syncfusion JavaScript controls have the option to achieve this using template support. A template can contain a variety of elements, depending on the context in which it is being used.

## Types of templates

Syncfusion JavaScript controls have two types of templates, such as:

* [String template](#String-template)
* [Script template](#Script-template)

## String template

Users can add templates to Syncfusion JavaScript controls by using `string literals` and JavaScript expressions. Using this approach, the template string is passed to the library's template engine, which parses the string and generates the corresponding HTML elements along with the data bindings.

The template string can be added directly to the `template` property of the control. Refer to the following code snippet.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/common/string-template/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/string-template/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/string-template" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/common/string-template/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/string-template/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/string-template" %}
{% endif %}

## Script template

A script template is a type of template that uses a scripting language, such as JavaScript, to define the structure and layout of the content that is displayed in the control. These template elements can be defined in the `script` tag along with the unique identifier. The script template's identifier needs to be mapped to the corresponding control's template property along with the fragment identifier (#). Refer to the below code sample.

Add the below HTML template to the `index.html` file.

```html
<script id="customTemplate" type="text/x-template">
  <b class="template">${ShipCountry}</b>
</script>
```

Here, the script template identifier (customTemplate) is assigned to the `template` property of the Grid control. Refer to the following code snippet.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/common/script-template/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/script-template/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/script-template" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/common/script-template/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/script-template/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/script-template" %}
{% endif %}
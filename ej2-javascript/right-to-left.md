---
layout: post
title: Right to left in ##Platform_Name## Right to left md control | Syncfusion
description: Learn here all about Right to left in Syncfusion ##Platform_Name## Right to left md control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Right to left 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Right-To-Left support in Syncfusion JavaScript Controls

Right To Left (RTL) can be enabled for Syncfusion JavaScript UI controls by calling [`enableRtl`](./api/base/staticFunctions#enablertl) with
`true`. This will render all the Syncfusion JavaScript controls in right to left direction. Find the code snippet
for this below.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/common/right-to-left-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/right-to-left-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/right-to-left-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/common/right-to-left-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/right-to-left-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/right-to-left-cs2" %}
{% endif %}

## Enable RTL to individual control

To enable the RTL to an individual control, set the [`enableRtl`](./api/base/component#enablertl) property directly in its model options. For illustration, the [`enableRtl`](./api/base/component#enablertl) is added to the ListView control in following code snippet.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/common/individual-rtl-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/individual-rtl-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/individual-rtl-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/common/individual-rtl-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/individual-rtl-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/individual-rtl-cs2" %}
{% endif %}
---
layout: post
title: Size modes in ##Platform_Name## Appearance control | Syncfusion
description: Learn here all about Size modes in Syncfusion ##Platform_Name## Appearance control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Size modes 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Size modes Size Mode for Syncfusion ##Platform_Name## Controls

An application that is designed to be accessed through a web browser on various devices, including desktop computers and mobile devices, may have a distinct layout or user interface on a mobile device compared to a desktop computer to better suit the smaller screen size.

Syncfusion JavaScript controls support both touch (bigger) and normal size modes. Touch mode creates a responsive design for mobile devices by adding the `e-bigger` class, which enhances interactions, visibility, and the overall experience.

## Size mode for application

The user can enable touch mode (bigger) for the entire application by adding the `e-bigger` class to the `body` element in the `index.html` file as follows:

  ```
  <body className="e-bigger">
    ...
  </body>
  ```

## Size mode for a control

The user can enable touch mode (bigger) for a control by adding the `e-bigger` class to the `div` element that contains the control. Another way of enabling touch mode is by adding the `e-bigger` class using the available `cssClass` property of the control.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/common/size-mode-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/size-mode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/size-mode-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/common/size-mode-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/size-mode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/size-mode-cs1" %}
{% endif %}

## Change size mode for application at runtime

The user can change the size mode of the application between touch and normal (mouse) mode at runtime by adding and removing the `e-bigger` class. The following steps explain how to change the size mode of an application at runtime:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/common/size-mode-app-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/size-mode-app-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/size-mode-app-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/common/size-mode-app-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/size-mode-app-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/size-mode-app-cs1" %}
{% endif %}

## Change size mode for a control at runtime

The user can change the size mode of a control between touch and normal (mouse) mode at runtime by setting the `e-bigger` CSS class.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/common/size-mode-app-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/size-mode-app-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/size-mode-app-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/common/size-mode-app-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/size-mode-app-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/size-mode-app-cs2" %}
{% endif %}

## See also

* [Sidebar responsiveness](https://ej2.syncfusion.com/documentation/sidebar/auto-close/)
* [DataGrid responsiveness](https://ej2.syncfusion.com/documentation/grid/columns/responsive-columns/)
* [TreeGrid responsiveness](https://ej2.syncfusion.com/documentation/treegrid/scrolling/#responsive-with-parent-container)
* [Dashboard Layout responsiveness](https://ej2.syncfusion.com/documentation/dashboard-layout/responsive-adaptive/)
* [Kanban responsiveness](https://ej2.syncfusion.com/documentation/kanban/responsive-mode/)
* [Toolbar responsiveness](https://ej2.syncfusion.com/documentation/toolbar/responsive-mode/)
* [Tab responsiveness](https://ej2.syncfusion.com/documentation/tab/adaptive/)
---
layout: post
title: Drag and drop in  ##Platform_Name## Common control | Syncfusion
description: Learn here all about Drag and drop in Syncfusion  ##Platform_Name##  Common control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: common
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop in ##Platform_Name##

Drag and drop is a feature of a user interface that allows users to select an item or items and then move them to a different location or onto another interface element by "dragging" the selected item(s) with a pointing device (such as a mouse) and then "dropping" them at the desired location.

Syncfusion JavaScript controls support drag and drop feature through two libraries. These are [Draggable](https://ej2.syncfusion.com/documentation/api/base/draggable/) and [`Droppable`](https://ej2.syncfusion.com/documentation/api/base/droppable/).

## Draggable

The Syncfusion's [`Draggable`](https://ej2.syncfusion.com/documentation/api/base/draggable) library allows users to make any DOM element draggable by passing it as a parameter to the `Draggable` constructor. This can be useful for creating interactive and user-friendly interfaces, such as allowing a user to reorder items in a list by dragging them. The below code snippet enables the draggable functionality for the specific DOM element passed to the `Draggable` constructor.

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

### Clone draggable element

Syncfusion provides the option to create a clone of a draggable element while the user is dragging it. It can be achieved by setting the [clone](https://ej2.syncfusion.com/documentation/api/base/draggable/#clone) property to `true`. Here's an example of how to create a clone of a draggable element.

 {% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/common/draggable-default-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/draggable-default-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/draggable-default-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/common/draggable-default-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/draggable-default-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/draggable-default-cs2" %}
{% endif %}

### Drag area

A drag area is a specific area within a user interface that is designated for drag and drop operations. When an object or element is dragged within a drag area, certain actions or events may be triggered. The user can specify the drag area by using the [dragArea](https://ej2.syncfusion.com/documentation/api/base/draggable/#dragarea) property. Refer to the below sample.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/common/drag-drop-action-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/drag-drop-action-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/drag-drop-action-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/common/drag-drop-action-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/drag-drop-action-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/drag-drop-action-cs1" %}
{% endif %}

## Droppable

Droppable element refers to an area of a user interface that can receive a draggable element that is being moved by a user. Syncfusion's [`Droppable`](https://ej2.syncfusion.com/documentation/api/base/droppable) library converts any DOM element into a droppable zone, which accepts draggable elements.

When a draggable element is moved over a droppable element, the [drop](https://ej2.syncfusion.com/documentation/api/base/droppable/#events) event can be triggered. The user can get details about the dropped element through the event argument. Based on the event argument, the user can append the dragged element to the target element.

Refer to the following code snippet to enable droppable zones.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/common/drag-drop-action-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/drag-drop-action-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/drag-drop-action-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/common/drag-drop-action-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/drag-drop-action-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/drag-drop-action-cs2" %}
{% endif %}

## See also

* [Define handle element for draggable](../api/base/draggable#handle)
* [Restricting draggable within container](../api/base/draggable#dragarea)
* [Visual feedback of draggable element](../api/base/draggable#clone)
* [Accepting specific drag element in droppable](../api/base/droppable#accept)

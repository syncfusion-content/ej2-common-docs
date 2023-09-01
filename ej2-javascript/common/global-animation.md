---
layout: post
title: Animation in ##Platform_Name##  Common control | Syncfusion
description: Checkout and learn here all about enable or disable animation globally for Syncfusion ##Platform_Name## common controls.
platform: ej2-javascript
component: Common
documentation: ug
---

# Animation in Syncfusion ##Platform_Name## common controls

This section provides information about the animation process and how to enable or disable it globally for Syncfusion EJ2 common controls.

## Enable or disable animation globally

You can enable or disable animation for all EJ2 common controls globally by setting the `setGlobalAnimation` function with one of below options:

* `GlobalAnimationMode.Enable` - Enables the animation for all controls, regardless of the individual component's animation settings.
* `GlobalAnimationMode.Disable` - Disables the animation for all controls, regardless of the individual component's animation settings.
* `GlobalAnimationMode.Default` - Animation is enabled or disabled based on the component's animation settings.

In the below code example animation is disabled.


{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import { GlobalAnimationMode, setGlobalAnimation } from "@syncfusion/ej2-base";

setGlobalAnimation(GlobalAnimationMode.Disable);
// or
setGlobalAnimation('Disable');

{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { GlobalAnimationMode, setGlobalAnimation } from "@syncfusion/ej2-base";

setGlobalAnimation(GlobalAnimationMode.Disable);
// or
setGlobalAnimation('Disable');

{% endhighlight %}
{% endtabs %}
{% endif %}

> `setGlobalAnimation` function controls script-level animations only, and it is not applicable for direct CSS-level animations (Animation defined from CSS classes or properties).
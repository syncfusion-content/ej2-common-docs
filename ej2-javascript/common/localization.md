---
layout: post
title: Localization in  ##Platform_Name## Common control | Syncfusion
description: Learn here all about Localization in Syncfusion  ##Platform_Name##  Common control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: common
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Localization

Localization library allows you to localize the text content of the Syncfusion React UI Components. This is useful if you want to display the UI in a language other than English.

## Loading translations

To load a translation object in your application, you can use the load function from the @syncfusion/ej2-base module. This function takes an object that contains the translations for various languages, with the keys being the language codes and the values being the translation objects.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/common/locale-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/locale-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/locale-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/common/locale-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/locale-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/locale-cs1" %}
{% endif %}

## Changing current locale

The current locale can be changed for all the Syncfusion React UI Components in your application by invoking `setCulture` function with your desired culture name.

```ts
import {L10n, setCulture} from '@syncfusion/ej2-base';
L10n.load({
    'fr-BE': {
       'Button': {
             'id': 'Numéro de commande',
             'date':'Date de commande'
         }
     }
});
setCulture('fr-BE');
```

>Note: Before changing a culture globally, you need to ensure that locale text for the concerned culture is loaded through `L10n.load` function.

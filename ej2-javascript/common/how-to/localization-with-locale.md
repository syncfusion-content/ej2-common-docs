---
layout: post
title: Localization with locale in  ##Platform_Name## Common control | Syncfusion
description: Learn here all about Localization with locale in Syncfusion  ##Platform_Name##  Common control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: common
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to load the culture file in Essential JS 2

In Essential JS 2, the culture file can be loaded by using the loadCldr function. The culture file contains information about the specific culture, such as date and time formats, currency symbols, and translations for UI elements.

## Installing the CLDR JSON Files

To use the loadCldr function, you first need to install the CLDR JSON files from the npm package. You can do this by running the following command.

```
npm install cldr-data
```

## Loading the culture

To load the culture file in your application, you need to import the required locale and supplemental files from the `cldr` package. For example, to load the German culture, you would import the following files.

```
import * as n1 from  '../../node_modules/cldr-data/main/de/currencies.json'
import * as n2 from '../../node_modules/cldr-data/main/de/timeZoneNames.json';
import * as n3 from '../../node_modules/cldr-data/main/de/numbers.json';
import * as n4 from '../../node_modules/cldr-data/main/de/ca-gregorian.json';
import * as s from '../../node_modules/cldr-data/supplemental/currencyData.json';
import * as s2 from '../../node_modules/cldr-data/supplemental/numberingSystems.json';
```

## Loading translations

To load the translation object in the application, use the `load` function of the L10n class. For example, the following code loads a German translation for the word "today" in the calendar component.

```
L10n.load({
    'de': {
        'calendar': { today: 'heute' }
    }
});
```

## Using the loadCldr function

Once you have imported the necessary culture files, you can use the loadCldr function to load them in your application. You also need to pass the culture code in the setCulture function.

```
import { Calendar } from '@syncfusion/ej2-calendars';
import { Tab } from '@syncfusion/ej2-navigations';
import {L10n, setCulture, loadCldr} from '@syncfusion/ej2-base';
import * as n1 from  '../../node_modules/cldr-data/main/de/currencies.json'
import * as n2 from '../../node_modules/cldr-data/main/de/timeZoneNames.json';
import * as n3 from '../../node_modules/cldr-data/main/de/numbers.json';
import * as n4 from '../../node_modules/cldr-data/main/de/ca-gregorian.json';
import * as s from '../../node_modules/cldr-data/supplemental/currencyData.json';
import * as s2 from '../../node_modules/cldr-data/supplemental/numberingSystems.json';
L10n.load({
    'de': {
        'calendar': { today: 'heute' }
    }
});
//Initialize calendar component.
let calendarObject: Calendar = new Calendar();
//Render initialized calendar.
calendarObject.appendTo('#element');
loadCldr(n1, n2, n3, n4, s, s2);
setCulture('de');
 ```

All components’ localized texts are provided in the ej2-locale [`GitHub`](https://github.com/syncfusion/ej2-locale) repository. Also find the example sample from this [`link`](http://www.syncfusion.com/downloads/support/directtrac/general/ze/localization-1218148352.zip).
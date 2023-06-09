---
layout: post
title: Quick start with ##Platform_Name## Getting started control | Syncfusion
description:  Checkout and learn about Quick start with ##Platform_Name## Getting started control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Quick start 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion JavaScript (ES5) UI control in a quickstart application

This section provides a step-by-step guide to configuring the Syncfusion JavaScript (ES5) UI control (Essential JS 2) and building a simple HTML web application.

## Prerequisites

To get started, ensure the following software to be installed in the machine.

* [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2)

* [Visual Studio Code](https://code.visualstudio.com/)

> Check out the [download and installation](https://ej2.syncfusion.com/javascript/documentation/installation-and-upgrade/download/) section of `Essential Studio JavaScript`. If you are using Syncfusion CDN resources to build your web application, you can skip the Essential Studio JavaScript prerequisite.

## Set up development environment

* Create a folder named `~/quickstart` from the required directory and open it in Visual Studio Code.

* Create an HTML file `~/quickstart/index.html` to add the Syncfusion JavaScript (ES5) control's resources.

## Add Syncfusion resources

You can access Syncfusion control resources using either of the following methods:

* [Using local scripts and styles](#using-local-scripts-and-styles)

* [Using CDN link for scripts and styles](#using-cdn-link-for-scripts-and-styles)

> Syncfusion JavaScript controls have dependencies on other Syncfusion controls, so you must add these dependent control resources to use all their functionality. These dependencies are listed in the corresponding control's getting started documentation. For example, you can find the dependencies for the Grid control [here](https://ej2.syncfusion.com/javascript/documentation/grid/getting-started/#dependencies).

### Using local scripts and styles

* After installing the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build, it contains the scripts and styles reference for each individual package and all control resources in a single script and style file. In this getting started, simple Grid control is used as an example.

* Create a folder named `~/quickstart/resources`. Inside that folder, create the `base/styles/`, `popups/styles/`, `grids/styles/` and `scripts` folders. Then, copy/paste the individual scripts and styles from the below installed location to the corresponding `~/quickstart/resources/` location.

    **Individual control resources:**
    >Dependency script:
    >
    >`**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{DEPENDENCY_PACKAGE_NAME}\dist\global\{DEPENDENCY_PACKAGE_NAME}.min.js`
    >
    >Control script:
    >
    >`**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\dist\global\{PACKAGE_NAME}.min.js`
    >
    >**Example:**
    >
    >Grid's control script:
    >
    >`C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.4.0.38\Web (Essential JS 2)\JavaScript\ej2-grids\dist\global\ej2-grids.min.js`
    >
    >Grid's dependency scripts:
    >
    >`C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.4.0.38\Web (Essential JS 2)\JavaScript\ej2-base\dist\global\ej2-base.min.js`
    >
    >`C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.4.0.38\Web (Essential JS 2)\JavaScript\ej2-data\dist\global\ej2-data.min.js`
    >
    >`C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.4.0.38\Web (Essential JS 2)\JavaScript\ej2-popups\dist\global\ej2-popups.min.js`

    >Dependency style:
    >
    >`**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{DEPENDENCY_PACKAGE_NAME}\styles\material.css`
    >
    >Control style:
    >
    >`**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\styles\material.css`
    >
    >**Example:**
    >
    >Grid's control Style:
    >
    >`C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.4.0.38\Web (Essential JS 2)\JavaScript\ej2-grids\styles\material.css`
    >
    >Grid's dependency styles:
    >
    >`C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.4.0.38\Web (Essential JS 2)\JavaScript\ej2-base\styles\material.css`
    >
    >`C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.4.0.38\Web (Essential JS 2)\JavaScript\ej2-popups\styles\material.css`

    You can also refer to a single script and style file that contains all Syncfusion JavaScript control resources from the following location.

    **Single script and style reference for all controls:**

    > Script reference for all controls: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`
    >
    > Style reference for all controls: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\material.css`

    > Since this file includes all Syncfusion controls, it may impact the website's loading time. To reduce the size of the single file, you can generate custom scripts and styles for a set of specific Syncfusion JavaScript controls using the [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) tool. This tool is useful for combining the required control scripts and styles into a single file. To know more about the CRG, refer to this [documentation](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/).

* Once copy/paste the individual scripts and styles to the `~/quickstart/resources/` location. Add the required Grid control resources to the `~/quickstart/index.html` file in the following order.

 ```html
    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
            <title>Syncfusion JavaScript (ES5) UI Control</title>
            <!-- Essential JS 2 Grid's dependent material themes -->
            <link href="resources/base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/popups/styles/material.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 Grid's material theme -->
            <link href="resources/grids/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Grid's dependent scripts -->
            <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-data.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-popups.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 Grid's global script -->
            <script src="resources/scripts/ej2-grids.min.js" type="text/javascript"></script>
        </head>
        <body>
            ...
        </body>
      </html>
```

### Using CDN link for scripts and styles

* Syncfusion hosts every Syncfusion JavaScript (ES5) control as a separate package on CDN. This allows you to load the scripts and styles for each individual package. Syncfusion also provides a single package that includes all Syncfusion JavaScript (ES5) controls, allowing you to load the scripts and styles for all controls as a single script and style file. In this getting started, simple Grid control is used as an example. Refer to the following CDN scripts and styles link.

    **Individual control CDN reference**
    > Dependency script:
    >
    >`https://cdn.syncfusion.com/ej2/{DEPENDENCY_PACKAGE_NAME}/dist/global/{DEPENDENCY_PACKAGE_NAME}.min.js`
    >
    > Control script:
    >
    >`https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
    >
    >**Example:**
    >
    >Grid's control script:
    >
    >[http://cdn.syncfusion.com/ej2/ej2-grids/dist/global/ej2-grids.min.js](http://cdn.syncfusion.com/ej2/ej2-grids/dist/global/ej2-grids.min.js)
    >
    >Grid's dependency scripts:
    >
    >[https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js](https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js)
    > 
    >[http://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js](http://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js)
    >
    >[http://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js](http://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js)

    > Dependency styles:
    >
    >`https://cdn.syncfusion.com/ej2/{DEPENDENCY_PACKAGE_NAME}/styles/material.css`
    >
    > Control styles:
    >
    >`https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`
    >
    >**Example:**
    >
    >Grid's control style:
    >
    >[http://cdn.syncfusion.com/ej2/ej2-grids/styles/material.css](http://cdn.syncfusion.com/ej2/ej2-grids/styles/material.css)
    >
    >Grid's dependency styles:
    >
    >[https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css](https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css)
    > 
    >[https://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css](https://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css)

    You can also refer to a single script and style CDN link that contains all Syncfusion JavaScript control resources as follows:

    **Single script and style CDN reference for all controls:**

    > Script reference for all controls: [https://cdn.syncfusion.com/ej2/dist/ej2.min.js](https://cdn.syncfusion.com/ej2/dist/ej2.min.js)
    >
    > Style reference for all controls: [https://cdn.syncfusion.com/ej2/material.css](https://cdn.syncfusion.com/ej2/material.css)

    W> The un-versioned CDN links which always maintains latest version scripts are deprecated from 2022 Vol1 - 20.1 version. These links are available with 19.4 version scripts to avoid breaking in sites and apps that uses un-versioned links.

* Add the following Grid control CDN link references in the given order to the `~/quickstart/index.html` file.

```html
    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
            <title>Syncfusion JavaScript (ES5) UI Control</title>
            <!-- Essential JS 2 Grid's dependent material theme -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 Grid's material theme -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-grids/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Grid's dependent script -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
            <!-- Essential JS 2 Grid's global script -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-grids/dist/global/ej2-grids.min.js" type="text/javascript"></script>
        </head>
        <body>
            ...
        </body>
      </html>
```

## Add Syncfusion control to the application

Now, add the Grid element and `Syncfusion JavaScript (ES5) Grid` control in the `~/quickstart/index.html` file as follows.

```html
    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
            ...
        </head>
        <body>
        <h2>Syncfusion JavaScript (ES5) Grid Control</h2>
        <!-- Add the HTML <div> element for grid  -->
        <div id="Grid"></div>

        <script>
            //Grid data
            var data = [
                {
                    OrderID: 10248, CustomerID: 'VINET', Role: 'Admin', EmployeeID: 5, OrderDate: new Date(8364186e5),
                    ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
                    ShipRegion: 'CJ', Mask: '1111', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
                },
                {
                    OrderID: 10249, CustomerID: 'TOMSP', Role: 'Employee', EmployeeID: 6, OrderDate: new Date(836505e6),
                    ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
                    ShipRegion: 'CJ', Mask: '2222', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
                },
                {
                    OrderID: 10250, CustomerID: 'HANAR', Role: 'Admin', EmployeeID: 4, OrderDate: new Date(8367642e5),
                    ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
                    ShipRegion: 'RJ', Mask: '3333', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0
                },
                {
                    OrderID: 10251, CustomerID: 'VICTE', Role: 'Manager', EmployeeID: 3, OrderDate: new Date(8367642e5),
                    ShipName: 'Victuailles en stock', ShipCity: 'Lyon', ShipAddress: '2, rue du Commerce',
                    ShipRegion: 'CJ', Mask: '4444', ShipPostalCode: '69004', ShipCountry: 'France', Freight: 41.34, Verified: !0
                }
            ];

            // Initialize Essential JS 2 JavaScript Grid control
            var grid = new ej.grids.Grid({
                dataSource: data,
                columns: [
                    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
                    { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
                    { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
                    { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
                ]
            });

            // Render initialized Grid control
            grid.appendTo('#Grid');
        </script>
        </body>
    </html>
```

## Run the application

Open the `~/quickstart/index.html` file in the web browser and it will render the Syncfusion JavaScript (ES5) Grid control.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/getting-started-cs2" %}

To learn more about the functionality of the Grid control, refer to the [Grid control](https://ej2.syncfusion.com/javascript/documentation/grid/getting-started/) section.

> [View CDN link reference sample in github](https://github.com/SyncfusionExamples/ej2-quickstart/tree/master/CDN/quickstart)

> [View local script and style sample in github](https://github.com/SyncfusionExamples/ej2-quickstart/tree/master/local-resources/quickstart)

## See also

* [How to register Syncfusion license key in JavaScript(ES5) application](https://ej2.syncfusion.com/javascript/documentation/licensing/license-key-registration/)

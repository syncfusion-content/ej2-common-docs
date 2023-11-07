---
layout: post
title: Javascript getting started with Nue.js | Syncfusion
description: Check out and learn about how to use Syncfusion Javascript UI components in the Nue.js project.
control: Nue.js
platform: ej2-javascript
documentation: ug
domainurl: ##DomainURL##
---


# Creating a Nue.js Application Using Syncfusion Javascript Components

This section provides a step-by-step guide for setting up a Nue.js application and integrating the Syncfusion Javascript components.

## What is Nue.js?

[Nue.js](https://Nuejs.org/) is a lightweight JavaScript library used to create user interfaces. It's like "Just HTML" and suits UX developers focusing on interaction design, accessibility, and user experience, similar to React's "Just JavaScript" approach.

## Prerequisites

Before getting started with the Nue.js application, ensure the following prerequisites are met:

* [Node.js](https://nodejs.org/en)

* [Git](https://github.com/)

* [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=yaoyuanzhang.nue&ssr=false) Visual Studio users (optional)

## Setting up a NueJS Project using create-nue Repository

The create-nue repository provides a convenient way to start your Nue JS project, allowing you to quickly familiarize yourself with the framework. Follow these steps to set up your Nue JS project using the create-nue repository:

### Clone the Repository

Open your terminal or command prompt and enter the following command to clone the create-nue repository:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/nuejs/create-nue.git --depth 1 ej2-nue-grid

{% endhighlight %}

In the above command, `ej2-nue-grid` is the project name. You can replace it with any desired name for your project.

### Navigate to the project directory and Install dependencies

Navigate to the newly created directory with the "cd" command and then install dependencies using "npm install" as shown below:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-nue-grid
npm install

{% endhighlight %}
{% endtabs %}

> For additional information, refer to the [Nue.js](https://nuejs.org/docs/nuejs/getting-started.html) document.

## Include Syncfusion Javascript Components

In your NueJS project, components are defined in the `./src/components.nue` file. To include Syncfusion javascript components, create a component in this file using the `@name` attribute. In the example below, we demonstrate how to include the Syncfusion Javascript Grid component with the component name "ejs-grids".

{% tabs %}
{% highlight ts tabtitle="./src/components.nue" %}

<div @name="ejs-grids">
    <div id="Grid"></div>
</div>

{% endhighlight %}
{% endtabs %}

## Add Component scripts

In the `www/` folder location, you need to use your script files. Create a **www/index.js** file and add the following scripts:

{% tabs %}
{% highlight ts tabtitle="./www/index.js" %}

    var data = [{OrderID: 10248, CustomerID: 'VINET', Freight: 32.38, OrderDate: new Date(8364186e5)},
    {OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61, OrderDate: new Date(836505e6)},
    {OrderID: 10250, CustomerID: 'HANAR', Freight: 65.83, OrderDate: new Date(8367642e5)},
    {OrderID: 10251, CustomerID: 'VICTE', Freight: 41.34, OrderDate: new Date(8368506e5)},
    {OrderID: 10252, CustomerID: 'SUPRD', Freight: 51.3, OrderDate: new Date(8367642e5)}];

    ej.grids.Grid.Inject(ej.grids.Page);
    var grid = new ej.grids.Grid({
        dataSource: data,
        columns: [
            {field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number'},
            {field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string'},
            {field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C'},
            {field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd'}
        ],
        allowPaging: true,
        pageSettings: {pageSize: 2}
    });

    grid.appendTo('#Grid');

{% endhighlight %}
{% endtabs %}

## Define Component in Layout

In the `./src/layout.nue` file, specify the component you've defined in `components.nue` using the component name with the **<ejs-grids/>** tag. Also, add the links and scripts for this component to integrate the Syncfusion grid component into your project's layout, and include the `index.js` script file.
 
{% tabs %}
{% highlight ts tabtitle="./src/layout.nue" %}

<html>
  <meta charset="utf-8">
  <meta name="generator" content="Nue (nuejs.org)">
  <meta name="viewport" content="width=device-width">
  <link rel="shortcut icon" href="{ favicon }">
  <title>Grid</title>
  <!-- Essential JS 2 Grid's material theme and dependent script -->
  <link href="https://cdn.syncfusion.com/ej2/23.1.42/material.css" rel="stylesheet">
  <script src="http://cdn.syncfusion.com/ej2/23.1.42/dist/ej2.min.js" type="text/javascript"></script>
  <script type="module" src="index.js"></script>

  <!-- mention the component defined in the components.nue  -->
  <ejs-grids/>
  
  <script type="module" src="setup.js"></script>

</html>

{% endhighlight %}
{% endtabs %}

> To know more about built-in themes and CSS reference for individual components, refer to the [themes](https://ej2.syncfusion.com/javascript/documentation/appearance/theme/) section.

## Run the application

Once you've completed the setup and included the Syncfusion component in your project, you can start your NueJS project using the following command:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

npm run start

{% endhighlight %}

By default, your Nue.js application can be accessed at the following URL:

http://localhost:8080

To learn more about the functionality of the Grid component, refer to the [documentation](https://ej2.syncfusion.com/javascript/documentation/grid/getting-started#module-injection).
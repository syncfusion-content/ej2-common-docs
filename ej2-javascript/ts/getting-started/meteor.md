---
layout: post
title: Meteor with ##Platform_Name## Getting started control | Syncfusion
description:  Checkout and learn about Meteor with ##Platform_Name## Getting started control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Meteor 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion JavaScript (Essential JS 2) library and Meteor Framework

This article provides a step-by-step introduction to configure Syncfusion JavaScript (Essential JS 2) library and build it in the Meteor framework.

## What is Meteor?

[Meteor](https://www.meteor.com/) is a full-stack JavaScript framework for building web and mobile applications in a single codebase, with built-in real-time communication and database synchronization capabilities. It is designed to simplify the development process and increase productivity.

## Prerequisites

* [Node.js](https://nodejs.org/en/)
* [chocolatey](https://chocolatey.org/install)
* [Visual Studio Code](https://code.visualstudio.com/)

> Meteor supports Node.js versions from >= 10 and <= 14. So ensure that the mentioned node version installed on your system.

## Setup development environment

1.Open the command prompt from **administrator** mode, and install the `Meteor` using the following command line.

on Windows:

{% tabs %}
{% highlight ts tabtitle="CMD" %}

choco install meteor

{% endhighlight %}
{% endtabs %}

on OSX/LINUX:

{% tabs %}
{% highlight ts tabtitle="CMD" %}

curl https://install.meteor.com/ | sh

{% endhighlight %}
{% endtabs %}

    > Refer to [this documentation](https://www.meteor.com/install) for more information about installing `Meteor`.

2.Run the following command line to create a new project under `ej2-meteor` folder after installing `Meteor`.

{% tabs %}
{% highlight ts tabtitle="CMD" %}

meteor create ej2-meteor

{% endhighlight %}
{% endtabs %}

![ej2 meteor new project](images/meteor-new-app.png)

3.Now, navigate to the created project location `ej2-meteor`, and install the required default dependencies from the command prompt.

{% tabs %}
{% highlight ts tabtitle="CMD" %}

cd ej2-meteor
meteor npm install

{% endhighlight %}
{% endtabs %}

![ej2 meteor npm install](images/meteor-npm-install.png)

## Configure Essential JS 2 control in application

1.Install the [`@syncfusion/ej2`](https://www.npmjs.com/package/@syncfusion/ej2) npm package in the application using the following command line.

{% tabs %}
{% highlight ts tabtitle="CMD" %}

meteor npm install @syncfusion/ej2 --save

{% endhighlight %}
{% endtabs %}

![ej2 meteor npm ej2 install](images/meteor-ej2-install.png)

    For getting started, the Calendar control will be added in the new application.

2.Open the application in Visual Studio Code, and add the `<div>` element inside the `<body>` element in `~/client/main.html` file for rendering the Calender control.

{% tabs %}
{% highlight html tabtitle="~/client/main.html" %}

<head>
    <title>ej2-meteor</title>
</head>

<body>
    <h2>Essential JS 2 Calendar</h2>
    <!--HTML element which is going to render as Essential JS 2 Calendar control-->
    <div id="element"></div>
</body>

{% endhighlight %}
{% endtabs %}

3.Then, import the Syncfusion JavaScript styles, and render the Calender control inside the `Meteor.startup` method in `./client/main.jsx` file.

{% tabs %}
{% highlight jsx tabtitle="./client/main.jsx" %}

import { Meteor } from 'meteor/meteor';

// import Syncfusion Essential JS 2 styles from node_modules
import '../node_modules/@syncfusion/ej2/bootstrap5.css';

import { Calendar } from '@syncfusion/ej2-calendars';

Meteor.startup(() => {
    let calendarObject = new Calendar();
    // render initialized calendar
    calendarObject.appendTo('#element');
});

{% endhighlight %}
{% endtabs %}

4.Finally, run the following command line to run the Meteor application.

{% tabs %}
{% highlight ts tabtitle="CMD" %}

meteor

{% endhighlight %}
{% endtabs %}

    Open the localhost URL in the web brower.

![ej2 meteor build](images/meteor-build.png)

    The Calendar control will now be rendered in the browser.

![ej2 meteor calendar](images/meteor-calendar.png)

    > If you face any memory issue when running the above command line, increase the memory by adding `TOOL_NODE_FLAGS --max-old-space-size=4096` system environment variable. Refer to this [GitHub issue](https://github.com/meteor/meteor/issues/9568#issuecomment-359785483) for more information.

### Running on mobile emulator/simulator

Refer to this [tutorial](https://www.meteor.com/tutorials/blaze/running-on-mobile) for running the `Meteor` application in mobile emulator or simulator. Meteor on Windows does not support mobile builds, so this will not work on Windows.

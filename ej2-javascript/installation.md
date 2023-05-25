---
layout: post
title: Installation in ##Platform_Name## Installation md control | Syncfusion
description: Learn here all about Installation in Syncfusion ##Platform_Name## Installation md control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Installation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Installation

## Install by using npm CLI

Syncfusion JavaScript (Essential JS 2) packages are published in [npm](https://www.npmjs.com/search?q=scope:syncfusion). You can install the necessary packages from npm’s install command. For example, grid package can be installed using following command.

```
npm install @syncfusion/ej2-grids --save
```

## Install by using package.json

1. Add the Syncfusion JavaScript (Essential JS 2) package references in the `dependencies` of `~/package.json` file.

    ```
    {
        "dependencies": {
            "@syncfusion/ej2-grids": "*",
            "@syncfusion/ej2-charts": "*"
        }
    }
    ```
    > The `*` indicates the latest version of npm package. Refer the [documentation](https://docs.npmjs.com/misc/semver#versions) for more details about npm versioning.

2. Now, open the command prompt and run the `npm install` command line. This will install all npm dependencies in a single command line.

> Refer the [documentation](https://docs.npmjs.com/files/package.json) for more details about npm package.json
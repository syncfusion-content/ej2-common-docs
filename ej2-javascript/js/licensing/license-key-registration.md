---
layout: post
title: License key registration in ##Platform_Name## Licensing control | Syncfusion
description: Learn here all about License key registration in Syncfusion ##Platform_Name## Licensing control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: License key registration 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# License key registration in ##Platform_Name## Licensing control

Syncfusion license key should be registered, if your project using Syncfusion JavaScript (ES5) packages reference. The generated license key is a string that needs to be registered after any [Syncfusion JavaScript (ES5) reference](https://ej2.syncfusion.com/javascript/documentation/getting-started/angular-cli/#create-a-new-application).

>Note: Syncfusion license validation is done offline during application execution and does not require internet access. Apps registered with a Syncfusion license key can be deployed on any system that does not have an internet connection.

The following code is used to register the license.

## Javascript es5

Register the license key by using  'registerLicense' method after the [Syncfusion JavaScript script](https://ej2.syncfusion.com/javascript/documentation/getting-started/quick-start/#configure-syncfusion-javascript-es5-control-in-the-application-1) file reference as below.

>Note: As we have mandated License registration for the Syncfusion JavaScript components, we realize there is a possibility to view the registered Syncfusion License key from your application by others. We acknowledge this is taking place in the JavaScript platform, as we have minimal scope for hiding the License key and we also recommend not to advertise it.

```ts
// Registering Syncfusion license key
ej.base.registerLicense('License Key');
```

>Note: Only from 2022 Vol 1 v20.1.0.47, license key registration required for Essential JavaScript 2 products.

## See also

* [Licensing FAQ](https://ej2.syncfusion.com/javascript/documentation/licensing/licensing-troubleshoot/)



import { Internationalization } from '@syncfusion/ej2-base';

let intl: Internationalization = new Internationalization();
let nFormatter: Function = intl.getNumberFormat({ skeleton: 'C3', currency: 'USD',minimumIntegerDigits:8});
let formattedValue: string = nFormatter(1234545.65)
document.querySelector('.result').innerHTML = formattedValue;




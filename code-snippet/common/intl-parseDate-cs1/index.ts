


import {Internationalization} from '@syncfusion/ej2-base';

let intl: Internationalization = new Internationalization();
let dParser: Function = intl.getDateParser({skeleton: 'full', type: 'dateTime'});
let val: Date = dParser('Friday, November 4, 2016 at 1:03:04 PM GMT+05:30');
document.querySelector('.result').innerHTML = val.toString();




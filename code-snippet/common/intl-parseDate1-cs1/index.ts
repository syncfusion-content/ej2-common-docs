


import {Internationalization} from '@syncfusion/ej2-base';

let intl: Internationalization = new Internationalization();
let val: Date =  intl.parseDate('11/2016',{skeleton: 'yM'});

document.querySelector('.result').innerHTML = val.toString();




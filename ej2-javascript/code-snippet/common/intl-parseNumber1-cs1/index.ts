


import {Internationalization} from '@syncfusion/ej2-base';

let intl: Internationalization = new Internationalization();
let nParser: Function =  intl.getNumberParser({ format:'P2' , useGrouping: false});
let val: number = nParser('123567.45%');
document.querySelector('.result').innerHTML = val + '';




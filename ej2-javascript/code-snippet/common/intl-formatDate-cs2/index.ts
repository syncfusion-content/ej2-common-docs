
 

import { Internationalization } from '@syncfusion/ej2-base';

let intl: Internationalization = new Internationalization();
let date: Date = new Date();
let formattedString: string =  intl.formatDate(new Date('1/12/2014 10:20:33'), { skeleton: 'GyMMM' });
document.querySelector('.result').innerHTML = formattedString;




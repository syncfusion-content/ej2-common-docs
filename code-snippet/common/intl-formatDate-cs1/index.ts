

import { Internationalization } from '@syncfusion/ej2-base';

let intl: Internationalization = new Internationalization();
let dFormatter: Function = intl.getDateFormat({ skeleton: 'full', type: 'dateTime' });
let formattedString: string = dFormatter(new Date('1/12/2014 10:20:33'));
document.querySelector('.result').innerHTML = formattedString;



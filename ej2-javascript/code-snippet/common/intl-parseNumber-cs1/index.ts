
 

import { Internationalization } from '@syncfusion/ej2-base';

let intl: Internationalization = new Internationalization();
let val: number = intl.parseNumber('$01,234,545.650', { format: 'C3', currency: 'USD', minimumIntegerDigits: 8 });
document.querySelector('.result').innerHTML = val + '';



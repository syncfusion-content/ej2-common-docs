
 
import { Internationalization } from '@syncfusion/ej2-base';

let intl: Internationalization = new Internationalization();
let formattedString: string = intl.formatNumber(12345.65, { format:'C5' , useGrouping: false,
 minimumSignificantDigits:1, maximumSignificantDigits:3 });
document.querySelector('.result').innerHTML = formattedString;




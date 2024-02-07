import { Tooltip } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';
let tooltip: Tooltip = new Tooltip({
  enableHtmlSanitizer: false,
  content: "<img src=text onerror=alert(`XSS_Script_Attack`) \/>" 
});
tooltip.appendTo('#target');

let button: Button = new Button({
  content: 'Show Tooltip',
});
button.appendTo('#target');

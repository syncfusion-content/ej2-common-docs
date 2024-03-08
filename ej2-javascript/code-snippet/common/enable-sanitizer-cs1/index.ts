import { Tooltip } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';
let tooltip: Tooltip = new Tooltip({
  enableHtmlSanitizer: true,
  content: "<img src=text onerror=alert(`XSS_Script_Attack`) \/>" 
});
tooltip.appendTo('#target');

let button: Button = new Button({
  content: 'Hover me for a tooltip!',
});
button.appendTo('#target');
import { Button } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize the Button component.
let button: Button = new Button({ content: 'Button', cssClass: 'e-primary' });

// Render initialized button.
button.appendTo('#element');

var root = document.documentElement;
var colorSFPrimary = '104, 134, 164';
root.style.setProperty('--color-sf-primary', colorSFPrimary);

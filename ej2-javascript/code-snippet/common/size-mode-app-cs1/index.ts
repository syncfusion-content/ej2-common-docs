

import { Button } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
import { Calendar } from '@syncfusion/ej2-calendars';

enableRipple(true);

// Initialize the touch button.
let touchButton: Button = new Button({ content: 'Touch Mode' });
touchButton.appendTo('#touch');
touchButton.element.onclick = (): void => {
    document.body.classList.add('e-bigger');
}
// Initialize the mouse button.
let mouseButton: Button = new Button({ content: 'Mouse Mode' });
mouseButton.appendTo('#mouse');
mouseButton.element.onclick = (): void => {
    document.body.classList.remove('e-bigger');
}
let calendarObject: Calendar = new Calendar();
//Render initialized calendar.
calendarObject.appendTo('#calendar');




var touchButton = new ej.buttons.Button({ content: 'Touch Mode' });
touchButton.appendTo('#touch')
touchButton.element.onclick = () => {
    document.body.classList.add('e-bigger');
    }
    // initialize mouse button control
var mouseButton = new ej.buttons.Button({ content: 'Mouse Mode' });
mouseButton.appendTo('#mouse')
mouseButton.element.onclick = () => {
    document.body.classList.remove('e-bigger');
    }
    // initialize Calendar component
var calendar = new ej.calendars.Calendar();
calendar.appendTo('#calendar')
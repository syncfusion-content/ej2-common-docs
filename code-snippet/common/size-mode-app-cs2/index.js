
var touchButton = new ej.buttons.Button({ content: 'Touch Mode' });
touchButton.appendTo('#touch')
touchButton.element.onclick = () => {
        var controls = document.querySelectorAll('.control');
        for (var index = 0; index < controls.length; index++) {
            controls[index].classList.add('e-bigger');
        }
    }
    // initialize mouse button control
var mouseButton = new ej.buttons.Button({ content: 'Mouse Mode' });
mouseButton.appendTo('#mouse')
mouseButton.element.onclick = () => {
        var controls = document.querySelectorAll('.control');
        for (var index = 0; index < controls.length; index++) {
            controls[index].classList.remove('e-bigger');
        }
    }
    // initialize Calendar component
var calendar = new ej.calendars.Calendar();
calendar.appendTo('#calendar')
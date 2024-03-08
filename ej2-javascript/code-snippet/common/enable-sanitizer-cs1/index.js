var tooltip = new ej.popups.Tooltip({
    enableHtmlSanitizer: true,
    content: "<img src=text onerror=alert(`XSS_Script_Attack`) \/>" 
});
tooltip.appendTo('#target');

var button = new ej.buttons.Button({
    content: 'Hover me for a tooltip!',
});
button.appendTo('#target');
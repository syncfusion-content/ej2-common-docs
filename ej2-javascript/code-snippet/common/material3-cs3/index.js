var button = new ej.buttons.Button({
    content: 'Button', cssClass: 'e-primary'
});
button.appendTo('#element');

var root = document.documentElement;
var colorSFPrimary = '104, 134, 164';
root.style.setProperty('--color-sf-primary', colorSFPrimary);

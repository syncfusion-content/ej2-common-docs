import { Button, CheckBox } from '@syncfusion/ej2-buttons';

var checkBoxObj = new CheckBox({ label: 'Enable DarkMode', change: onDarkMode });
checkBoxObj.appendTo('#darkmode');

function onDarkMode(e: any) {
    e.checked ? document.body.classList.add('e-dark-mode') : document.body.classList.remove('e-dark-mode');
}
var btnObj = new Button({ isPrimary: true });
    btnObj.appendTo('#normal4');
    btnObj = new Button({ cssClass: 'e-success' });
    btnObj.appendTo('#normal5');
    btnObj = new Button({ cssClass: 'e-info' });
    btnObj.appendTo('#normal6');
    btnObj = new Button({ cssClass: 'e-warning' });
    btnObj.appendTo('#normal7');
    btnObj = new Button({ cssClass: 'e-danger' });
    btnObj.appendTo('#normal8');
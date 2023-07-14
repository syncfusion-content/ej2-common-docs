var checkBoxObj = new ej.buttons.CheckBox({ label: 'Enable DarkMode', change: onDarkMode });
checkBoxObj.appendTo('#darkmode');

function onDarkMode(e) {
    e.checked ? document.body.classList.add('e-dark-mode') : document.body.classList.remove('e-dark-mode');
}
    var btnObj = new ej.buttons.Button({ isPrimary: true });
    btnObj.appendTo('#normal4');
    btnObj = new ej.buttons.Button({ cssClass: 'e-success' });
    btnObj.appendTo('#normal5');
    btnObj = new ej.buttons.Button({ cssClass: 'e-info' });
    btnObj.appendTo('#normal6');
    btnObj = new ej.buttons.Button({ cssClass: 'e-warning' });
    btnObj.appendTo('#normal7');
    btnObj = new ej.buttons.Button({ cssClass: 'e-danger' });
    btnObj.appendTo('#normal8');
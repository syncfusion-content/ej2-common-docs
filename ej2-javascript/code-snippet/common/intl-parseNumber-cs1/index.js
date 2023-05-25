var intl = new ej.base.Internationalization();
var val = intl.parseNumber('$01,234,545.650', { format: 'C3', currency: 'USD', minimumIntegerDigits: 8 });
document.querySelector('.result').innerHTML = val + '';


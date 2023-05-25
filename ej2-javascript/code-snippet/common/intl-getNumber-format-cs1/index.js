var intl = new ej.base.Internationalization();
var nFormatter = intl.getNumberFormat({ skeleton: 'C3', currency: 'USD',minimumIntegerDigits:8});
var formattedValue = nFormatter(1234545.65)
document.querySelector('.result').innerHTML = formattedValue;


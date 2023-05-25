var intl = new ej.base.Internationalization();
var dFormatter = intl.getDateFormat({ skeleton: 'full', type: 'dateTime' });
var formattedString = dFormatter(new Date('1/12/2014 10:20:33'));
document.querySelector('.result').innerHTML = formattedString;


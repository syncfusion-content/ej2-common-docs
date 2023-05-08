var intl = new ej.base.Internationalization();
var date = new Date();
var formattedString =  intl.formatDate(new Date('1/12/2014 10:20:33'), { skeleton: 'GyMMM' });
document.querySelector('.result').innerHTML = formattedString;


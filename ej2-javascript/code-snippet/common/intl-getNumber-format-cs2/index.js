var intl = new ej.base.Internationalization();
var formattedString = intl.formatNumber(12345.65, { format:'C5' , useGrouping: false,
 minimumSignificantDigits:1, maximumSignificantDigits:3 });
document.querySelector('.result').innerHTML = formattedString;


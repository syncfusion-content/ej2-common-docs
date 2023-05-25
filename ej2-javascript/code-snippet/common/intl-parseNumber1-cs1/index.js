var intl = new ej.base.Internationalization();
var nParser =  intl.getNumberParser({ format:'P2' , useGrouping: false});
var val = nParser('123567.45%');
document.querySelector('.result').innerHTML = val + '';


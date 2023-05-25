var intl = new ej.base.Internationalization();
var val =  intl.parseDate('11/2016',{skeleton: 'yM'});

document.querySelector('.result').innerHTML = val.toString();


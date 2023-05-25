


import { compile } from '@syncfusion/ej2-base';

let customHelper: Object = {
    upperCase: (str: string) => {
        return str.toUpperCase();
    }
};

let data: object = { name: 'Aston Martin' };

let getDOMString: (data: object) => HTMLCollection = compile('<div>${upperCase(name)}</div>', customHelper);

let opElem: HTMLCollection = getDOMString(data);

document.getElementById('element').appendChild(opElem[0]);




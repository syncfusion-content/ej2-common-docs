


import { compile } from '@syncfusion/ej2-base';

// data
let data: object = { name: 'Aston Martin' };

// Compiling template string into executable function
let getDOMString: (data: object) => NodeList = compile('<div>${name}</div>');

// Using generated function to get output element collection
let output: NodeList = getDOMString(data);

// append html collection to element
document.getElementById('element').appendChild(output[0]);




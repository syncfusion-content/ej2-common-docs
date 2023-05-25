

import { Grid, Page } from '@syncfusion/ej2-grids';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { data } from './datasource.ts';
Grid.Inject(Page);

let grid: Grid = new Grid({
    dataSource: data,
    enablePersistence: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ],
    allowPaging: true,
    pageSettings: { pageSize: 7 }
});
grid.appendTo('#Grid');

// define the array of themes data
let themesData: string[] = ['bootstrap5', 'bootstrap5-dark', 'fluent', 'fluent-dark', 'material', 'tailwind', 'tailwind-dark', 'fabric', 'fabric-dark'];

// initialize DropDownList component
let dropDownListObject: DropDownList = new DropDownList({
    //set the data to dataSource property
    dataSource: themesData,
    placeholder: "Choose a theme",
    change: (args: ChangeEventArgs) => {
       let themeName = args.value as string;
       document.getElementsByTagName('body')[0].style.display = 'none';
       let styleLink: any = document.getElementById('css-link');
       styleLink.href = 'https://cdn.syncfusion.com/ej2/20.4.38/' + themeName + '.css';
       setTimeout(function () { document.getElementsByTagName('body')[0].style.display = 'block'; }, 250);
    }
});

// render initialized DropDownList
dropDownListObject.appendTo('#themes-dropdown');



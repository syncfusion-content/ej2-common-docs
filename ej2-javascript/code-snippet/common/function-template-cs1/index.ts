import { Grid } from '@syncfusion/ej2-grids';
import { employeeData } from './datasource.ts';

//function template
let customTemplate = (data: any) => `<tr>
    <td class="photo">
      ${data.EmployeeID}
    </td>
    <td class="details">
      <table class="CardTable" cellpadding="3" cellspacing="2">
        <colgroup>
          <col width="50%">
          <col width="50%">
        </colgroup>
        <tbody>
          <tr>
            <td class="CardHeader">First Name </td>
            <td>${data.FirstName} </td>
          </tr>
          <tr>
            <td class="CardHeader">Last Name</td>
            <td>${data.LastName} </td>
          </tr>
          <tr>
            <td class="CardHeader">Title</td>
            <td>${data.Title}</td>
          </tr>
          <tr>
            <td class="CardHeader">Country</td>
            <td>${data.Country}</td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>`;

let grid: Grid = new Grid({
    dataSource: employeeData,
    rowTemplate: customTemplate,
    columns: [
        { headerText: 'Employee ID', width: 150, textAlign: 'Center', field: 'OrderID' },
        { headerText: 'Employee Details', width: 300, field: 'EmployeeID' }
    ],
    height: 315
});
grid.appendTo('#Grid');
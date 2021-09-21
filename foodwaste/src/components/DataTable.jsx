import React from 'react';
import '../styles/Table.css'

function DataTable({WasteData}) {
  const { Data } = WasteData
  console.log(Data)
    return (
      <div id="product-list">
        <header>
          <strong>Data Specs</strong>
        </header>
        <table id="product-list">
          <thead>
            <tr>
              <th>Year</th>
              <th>Total avoided waste over the year</th>
              <th>Corvered population</th>
            </tr>
          </thead>
          <tbody>
          {
          Data.map((year, index) =>{
            console.log(year)
            return (
                <tr key={ index }>
                  <td>{year.id}</td>
                  <td>{year.population}</td>
                  <td>{year.totalWaste}</td>
                  {/* <td>{Object.keys{year.month}}</td> */}
                </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    )
}
export default DataTable;
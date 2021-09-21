import React from 'react';
import DataTable from './DataTable'

function Header(props) {
  console.log(props)
    // const year = WasteData.map((waste) => {
    //     <section></section>
    // })
  return (
      <section>
          <header>Desperdício de Alimentos</header>
          <label for="Year">Choose a year</label>
          <select name="Years" id="Years">
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
          </select>
          <section>
            <DataTable WasteData={ props }/>
          </section>
      </section>
    )
}
export default Header
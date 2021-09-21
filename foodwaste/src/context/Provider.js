import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import WasteContext from './Context';
import WasteData from './assets/WasteData.json'


function FoodWasteProvider({ children }) {
    const [data, setData] = useState()
    const [year, setYears] = useState()

    const getData = async () =>{
        if(year.length === 0) {
            const response = await WasteData
            const result = response.json
            setData(result)
        }
    }
    return (
        <WasteContext.Provider
          value={ {
            data,
          } }
        >
          { children }
        </WasteContext.Provider>
      );
}

export default FoodWasteProvider
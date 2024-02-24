import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch} = useContext(AppContext);
    const [tempCurrency, setCurrency] = useState(currency);
    const changeCurrency = (value) => {
        setCurrency(value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    };
    return (
        <div>
        <label htmlFor="inputGroupSelect01">Currency:</label>
        <select
          className="custom-select alert alert-success"
          id="inputGroupSelect01"
          value={tempCurrency}
          onChange={(event) => changeCurrency(event.target.value)}
        >
          <option defaultValue>Choose...</option>
          <option value="$" name="$">$ Dollar</option>
          <option value="£" name="£">£ Pound</option>
          <option value="€" name="€ ">€ Euro</option>
          <option value="₹" name="₹">₹ Rupee</option>
        </select>
      </div>
    );
};
export default Currency;
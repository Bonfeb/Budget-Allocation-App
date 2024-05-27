import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency)
    const handleCurrencyChange = (event) => {
        const selectedCurrency = event.target.value;
        setNewCurrency(selectedCurrency);
        dispatch({ type: 'CHG_CURRENCY', payload: selectedCurrency });
    }

  return (
    <div className='alert alert-primary'>
        <label htmlFor="currencySelect">Currency:</label>
        <select value={newCurrency} onChange={handleCurrencyChange} style={{ marginLeft: '10px' }}>
            <option value="£">£ Pound</option>
            <option value="$">$ Dollar</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Rupee</option>
        </select>
    </div>
  );

};

export default Currency;

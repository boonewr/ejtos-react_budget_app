import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const setCurrency = (cur) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: cur
        });
    };



    return (
        <select className="custom-select" id="inputCurrenySelect" onChange={(event) => setCurrency(event.target.value)}>
            <option value="£" defaultValue>Pound £</option>
            {/* <option value="$" name="dollar">Dollar $</option> */}
            <option value="$" name="pound">Dollar $</option>
            <option value="€" name="euro">Euro €</option>
            <option value="₹" name="rupee">Rupee ₹</option>
        </select>
    );
};

export default Budget;
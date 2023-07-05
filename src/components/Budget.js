import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = (props) => {
    const { dispatch, remaining, budget, currency } = useContext(AppContext);

    const updateBudget = (val) => {

        if (val < remaining) {
            alert("Budget cannot be less than current spending");
            return;

        } else if (val <= 20000) {
            dispatch({
                type: 'SET_BUDGET',
                payload: val
            });

        } else if (val > 20000) {
            alert("Budget cannot be more than "  + currency + "20000");
            return;
        }
    };



    return (
        <div className='alert alert-secondary'>
            <span>Budget {currency}:</span>
            <input
                type='number'
                id='budget'
                defaultValue={budget}
                style={{ marginLeft: '2rem', size: 10 }}
                onChange={(event) => updateBudget(event.target.value)}>
            </input>
        </div>
    );
};

export default Budget;
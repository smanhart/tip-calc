import React from 'react';
import Percent from './Percent.js';
import Split from './Split.js';
import Calc from './Calc.js';

function Form() {
    return(
        <>
        <div>
            <label>Bill Total</label>
            <input type="text" ></input>
        </div>
        
        <Percent />
        <Split />
        <Calc />


        </>
    )
}

export default Form

//bill input
      //tip percentage
      //split tip
        //num people
      //calculated amount
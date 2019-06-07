import React from 'react';

function Percent() {
    return( 
        <div>
        <input class="w3-radio" type="radio" name="tipPercentage" value="ten"></input>
        <label>10%</label>

        <input class="w3-radio" type="radio" name="tipPercentage" value="fifteen"></input>
        <label>15%</label>

        <input class="w3-radio" type="radio" name="tipPercentage" value="twenty"></input>
        <label>20%</label>

        <input class="w3-radio" type="radio" name="tipPercentage" value="twentyFive"></input>
        <label>25%</label>

        <input class="w3-radio" type="radio" name="userPercent" value="other"></input>
        <label>Other</label>
        <input type="text" name="userPercent"></input>

        </div>
    )
}

export default Percent;
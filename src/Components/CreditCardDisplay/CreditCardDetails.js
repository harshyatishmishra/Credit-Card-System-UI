import React from 'react';

const creditCardDetails = (props) => (


    <tr>
        <td>{props.cardholdername}</td>
        <td>{props.cardnumber}</td>
        <td>{props.balance}</td>
        <td>{props.cardlimit}</td>
    </tr>


);
export default creditCardDetails;
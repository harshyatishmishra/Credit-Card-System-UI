import React from 'react';
import "../CreditCardDisplay/CreditCardStyle.scss";

const errorTemplate = (props) => (

    <div className="error text-danger">{props.msg}</div>

);
export default errorTemplate;
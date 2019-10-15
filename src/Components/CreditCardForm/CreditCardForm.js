import React from 'react';
import "./CreditCardStyle.scss";
import "../CreditCardDisplay/CreditCardStyle.scss";

const creditCardForm = (props) => (

    <form className="form-horizontal" onSubmit={props.handleCreditCardFormSubmit}>
        <div className="form-group">
            <h2 className="col-sm-12 control-label">Credit Card System</h2>
            <h5 className="col-sm-12 control-label">Add Credit Card</h5>
        </div>

        <div className="form-group">
            <label className="col-sm-2 control-label" htmlFor="cardholdername">Name </label>
            <div className="col-sm-10">
                <input className="col-md-12 form-control" type="text" name="cardholdername" required />
            </div>

        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label" htmlFor="cardnumber">Card Number </label>
            <div className="col-sm-10">
                <input className="col-md-12 form-control" type="number" name="cardnumber" />
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label" htmlFor="cardlimit">Limit </label>
            <div className="col-sm-10">
                <input className="col-md-12 form-control" type="number" name="cardlimit" />
            </div>
        </div>

        <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
                <button className="btn btn-primary btn-sm btn-block">Add</button>
            </div>
        </div>
        {props.errorMsg}
    </form>

);


export default creditCardForm;

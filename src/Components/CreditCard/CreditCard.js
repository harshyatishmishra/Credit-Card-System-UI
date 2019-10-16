import React, { Component } from 'react';
import axios from 'axios';
import CreditCardDetails from '../CreditCardDisplay/CreditCardDetails';
import ErrorTemplate from '../ErrorTemplate/error';
import "../CreditCardDisplay/CreditCardStyle.scss";
import CreditCardForm from "../CreditCardForm/CreditCardForm";
import CreditCardDetailsHeader from "../CreditCardDisplay/CreditCardDetailsHeader";
import * as creditCardConstants from "../../Constants/CreditCardConstant";

class CreditCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [], error: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.creditCardUrl = creditCardConstants.CREDIT_CARD_SERVER_URL;
    }
    componentDidMount() {
        axios.get(this.creditCardUrl)
            .then(response => {
                console.log(response.data.data);
                this.setState({ results: response.data.data });
            })
            .catch(error => {
                this.setState({ error: error.response.data.msg });
            });
    }
    handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        var inputData = {};
        formData.forEach((value, key) => { inputData[key] = value });
        console.log(JSON.stringify(inputData));

        var isExisting = this.state.results.findIndex(res => res.cardnumber === inputData.cardnumber);
        if (isExisting >= 0) {
            this.setState({ error: "Card Number already exists." });
            return;
        }

        axios.post(this.creditCardUrl, inputData)
            .then(response => {
                this.setState({
                    results: response.data.data,
                    error: ""
                });
            })
            .catch(error => {
                this.setState({ error: error.response.data.msg });
            });
    }
    render() {
        let results = [], error = [];
        if (this.state.results) {
            results = this.state.results.map(detail => {
                return <CreditCardDetails
                    key={detail.cardnumber}
                    cardholdername={detail.cardholdername}
                    cardnumber={detail.cardnumber}
                    cardlimit={detail.cardlimit}
                    balance={detail.balance} />
            });
        }

        if (Array.isArray(this.state.error)) {
            error = this.state.error.map(state => {
                return <ErrorTemplate msg={state.msg} />
            });
        } else {
            error = <ErrorTemplate msg={this.state.error} />
        }

        return (
            <React.Fragment>

                <CreditCardForm
                    handleCreditCardFormSubmit={this.handleSubmit}
                    errorMsg={error} />

                <CreditCardDetailsHeader creditCardDetail={results} />

            </React.Fragment >
        );
    }
}
export default CreditCard;
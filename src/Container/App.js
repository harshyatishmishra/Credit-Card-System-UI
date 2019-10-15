import React, { Component } from 'react';
import axios from 'axios';
import CreditCardDetails from '../Components/CreditCardDisplay/CreditCardDetails';
import ErrorTemplate from '../Components/ErrorTemplate/error';
import "./App.scss";
import "../Components/CreditCardDisplay/CreditCardStyle.scss";
import CreditCardForm from "../Components/CreditCardForm/CreditCardForm";
import CreditCardDetailsHeader from "../Components/CreditCardDisplay/CreditCardDetailsHeader";
import * as creditCardConstants from "../Constants/CreditCardConstant";

class App extends Component {

  constructor() {
    super();
    this.state = { results: [], error: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.creditCardUrl = creditCardConstants.CREDIT_CARD_SERVER_URL;
  }

  componentDidMount() {
    axios.get(this.creditCardUrl)
      .then(response => {
        console.log(response.data.data);
        this.setState({ results: response.data.data });
      })
      .catch(error => console.log(error));
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    var inputData = {};
    formData.forEach((value, key) => { inputData[key] = value });
    console.log(JSON.stringify(inputData))

    axios.post(this.creditCardUrl, inputData)
      .then(response => {
        console.log(response);
        this.setState({ results: response.data.data });
        this.setState({ error: "" });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: error.response.data.msg });
      });

  }
  render() {
    let results = [], error = [];
    if (this.state.results) {
      results = this.state.results.map(detail => {
        return <CreditCardDetails key={detail.cardnumber} cardholdername={detail.cardholdername} cardnumber={detail.cardnumber}
          cardlimit={detail.cardlimit} balance={detail.balance} />
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
      <div className="container pt-3" >

        <CreditCardForm handleCreditCardFormSubmit={this.handleSubmit} errorMsg={error} />

        <CreditCardDetailsHeader creditCardDetail={results} />

      </div >
    );
  }
}

export default App;

import React from 'react';

const creditCardDetailsHeader = (props) => (
    <React.Fragment>
        <h5 className="cardDetails">Existing Cards</h5>
        < div className="table-responsive cardDetailPadding" >
            <table id="creditCardDetail" className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Card Number</th>
                        <th>Balance</th>
                        <th>Limit</th>
                    </tr>
                </thead>
                <tbody>
                    {props.creditCardDetail}
                </tbody>
            </table>
        </div >
    </React.Fragment>
);
export default creditCardDetailsHeader;
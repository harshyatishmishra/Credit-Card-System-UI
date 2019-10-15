import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CreditCardDetails from './CreditCardDetails';
import CreditCardDetailsHeader from './CreditCardDetailsHeader';

configure({ adapter: new Adapter() });

const mockProps = {
    cardholdername: 'Harsh',
    cardnumber: '123',
    balance: 100,
    cardlimit: 100
}

const details = [mockProps];

describe('Credit card details', () => {
    it('should render the details', () => {
        const wrapper = mount(<CreditCardDetails {...mockProps} />);
        expect((wrapper).prop('balance')).toEqual(100);
        expect((wrapper).prop('cardholdername')).toEqual('Harsh');
    });

    it('CreditCardDetailsHeader', () => {
        const detail = mount(<CreditCardDetailsHeader {...details} />)
        expect(detail.find('tbody')).toHaveLength(1);

    })
});
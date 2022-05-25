import React from "react";
import PropTypes from 'prop-types';

import './ToyDetails.css';

class ToyDetails extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        amount: PropTypes.number.isRequired,
        imgUrl: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    };

    render() {
        return (
            <section className="ToyDetails">
                <h2>Toy Details</h2>
                <div className='row'>
                    <label>Name</label>
                    <div>{this.props.name}</div>
                </div>
                <div className='row'>
                    <label>Image</label>
                    <div>{this.props.imgUrl}</div>
                </div>
                <div className='row'>
                    <label>Price</label>
                    <div>{this.props.price}</div>
                </div>
                <div className='row'>
                    <label>Amount</label>
                    <div>{this.props.amount}</div>
                </div>
                </section>
        )
    }
};

export default ToyDetails;
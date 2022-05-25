import React from "react";
import PropTypes from 'prop-types';

import { Required, isUrl, isPositiveInteger, isPrice } from "../utils/validators";
import "./ToyForm.css";

class ToyForm extends React.Component {
    static propTypes = {
        onCancel: PropTypes.func.isRequired,
        onSave: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name || '',
            price: this.props.price || '',
            imgUrl: this.props.imgUrl || '',
            amount: this.props.amount || ''
        }
    }

    onCancelHandler = () => {
        this.props.onCancel()
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        const toy = {
            name: this.state.name,
            price: Number(this.state.price),
            imgUrl: this.state.imgUrl,
            amount: Number(this.state.amount),
            id: this.props.id
        }
        this.props.onSave(toy);
    }

    onChangeHandler = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value
        this.setState({ [name]: value })
    }
    
    isFormInvalid = () => {
        return !Required(this.state.name)
            || !isPositiveInteger(this.state.amount)
            || !isUrl(this.state.imgUrl)
            || !isPrice(this.state.price)
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler} className="ToyForm">
                <h2>Toy id: {this.props.id}</h2>
                <div className="form-group">
                    <label htmlFor="name" className="form-control-label">Name</label>
                    <input
                        className="form-control"
                        type="text"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChangeHandler}
                    />
                    {!Required(this.state.name) &&
                        <span className="form-validator">Please, fill the  field. Value must be a string</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="price" className="form-control-label">Price</label>
                    <input
                        className="form-control"
                        type="text"
                        id="price"
                        name="price"
                        value={this.state.price}
                        onChange={this.onChangeHandler}
                    />
                    {!isPrice(this.state.price) &&
                        <span className="form-validator">Please, fill the  field. Value must be a retional number greater than 0</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="imgUrl" className="form-control-label">URL</label>
                    <input
                        className="form-control"
                        type="text"
                        id="imgUrl"
                        name="imgUrl"
                        value={this.state.imgUrl}
                        onChange={this.onChangeHandler}
                    />
                    {!isUrl(this.state.imgUrl) &&
                        <span className="form-validator">Please, fill the  field. Value must be a valid URL</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="amount" className="form-control-label">Amount</label>
                    <input
                        className="form-control"
                        type="text"
                        id="amount"
                        name="amount"
                        value={this.state.amount}
                        onChange={this.onChangeHandler}
                    />
                    {!isPositiveInteger(this.state.amount) &&
                        <span className="form-validator">Please, fill the  field. Value must be a positive integer</span>}
                </div>
                <button
                    type="submit"
                    onClick={this.onSaveHandler}
                    disabled={this.isFormInvalid()}
                >
                    Save
                </button>
                <button
                    type="button"
                    onClick={this.onCancelHandler}
                >
                    Cancel
                </button>
            </form>
        )
    }
};

export default ToyForm;
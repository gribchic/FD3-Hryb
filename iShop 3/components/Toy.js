import React from 'react';
import PropTypes from 'prop-types';
import './Toy.css';

class Toy extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onSelectToy: PropTypes.func.isRequired,
    onDeleteToy: PropTypes.func.isRequired,
    onEditToy: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    isEditMode: PropTypes.bool.isRequired,
  };

  onSelectToyHandler = (event) => {
    if(this.props.isEditMode) {
      return;
    }
    this.props.onSelectToy(this.props.id);
  };

  onDeleteToyHandler = (event) => {
    event.stopPropagation();
    this.props.onDeleteToy(this.props.id);
  };

  onEditToyHandler = (event) => {
    event.stopPropagation();
    this.props.onEditToy(this.props.id);
  }

  render() {
    return (
      <section className={`Toy ${this.props.isSelected ? 'selected' : ''}`} onClick={this.onSelectToyHandler}>
        <h2>{this.props.name}</h2>
        <img src={this.props.imgUrl} className='img' />
        <div className='description'>
          <span className='price'>{`Price: $${this.props.price}`}</span>
          <span className='amount'>{`Amount: ${this.props.amount}`}</span>
        </div>
        <button
          type='button'
          onClick={this.onDeleteToyHandler}
          disabled={this.props.isEditMode}
        >
          Delete
        </button>
        <button
          typr='button'
          onClick={this.onEditToyHandler}
          disabled={this.props.isEditMode}
        >
          Edit
        </button>
      </section>
    );
  }
};

export default Toy;
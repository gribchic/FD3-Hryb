import React from 'react';
import PropTypes from 'prop-types';

import './Ishop.css';
import Toy from './Toy';

class Ishop extends React.Component {

  static propTypes = {
    shopName: PropTypes.string.isRequired,
    toys: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        imgUrl: PropTypes.string.isRequired,
      })
    )
  };

  constructor(props) {
    super(props)
    this.state = {
      toys: [...this.props.toys],
      selectedToyId: null,
    }
  };

  onSelectToyHandler = (id) => {
    this.setState({ selectedToyId: id })
  }

  onDeleteToyHandler = (id) => {
    if (confirm('are you sure you want to delete this toy?')) {
      this.setState((prevState) => {
        return { toys: prevState.toys.filter(toy => toy.id !== id) }
      })
    }
  };

  render() {
    if (this.state.toys.length === 0) {
      return (
        <div className='IshopBlock'>
          <h1 className='h1'>{this.props.shopName}</h1>
          <div className='alert'>Sorry. There are no toys</div>
        </div>
      )
    }

    const toysCode = this.state.toys.map(v =>
      <div className='toy-container' key={v.id}>
        <Toy
          name={v.name}
          price={v.price}
          amount={v.amount}
          imgUrl={v.imgUrl}
          isSelected={this.state.selectedToyId === v.id}
          onSelectToy={this.onSelectToyHandler}
          onDeleteToy={this.onDeleteToyHandler}
          id={v.id}
        />
      </div>);

      return (
        <div className='IshopBlock'>
          <h1 className='h1'>{this.props.shopName}</h1>
          <div className='row'>{toysCode}</div>
        </div>
      )
  }
};

export default Ishop;
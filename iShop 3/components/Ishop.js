import React from 'react';
import PropTypes from 'prop-types';

import './Ishop.css';
import Toy from './Toy';
import ToyDetails from './ToyDetails';
import ToyForm from './ToyForm';

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
    super(props);
    const maxId = Math.max(...this.props.toys.map(toy => toy.id));

    this.state = {
      toys: [...this.props.toys],
      selectedToyId: null,
      mode: 0,
      maxId
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

  onEditToyHandler = (id) => {
    console.log(id);
  };

  newToyHandler = () => {
    console.log('new');
    this.setState(
      {
        mode: 1,
        selectedToyId: null,
      }
    )
  }

  onCancelHandler = () => {
    this.setState({ mode: 0 })
  }

  onSaveHandler = (item) => {
    const toy = {
      id: this.state.maxId + 1,
      amount: item.amount,
      imgUrl: item.imgUrl,
      price: item.price,
      name: item.name

    };
    const arr = [...this.state.toys, toy];
    this.setState({ mode: 0, toys: arr });
  }

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
          onEditToy={this.onEditToyHandler}
          id={v.id}
          isEditMode={this.state.mode === 1}
        />
      </div>);

    const [toySelected] = this.state.toys.filter(toy => toy.id === this.state.selectedToyId);

    return (
      <React.Fragment>
        <div className='IshopBlock'>
          <h1 className='h1'>{this.props.shopName}</h1>
          <div className='row'>{toysCode}</div>
        </div>
        {this.state.mode === 0 &&
          <button type='button' onClick={this.newToyHandler}>New Product</button>}
        {this.state.mode === 1 &&
          <ToyForm
            id={this.state.maxId}
            onCancel={this.onCancelHandler}
            onSave={this.onSaveHandler}
          />
        }
        {this.state.selectedToyId !== null &&
          <ToyDetails
            id={toySelected.id}
            name={toySelected.name}
            amount={toySelected.amount}
            imgUrl={toySelected.imgUrl}
            price={toySelected.price}
          />}
      </React.Fragment>
    )
  }
};

export default Ishop;
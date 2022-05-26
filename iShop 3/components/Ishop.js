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
    const nextId = Math.max(...this.props.toys.map(toy => toy.id)) + 1;

    this.state = {
      toys: [...this.props.toys],
      selectedToyId: null,
      selectedToy: {},
      mode: 0,
      nextId
    }
  };

  onSelectToyHandler = (id) => {
    //const selectedToy = this.state.toys.find(toy => toy.id === id);
    this.setState({ selectedToyId:id });
  }

  onDeleteToyHandler = (id) => {
    if (confirm('are you sure you want to delete this toy?')) {
      this.setState({ toys: this.state.toys.filter(toy => toy.id !== id) }
      )
    }
  };

  onEditToyHandler = (id) => {
    const selectedToy = this.state.toys.find(toy => toy.id === id);
    this.setState({ selectedToy, mode: 2, selectedToyId:id });
  };

  newToyHandler = () => {
    console.log('new');
    this.setState({
      mode: 1,
      selectedToy: {},
    })
  }

  onCancelHandler = () => {
    this.setState({ mode: 0, selectedToy: {} })
  }

  onCreateHandler = (item) => {
    const toy = {
      id: this.state.nextId,
      amount: item.amount,
      imgUrl: item.imgUrl,
      price: item.price,
      name: item.name

    };
    const arr = [...this.state.toys, toy];
    const nextId = this.state.nextId + 1;

    this.setState({ mode: 0, toys: arr, nextId });
  }

  onUpdateHandler = (item) => {
    const toy = {
      id: item.id,
      amount: item.amount,
      imgUrl: item.imgUrl,
      price: item.price,
      name: item.name
    };

    const arr = [...this.state.toys];
    const ind = arr.findIndex(item => item.id === toy.id);

    arr.splice(ind, 1, toy);

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
          isEditMode={this.state.mode !== 0}
        />
      </div>);
      const selectedToy = this.state.toys.find(toy=>toy.id===this.state.selectedToyId);


    return (
      
      <React.Fragment>
        <div className='IshopBlock'>
          <h1 className='h1'>{this.props.shopName}</h1>
          <div className='row'>{toysCode}</div>
          <footer>
            {this.state.mode === 0 &&
              <button type='button' onClick={this.newToyHandler}>New Product</button>}
          </footer>
        </div>

        {this.state.mode === 1 &&
          <ToyForm
            id={this.state.nextId}
            onCancel={this.onCancelHandler}
            onSave={this.onCreateHandler}
          />
        }
        {this.state.mode === 2 &&
          <ToyForm
            onCancel={this.onCancelHandler}
            onSave={this.onUpdateHandler}
            {...this.state.selectedToy}
          />
        }
        
        {this.state.selectedToyId !== null && this.state.mode === 0 &&
          <ToyDetails
            id={selectedToy.id}
            name={selectedToy.name}
            amount={selectedToy.amount}
            imgUrl={selectedToy.imgUrl}
            price={selectedToy.price}
          />}
      </React.Fragment>
    )
  }
};

export default Ishop;
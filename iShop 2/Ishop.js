var ToysBlock = React.createClass({

  displayName: 'ToysBlock',

  propTypes: {
    shopName: React.PropTypes.string.isRequired,
    toys: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        price: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        amount: React.PropTypes.number.isRequired,
        imgUrl: React.PropTypes.string.isRequired,
      })
    )
  },

  getInitialState: function () {
    return {
      toys: [...this.props.toys],
      selectedToyId: null,
    };
  },

  onSelectToyHandler: function (id) {
    this.setState({ selectedToyId: id })
  },

  onDeleteToyHandler: function (id) {
    if (confirm('are you sure you want to delete this toy?')) {
      this.setState((prevState) => {
        return {toys: prevState.toys.filter(toy => toy.id !== id)}
      } )
    }
  },

  render: function () {

    if(this.state.toys.length===0) {
      return React.DOM.div({ className: 'IshopBlock' },
      React.DOM.h1({ className: 'h1' }, this.props.shopName),
      React.DOM.div({ className: 'alert' }, 'Sorry. There are no toys!'),
    );
    }

    var toysCode = this.state.toys.map(v =>

      React.DOM.div({ className: 'toy-container', key: v.id },
        React.createElement(Toy, {
          name: v.name,
          price: v.price,
          amount: v.amount,
          imgUrl: v.imgUrl,
          isSelected: this.state.selectedToyId === v.id,
          onSelectToy: this.onSelectToyHandler,
          onDeleteToy: this.onDeleteToyHandler,
          id: v.id,
        }),
      ),
    );
    return React.DOM.div({ className: 'IshopBlock' },
      React.DOM.h1({ className: 'h1' }, this.props.shopName),
      React.DOM.div({ className: 'row' }, toysCode),
    );
  },
});

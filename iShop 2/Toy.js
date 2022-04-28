let Toy = React.createClass({

  displayName: 'Toy',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    amount: React.PropTypes.number.isRequired,
    imgUrl: React.PropTypes.string.isRequired,
    isSelected: React.PropTypes.bool.isRequired,
    onSelectToy: React.PropTypes.func.isRequired,
    onDeleteToy: React.PropTypes.func.isRequired,
    id: React.PropTypes.number.isRequired,
  },

  onSelectToyHandler: function (event) {
    if (event.target.tagName === 'BUTTON') {
      event.stopPropagation();
      return;
    };

    this.props.onSelectToy(this.props.id);
  },

  onDeleteToyHandler: function (event) {
    this.props.onDeleteToy(this.props.id);
  },

  className: function () {
    return `Toy ${this.props.isSelected ? 'selected' : ''}`;
  },

  render: function () {
    return React.DOM.section({ className: this.className(), onClick: this.onSelectToyHandler },
      React.DOM.h2(null, this.props.name),
      React.DOM.img({ src: this.props.imgUrl, className: 'img' }),
      React.DOM.div({ className: 'description' },
        React.DOM.span({ className: 'price' }, `Price: $${this.props.price}`),
        React.DOM.span({ className: 'amount' }, `Amount: ${this.props.amount}`),
      ),
      React.DOM.button({
        type: 'button',
        onClick: this.onDeleteToyHandler
      }, 'Delete'),
    )
  }
});
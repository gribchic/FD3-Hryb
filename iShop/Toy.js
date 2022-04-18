let Toy = React.createClass({

    displayName: 'Toy',
  
    propTypes: {
      name:React.PropTypes.string.isRequired,
      price: React.PropTypes.number.isRequired,
      amount: React.PropTypes.number.isRequired,
      imgUrl: React.PropTypes.string.isRequired,
    },
  
    render: function () {
      return  React.DOM.section({className:'Toy'},
        React.DOM.h2(null,this.props.name),
        React.DOM.img({src:this.props.imgUrl,className:'img'}),
        React.DOM.div({className:'description'},
          React.DOM.span({className:'price'},`Price: $${this.props.price}`),
          React.DOM.span({className:'amount'},`Amount: ${this.props.amount}`),
          ),
      )
    }
  });
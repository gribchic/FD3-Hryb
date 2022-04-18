var ToysBlock = React.createClass({

  displayName: 'ToysBlock',

  propTypes: {
    shopName: React.PropTypes.string.isRequired,
    toys:React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        price: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        amount: React.PropTypes.number.isRequired,
        imgUrl: React.PropTypes.string.isRequired,
      })
    )
  },

  render: function() {

    var toysCode=this.props.toys.map( v =>
       
        React.DOM.div({className:'toy-container'},
         React.createElement(Toy, {
          key:v.id,
          name:v.name,
          price:v.price,
          amount:v.amount,
          imgUrl:v.imgUrl,
        }),
        ),
      );
    return React.DOM.div( {className:'IshopBlock'}, 
      React.DOM.h1( {className:'h1'}, this.props.shopName ),
      React.DOM.div( {className:'row'}, toysCode ),
    );
  },
});

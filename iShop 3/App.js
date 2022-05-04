'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Ishop = require('./components/Ishop');

var shopName = 'Toy Store'
var toysArr = [
    { name: 'Taddy 1', id: 1, amount: 222, price: 22.99, imgUrl: 'https://karls-shop.b-cdn.net/media/f7/2b/24/1633006311/Teddy.png' },
    { name: 'Taddy 2', id: 2, amount: 222, price: 22.99, imgUrl: 'https://karls-shop.b-cdn.net/media/f7/2b/24/1633006311/Teddy.png' },
    { name: 'Taddy 3', id: 3, amount: 222, price: 22.99, imgUrl: 'https://karls-shop.b-cdn.net/media/f7/2b/24/1633006311/Teddy.png' },
    { name: 'Taddy 4', id: 4, amount: 222, price: 22.99, imgUrl: 'https://karls-shop.b-cdn.net/media/f7/2b/24/1633006311/Teddy.png' },
];

ReactDOM.render(
    React.createElement(Ishop, { toys: toysArr, shopName }),
    document.getElementById('container')
);
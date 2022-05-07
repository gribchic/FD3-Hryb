import React from 'react';
import ReactDOM from 'react-dom';

import Ishop from './components/Ishop';
import toysArr from './toys.json';

const shopName = 'Toy Store';

ReactDOM.render(
    <Ishop shopName={shopName} toys={toysArr} />,
    document.getElementById('container')
);
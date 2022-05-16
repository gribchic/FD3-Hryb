import React from 'react';
import ReactDOM from 'react-dom';
import DoubleButton from './components/DoubleButton';
import withRainbowFrame from './components/withRainbowFrame';

let colors=['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);

ReactDOM.render(
    <FramedDoubleButton caption1="однажды" caption2="пору" cbPressed={num => alert(num)} >
        в студёную зимнюю
    </FramedDoubleButton>
    , document.getElementById('container')
);
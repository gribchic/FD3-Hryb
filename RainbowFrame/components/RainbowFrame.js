import React from 'react';
import PropTypes, { arrayOf, func } from 'prop-types';
import ColorFrame from './ColorFrame';

class RainbowFrame extends React.Component {

    static propTypes = {
        colors: PropTypes.array.isRequired
    }

    render() {
        return (
            <ColorFrame colors={this.props.colors}>
                {this.props.children}
            </ColorFrame>
        )
    }
};


export default RainbowFrame;
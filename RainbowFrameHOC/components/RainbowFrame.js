import React from 'react';
import PropTypes, { arrayOf, func } from 'prop-types';

class RainbowFrame extends React.Component {

    static propTypes = {
        colors: PropTypes.array.isRequired
    }


    render() {
        let content = this.props.children;

        this.props.colors.forEach(
            color => content = <div style={{ border: `solid 4px ${color}`, padding: "10px" }}>{content}</div>
        )

        return content;
    }
};


export default RainbowFrame;
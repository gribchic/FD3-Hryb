import React from 'react';

class DoubleButton extends React.Component {
       
    onClick = (event) => {
        console.log()
        this.props.cbPressed(event.target.dataset.text);
    };

    render() {
        return (
            <div>
                <button type='button' onClick={this.onClick} data-text={this.props.caption1}>{this.props.caption1}</button>
                {this.props.children}
                <button type='button' onClick={this.onClick} data-text={this.props.caption2}>{this.props.caption2}</button>
            </div>
        )
    }
};

export default DoubleButton;
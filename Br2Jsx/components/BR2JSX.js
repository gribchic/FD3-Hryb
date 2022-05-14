
import React, { Fragment } from 'react';

import './BR2JSX.css';

class BR2JSX extends React.Component {

    render() {
        const content = [];
        
        this.props.text
            .split(/<br>|<br \/>|<br\/>/g)
            .forEach((word, index, arr) => {
                content.push(word);
                if (index < arr.length - 1) content.push(<br key={index} />);
            });

        return (
            <div className='br2jsx'>{content}</div>
        );
    }

};

export default BR2JSX;
import React from 'react';
import PropTypes from 'prop-types';

const ColorFrame = props => {
  const colors = [...props.colors];
  const color = colors.pop();
  const style = { border: `solid 4px ${color}`, padding: "10px" }

  if (colors.length != 0) {
    return (
      <ColorFrame colors={colors}>
        <div style={{ ...style }}>
          {props.children}
        </div>
      </ColorFrame>
    )
  }

  return (
    <div style={{ ...style, textAlign: 'center' }}>
      {props.children}
    </div>
  )
}

ColorFrame.PropTypes = {
  colors: PropTypes.array.isRequired
}

export default ColorFrame;

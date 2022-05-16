import React from 'react';
import RainbowFrame from "./RainbowFrame"

const withRainbowFrame = (colors) => {
    return function (Component) {
        return props => (
            <RainbowFrame colors={colors}>
                <Component {...props} />
            </RainbowFrame>
        )
    }
};

export default withRainbowFrame;
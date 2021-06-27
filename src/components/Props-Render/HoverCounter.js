import React from 'react';

const HoverCounter = (props) => {
    const { count, increment, theme } = props;
    const style =
        theme.theme === 'red'
            ? {
                  backgroundColor: theme.theme,
                  color: 'white',
              }
            : null;
    return (
        <div>
            <h1 onMouseMove={increment} style={style}>
                This is the MouseHover {count} time
            </h1>
        </div>
    );
};

export default HoverCounter;

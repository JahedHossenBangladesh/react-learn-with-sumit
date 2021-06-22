import React from 'react';

const HoverCounter = (props) => {
    const { count, increment } = props;
    return (
        <div>
            <h1 onMouseMove={increment}>This is the MouseHover {count} time</h1>
        </div>
    );
};

export default HoverCounter;

import React from 'react';
import ReactDom from 'react-dom';

function Clock() {
    return (
        <h1 className="heading">
            HI <span>{new Date().toLocaleTimeString()}</span>
        </h1>
    );
}

ReactDom.render(Clock(), document.getElementById('root'));

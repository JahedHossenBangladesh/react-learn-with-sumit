import React from 'react';
import ReactDom from 'react-dom';

setInterval(() => {
    const element = (
        <h1 className="heading">
            HI <span>{new Date().toLocaleTimeString()}</span>
        </h1>
    );
    ReactDom.render(element, document.getElementById('root'));
}, 1000);

import React from 'react';
import ReactDom from 'react-dom';
import reportWebVitals from './reportWebVitals';
import States from './components/UseState/State';

ReactDom.render(
    <React.StrictMode>
        <States />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();

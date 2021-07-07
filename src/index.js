import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
// import States from './components/UseState/State';
// import MyComponent from './components/useEffect/MyComponents';
import reportWebVitals from './reportWebVitals';

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();

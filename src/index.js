import React from 'react';
import ReactDom from 'react-dom';

// eslint-disable-next-line react/prefer-stateless-function
class Clock extends React.Component {
    render() {
        const { locale, children } = this.props;
        return (
            <div>
                <h1>Hello, worlddddddddddd!</h1>

                <h2>It is {new Date().toLocaleTimeString(locale)}.</h2>
                <h3>{children}</h3>
            </div>
        );
    }
}

ReactDom.render(<Clock locale="bn-BD">this is me </Clock>, document.getElementById('root'));

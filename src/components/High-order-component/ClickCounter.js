import React from 'react';

export default class ClickCounte extends React.Component {
    state = { count: 0 };

    incrise = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        const { count } = this.state;
        return (
            <>
                <button type="button" onClick={this.incrise}>
                    Click {count}time
                </button>
            </>
        );
    }
}

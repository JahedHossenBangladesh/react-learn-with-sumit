import React from 'react';

export default class HoverCounter extends React.Component {
    state = {
        count: 0,
    };

    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    render() {
        const { count } = this.state;
        return (
            <>
                <h1 onMouseMove={this.increment}>This is the MouseHover {count} time</h1>
            </>
        );
    }
}

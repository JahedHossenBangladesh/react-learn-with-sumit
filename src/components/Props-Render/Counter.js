import { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    };

    increment = () => {
        this.setState((previous) => ({ count: previous.count + 1 }));
    };

    render() {
        const { count } = this.state;
        const { children } = this.props;
        return children(count, this.increment);
    }
}

export default Counter;

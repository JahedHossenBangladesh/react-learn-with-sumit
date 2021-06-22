import React from 'react';

const withCounter = (OriginalComponent) => {
    class NewComponent extends React.Component {
        state = { count: 0 };

        incrise = () => {
            this.setState((prevState) => ({ count: prevState.count + 1 }));
        };

        render() {
            const { count } = this.state;
            return <OriginalComponent count={count} incrise={this.incrise} />;
        }
    }
    return NewComponent;
};
export default withCounter;

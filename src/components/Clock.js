import React from 'react';
/*  eslint-disable react/destructuring-assignment */
// eslint-disable-next-line react/prefer-stateless-function
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { newDate: new Date(), locale: 'bn-BD' };
        // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tiktok(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }
    // this is the bind method and it connect with  constructor
    // handleClick() {
    //     this.setState({
    //         locale: 'en-US',
    //     });
    // }
    // this is the arrow function

    handleClick = (englishLanguage) => {
        this.setState({
            locale: englishLanguage,
        });
    };

    tiktok() {
        this.setState({
            newDate: new Date(),
        });
    }

    render() {
        const { newDate, locale, toggle } = this.state;
        return (
            <div>
                <h1>Hello, world! </h1>
                <h3>{toggle}</h3>
                <h2>It is {newDate.toLocaleTimeString(locale)}.</h2>
                {/* <h3>{children}</h3> */}
                <button onClick={() => this.handleClick('en-US')} type="submit">
                    Do dit
                </button>
            </div>
        );
    }
}
export default Clock;

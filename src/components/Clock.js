import React from 'react';
import Button from './Button';
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
        const { newDate, locale } = this.state;
        return (
            <>
                <h1>Hello,ssss world! </h1>
                <h2>It is {newDate.toLocaleTimeString(locale)}.</h2>
                {locale === 'bn-BD' ? (
                    <Button change={this.handleClick} locale="en-US" show={false} enable />
                ) : (
                    <Button change={this.handleClick} locale="bn-BD" show enable />
                )}
            </>
        );
    }
}
export default Clock;

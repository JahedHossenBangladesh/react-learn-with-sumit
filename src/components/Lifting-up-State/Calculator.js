import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import { convert, toCelcious, toFahrenheit } from './lib/converter';
import TemperatureInput from './TemperatureInput';

export default class Calculator extends React.Component {
    state = {
        temperature: '',
        scale: 'c',
    };

    onTemperatureChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? convert(temperature, toCelcious) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;

        return (
            <>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.onTemperatureChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.onTemperatureChange}
                />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </>
        );
    }
}

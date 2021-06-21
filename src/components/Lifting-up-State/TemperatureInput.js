import React from 'react';

const scaleName = {
    c: 'celsius',
    f: 'fahrenheit',
};
export default function TemperatureInput({ temperature, scale, onTemperatureChange }) {
    return (
        <>
            <fieldset>
                <legend> Enter temperature in {scaleName[scale]}</legend>
                <input
                    type="text"
                    value={temperature}
                    onChange={(e) => onTemperatureChange(e, scale)}
                />
            </fieldset>
        </>
    );
}

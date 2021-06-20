import React from 'react';
import Clock from './Clock';

const ClockList = ({ quantites = [] }) => (
    <div>
        {quantites.map(() => (
            <Clock key={Math.random()} />
        ))}
    </div>
);

export default ClockList;

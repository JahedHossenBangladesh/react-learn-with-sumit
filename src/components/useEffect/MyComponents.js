import { React, useEffect, useState } from 'react';

export default function () {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    const [text, setText] = useState('');

    const tick = () => {
        setDate(new Date());
    };
    useEffect(() => {
        console.log('updating useEffect');
        document.title = `clicked ${count} times`;
    }, [count]);
    useEffect(() => {
        console.log('clock is running');
        const interval = setInterval(tick, 1000);

        return () => {
            console.log('clock is stop');
            clearInterval(interval);
        };
    }, []);

    const addClick = () => {
        setCount((pre) => pre + 1);
    };
    return (
        <div>
            <p>Time:{date.toLocaleTimeString()}</p>

            <input
                type="text"
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <p>
                <button type="button" onClick={addClick}>
                    {' '}
                    Count in Title{' '}
                </button>
            </p>
            <p>{text}</p>
        </div>
    );
}

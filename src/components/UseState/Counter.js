import React, { useState } from 'react';

export default function Counter() {
    const [count, setCounts] = useState(0);
    const [add, setAdd] = useState(5);

    return (
        <div>
            <p>{count}</p>
            <h1>{add}</h1>

            <button type="button" onClick={() => setCounts((preState) => preState + 1)}>
                {' '}
                add 1
            </button>

            <button type="button" onClick={() => setAdd((preState) => preState + 5)}>
                {' '}
                add 5
            </button>
        </div>
    );
}

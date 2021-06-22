import React from 'react';

function ClickCount(props) {
    const { count, increment } = props;
    return (
        <div>
            <button type="button" onClick={increment}>
                Click {count}time
            </button>
        </div>
    );
}

export default ClickCount;

import React from 'react';

function ClickCount(props) {
    const { count, increment, theme } = props;
    return (
        <div>
            <button type="button" style={{ backgroundColor: theme }} onClick={increment}>
                Click {count}time
            </button>
        </div>
    );
}

export default ClickCount;

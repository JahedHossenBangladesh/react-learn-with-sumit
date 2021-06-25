import React from 'react';

function ClickCount(props) {
    const { count, increment, theme, switchTheme } = props;
    return (
        <div>
            <button type="button" style={{ backgroundColor: theme }} onClick={increment}>
                Click {count}time
            </button>
            <button type="button" onClick={switchTheme}>
                Click me
            </button>
        </div>
    );
}

export default ClickCount;

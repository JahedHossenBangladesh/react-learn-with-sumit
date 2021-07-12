import React from 'react';

function Button({ handleClick, children }) {
    console.log(`the button ${children} is calling`);
    return (
        <div>
            <button type="button" onClick={handleClick}>
                {children}
            </button>
        </div>
    );
}

export default React.memo(Button);

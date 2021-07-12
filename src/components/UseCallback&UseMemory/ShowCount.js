import React from 'react';

function ShowCount({ count, title }) {
    console.log(`${title} is calling`);
    return (
        <div>
            <h1>
                {title} is {count}
            </h1>
        </div>
    );
}

export default React.memo(ShowCount);

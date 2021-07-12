import React from 'react';

function Title() {
    console.log('title is calling');
    return (
        <div>
            <h1> This is all about useCallback and useMemory</h1>
        </div>
    );
}
export default React.memo(Title);

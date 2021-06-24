import React from 'react';
import ClickCount from '../Props-Render/ClickCount';
import Counter from '../Props-Render/Counter';
import ThemeContext from './Contexts/themeContext';

function content() {
    // const style = {
    //     backgroundColor: theme,
    // };
    return (
        <div>
            <h1>This is Content</h1>
            <Counter>
                {(count, increment) => (
                    <ThemeContext.Consumer>
                        {({ theme }) => (
                            <ClickCount theme={theme} count={count} increment={increment} />
                        )}
                    </ThemeContext.Consumer>
                )}
            </Counter>
        </div>
    );
}

export default content;

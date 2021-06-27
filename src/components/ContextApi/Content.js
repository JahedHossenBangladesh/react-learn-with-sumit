import React from 'react';
import ClickCount from '../Props-Render/ClickCount';
import Counter from '../Props-Render/Counter';
import ThemeContext from './Contexts/themeContext';

export default class Content extends React.Component {
    // const style = {
    //     backgroundColor: theme,
    // };
    // contextType use in functional component
    // const context = useContext(ThemeContext);
    // const {theme,switchTheme} = context;

    render() {
        const { theme, switchTheme } = this.context;
        return (
            <div>
                <h1>This is Content</h1>
                <Counter>
                    {(count, increment) => (
                        <ClickCount
                            theme={theme}
                            switchTheme={switchTheme}
                            count={count}
                            increment={increment}
                        />
                    )}
                </Counter>
            </div>
        );
    }
}

Content.contextType = ThemeContext;

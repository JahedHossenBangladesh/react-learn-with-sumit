import React from 'react';
import Counter from '../Props-Render/Counter';
import HoverCounter from '../Props-Render/HoverCounter';
import ThemeContext from './Contexts/themeContext';
import Section from './Section';

class ContextApiApp extends React.Component {
    state = {
        theme: 'red',
        switchTheme: () => {
            this.setState(({ theme }) => {
                if (theme === 'red') {
                    return {
                        theme: 'pink',
                    };
                }
                return {
                    theme: 'red',
                };
            });
        },
    };

    render() {
        return (
            <>
                <Counter>
                    {(count, increment) => (
                        <HoverCounter count={count} increment={increment} theme={this.state} />
                    )}
                </Counter>
                <ThemeContext.Provider value={this.state}>
                    <Section theme={this.state} />
                </ThemeContext.Provider>
            </>
        );
    }
}

export default ContextApiApp;

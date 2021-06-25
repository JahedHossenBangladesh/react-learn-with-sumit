import React from 'react';
import Counter from '../Props-Render/Counter';
import HoverCounter from '../Props-Render/HoverCounter';
import ThemeContext from './Contexts/themeContext';
import Section from './Section';

class ContextApiApp extends React.Component {
    state = {
        theme: 'red',
    };

    switchTheme = () => {
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
    };

    render() {
        const { theme } = this.state;
        return (
            <>
                <Counter>
                    {(count, increment) => (
                        <HoverCounter count={count} increment={increment} theme={theme} />
                    )}
                </Counter>
                <ThemeContext.Provider value={{ theme, switchTheme: this.switchTheme }}>
                    <Section theme={theme} />
                </ThemeContext.Provider>
            </>
        );
    }
}

export default ContextApiApp;

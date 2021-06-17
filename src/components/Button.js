import React from 'react';

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextProps;
        if (currentChange === nextChange && currentLocale === nextLocale) {
            return false;
        }
        return true;
    }

    render() {
        const { change, locale } = this.props;
        return (
            <div>
                <button type="button" onClick={() => change(locale)}>
                    click hered
                </button>
            </div>
        );
    }
}

export default Button;

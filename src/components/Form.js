import React from 'react';

export default class Form extends React.Component {
    state = {
        title: 'javascript',
        text: 'javascript is awesome ',
        library: 'React',
        isAwesome: true,
    };

    handleOnChange = (e) => {
        // this is for  if the all input has only value no checkbox
        // this.setState({
        //     [e.target.name]: e.target.value,
        // });
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            });
        } else if (e.target.type === 'textarea') {
            this.setState({
                text: e.target.value,
            });
        } else if (e.target.type === 'select-one') {
            this.setState({
                library: e.target.value,
            });
        } else if (e.target.type === 'checkbox') {
            this.setState({
                isAwesome: e.target.checked,
            });
        } else {
            console.log('Nothing is here');
        }
    };

    handleForm = (e) => {
        const { title, text, library, isAwesome } = this.state;
        e.preventDefault();
        console.log(title, text, library, isAwesome);
    };

    render() {
        const { title, text, library, isAwesome } = this.state;
        return (
            <>
                <form action="" onSubmit={this.handleForm}>
                    <input
                        type="text"
                        name="title"
                        placeholder="input your name"
                        value={title}
                        onChange={this.handleOnChange}
                    />
                    <p>{title}</p>

                    <br />
                    <br />
                    <textarea name="text" value={text} onChange={this.handleOnChange} />
                    <br />
                    <br />
                    <p>{text}</p>
                    <br />
                    <br />
                    <select value={library} onChange={this.handleOnChange}>
                        <option value="React"> React </option>
                        <option value="Vue">Vue </option>
                    </select>
                    <br />
                    <br />
                    <input type="checkbox" checked={isAwesome} onChange={this.handleOnChange} />
                    <input type="submit" value="submit" />
                </form>
            </>
        );
    }
}

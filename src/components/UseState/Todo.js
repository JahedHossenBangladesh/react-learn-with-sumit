import React, { useState } from 'react';

function Todo() {
    const [todo, setTodo] = useState('');
    const [worning, setWorning] = useState('');
    const handleInput = (e) => {
        const inputValue = e.target.value;
        const updatedWorning = inputValue.includes('.js') ? 'You have to learn Javascript' : null;
        setTodo(inputValue);
        setWorning(updatedWorning);
    };
    return (
        <>
            <p>{todo}</p>
            <p>
                <textarea name="todo" value={todo} onChange={handleInput} />
            </p>
            <br />
            <h2>{worning || 'Good Choice!'} </h2>
        </>
    );
}
export default Todo;

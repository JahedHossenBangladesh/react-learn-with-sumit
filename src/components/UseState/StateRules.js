import React, { useState } from 'react';

export default function StateRules() {
    const [todo, setTodo] = useState({
        title: '',
        description: '',
    });
    const { title, description } = todo;
    return (
        <>
            <p>{title}</p>
            <input
                type="text"
                value={title}
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            />
            <br />
            <input
                type="text"
                value={description}
                onChange={(e) => setTodo({ ...todo, description: e.target.value })}
            />
        </>
    );
}

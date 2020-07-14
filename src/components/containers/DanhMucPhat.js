import React from 'react';
import DanhMucChoi from '../DanhMucChoi'
import StyledPlaylistitems from '../styles/StyledPlaylistitems'
import withLink from '../hoc/withLink'

const removeVideo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
};

const PlaylistItemWithLink = withLink(DanhMucChoi);

const DanhMucPhat = ({ videos, active }) => (
    <StyledPlaylistitems>
        {videos.map(video => (
            <PlaylistItemWithLink
                key={video.id}
                video={video}
                active={video.id === active.id ? true : false}
                played={video.played}
                removeVideo={removeVideo}
            />
        ))}
    </StyledPlaylistitems>
)

export default DanhMucPhat;


















import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
        <div
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            {todo.text}

            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>x</button>
            </div>
        </div>
    );
}

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

function App() {
    const [todos, setTodos] = useState([
        {
            text: "Learn about React",
            isCompleted: false
        },
        {
            text: "Meet friend for lunch",
            isCompleted: false
        },
        {
            text: "Build really cool todo app",
            isCompleted: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                    />
                ))}
                <TodoForm addTodo={addTodo} />
            </div>
        </div>
    );
}

export default App;
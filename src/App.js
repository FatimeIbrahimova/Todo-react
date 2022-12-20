import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    console.log(todo);
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: todo
    }
    setTodos(beforeItems => [...beforeItems, item])
    setTodo("");
  }
  function deleteTodo(id) {
    const deleteArr = todos.filter(item => item.id !== id);
    setTodos(deleteArr);
  }
  return (
    <div className='Todo'>
      <h1>Todo List app</h1>
      <input type="text" placeholder='Enter a ToDo' value={todo} onChange={e => setTodo(e.target.value)} />
      <button onClick={() => addTodo()}>Add</button>
      <ul>
        {todos.map(item => {
          return (
            <li key={item.id}>{item.value} <button onClick={() => deleteTodo(item.id)}>X</button></li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;

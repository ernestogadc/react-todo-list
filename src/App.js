import React, { useState } from 'react';
import Header from './components/Header.js';
import TaskList from './components/TaskList.js';
import AddTodo from './components/AddTodo';
import './App.css';

function App() {
  const [todos, setTodo] = useState([
    {
      todo: 'Buy grocery',
      done: false,
      id: 1
    },
    {
      todo: 'Study more React ',
      done: false,
      id: 2
    },
    {
      todo: 'Learn more guitar songs',
      done: false,
      id: 3
    },
    {
      todo: 'Sell 100 chicken burgers',
      done: false,
      id: 4
    },
  ])

  const todoDone = (id) => {
    setTodo(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo))
  }

  const deleteTodo = (id) => {
    todos.map(todo => {
      if (todo.id === id && todo.done) {
        setTodo(todos.filter(todo => todo.id !== id))
      }
      return true

    })
    return true

  }

  const createTask = (task) => {
    setTodo([...todos, task])
  }


  return (
    <div className="App">
      <Header />
      <AddTodo onCreate={createTask} />
      <TaskList
        onToggle={todoDone}
        onDelete={deleteTodo}
        todos={todos} />
    </div>
  );
}

export default App;

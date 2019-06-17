import React, { useState } from 'react'

import 'todomvc-app-css/index.css'

import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from './constants'
import NewTodo from './NewTodo'
import TodoItem from './TodoItem'

const initialTodos = [
  {
    key: 1,
    completed: true,
    text: 'create workshop',
  },
  {
    key: 2,
    completed: false,
    text: 'give workshop',
  },
  {
    key: 3,
    completed: false,
    text: 'profit',
  },
]

function App() {
  const [todos, setTodos] = useState(initialTodos)
  const [nextKey, setNextKey] = useState(initialTodos.length + 1)
  const [filter, setFilter] = useState(ALL_TODOS)

  const onDelete = todo =>
    setTodos(todos.filter(candidate => candidate !== todo))

  const visibleTodos = todos.filter(todo => {
    switch (filter) {
      case ACTIVE_TODOS:
        return !todo.completed
      case COMPLETED_TODOS:
        return todo.completed
      default:
        return true
    }
  })

  const onInsert = text => {
    setTodos([...todos, { key: nextKey, completed: false, text }])
    setNextKey(nextKey + 1)
  }
  const onToggle = toggledTodo =>
    setTodos(
      todos.map(candidateTodo =>
        candidateTodo.key === toggledTodo.key
          ? { ...candidateTodo, completed: !candidateTodo.completed }
          : candidateTodo
      )
    )

  return (
    <div className="App">
      <section className="todoapp">
        <div>
          <header className="header">
            <h1>todos</h1>
            <NewTodo onInsert={onInsert} />
          </header>

          <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all" />

            <ul className="todo-list">
              {visibleTodos.map(todo => (
                <TodoItem
                  key={todo.key}
                  todo={todo}
                  onDelete={() => onDelete(todo)}
                  onToggle={() => onToggle(todo)}
                />
              ))}
            </ul>
          </section>

          <footer className="footer">
            <span className="todo-count">
              <strong>{todos.filter(todo => !todo.completed).length}</strong>
              <span> </span>
              <span>items</span>
              <span> left</span>
            </span>
            <ul className="filters">
              <li>
                <a
                  href="#/"
                  className="selected"
                  onClick={() => setFilter(ALL_TODOS)}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  href="#/active"
                  className=""
                  onClick={() => setFilter(ACTIVE_TODOS)}
                >
                  Active
                </a>
              </li>
              <li>
                <a
                  href="#/completed"
                  className=""
                  onClick={() => setFilter(COMPLETED_TODOS)}
                >
                  Completed
                </a>
              </li>
            </ul>
            <button className="clear-completed">Clear completed</button>
          </footer>
        </div>
      </section>

      <footer className="info">
        <p>Double-click to edit a todo</p>
      </footer>
    </div>
  )
}

export default App

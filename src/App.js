import React, { useState } from 'react'

import './App.css'

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

  const activeTodos = todos.filter(todo => !todo.completed)

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

  const onToggleAll = event => {
    setTodos(
      todos.map(todo => ({
        ...todo,
        completed: activeTodos.length > 0,
      }))
    )
  }

  const onEdit = editedTodo =>
    setTodos(
      todos.map(candidateTodo =>
        candidateTodo.key === editedTodo.key
          ? { ...candidateTodo, text: editedTodo.text }
          : candidateTodo
      )
    )

  const onClearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const getTodoStatus = () => {
    const filterText = filter !== ALL_TODOS ? filter : 'total'
    const todoCount = visibleTodos.length
    return `You have ${todoCount} ${filterText} todo${todoCount === 1 ? '' : 's'}`
  }

  return (
    <div className="App">
      <section className="todoapp">
        <div>
          <header className="header">
            <h1>todos</h1>
            <NewTodo onInsert={onInsert} />
          </header>

          <section className="main">
            <button
              className="toggle-all"
              aria-pressed={activeTodos.length === 0}
              onClick={onToggleAll}
            >
              <span className="accessible-hide">Mark all todos completed</span>
            </button>

            <ul className="todo-list">
              {visibleTodos.map((todo, index) => (
                <TodoItem
                  id={`todo-${index}`}
                  key={todo.key}
                  todo={todo}
                  onDelete={() => onDelete(todo)}
                  onToggle={() => onToggle(todo)}
                  onEdit={onEdit}
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
                <button
                  href="#/"
                  className="selected"
                  onClick={() => setFilter(ALL_TODOS)}
                >
                  All
                </button>
              </li>
              <li>
                <button
                  href="#/active"
                  className=""
                  onClick={() => setFilter(ACTIVE_TODOS)}
                >
                  Active
                </button>
              </li>
              <li>
                <button
                  href="#/completed"
                  className=""
                  onClick={() => setFilter(COMPLETED_TODOS)}
                >
                  Completed
                </button>
              </li>
            </ul>
            <button className="clear-completed" onClick={onClearCompleted}>
              Clear completed
            </button>
          </footer>
        </div>
      </section>
      <section className="accessible-hide" role="status" aria-live="polite">
        {getTodoStatus()}
      </section>
      <footer className="info">
        <p>Double-click to edit a todo</p>
      </footer>
    </div>
  )
}

export default App

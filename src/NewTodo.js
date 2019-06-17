import React, { useState } from 'react'

import { ENTER_KEY, ESCAPE_KEY } from './constants'

function NewTodo({ onInsert }) {
  const [newTodo, setNewTodo] = useState('')

  const onKeyDown = event => {
    if (event.keyCode === ESCAPE_KEY) {
      setNewTodo('')
      return
    } else if (event.keyCode !== ENTER_KEY) {
      return
    }

    event.preventDefault()

    const value = newTodo.trim()

    if (value) {
      onInsert(value)
      setNewTodo('')
    }
  }

  return (
    <input
      className="new-todo"
      onChange={event => setNewTodo(event.target.value)}
      onKeyDown={onKeyDown}
      placeholder="What needs to be done?"
      value={newTodo}
    />
  )
}

export default NewTodo

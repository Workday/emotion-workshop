import React from 'react'

function TodoItem({ todo: { completed, text }, onToggle, onDelete }) {
  return (
    <li className={completed ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={onToggle}
        />
        <label>{text}</label>
        <button className="destroy" onClick={onDelete} />
      </div>

      {/* <input className="edit" value={text} /> */}
    </li>
  )
}

export default TodoItem

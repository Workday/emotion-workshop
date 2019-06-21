import React, { useRef, useState } from 'react'

function TodoItem({
  id,
  todo,
  todo: { completed, text },
  onToggle,
  onDelete,
  onEdit,
}) {
  const editor = useRef(null)
  const [editing, setEditing] = useState(false)
  const [editText, setEditText] = useState(text)

  const classNames = []

  if (completed) {
    classNames.push('completed')
  }

  if (editing) {
    classNames.push('editing')
  }

  const onChange = event => setEditText(event.target.value)

  const onBlur = () => {
    setEditing(false)
    onEdit({ ...todo, text: editText })
  }

  return (
    <li className={classNames.join(' ')}>
      <div className="view">
        <button
          className="toggle"
          role="switch"
          aria-labelledby={id}
          aria-checked={completed}
          onClick={onToggle}
        />
        <span id={id} onDoubleClick={() => setEditing(true)}>{text}</span>
        <button className="destroy" onClick={onDelete}>
          <span className="accessible-hide">Remove todo</span>
        </button>
      </div>

      <input
        ref={editor}
        className="edit"
        value={editText}
        onChange={onChange}
        onBlur={onBlur}
      />
    </li>
  )
}

export default TodoItem

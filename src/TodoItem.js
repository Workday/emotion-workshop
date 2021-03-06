import React, { useRef, useState } from 'react'

function TodoItem({
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
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={onToggle}
        />
        <label onDoubleClick={() => setEditing(true)}>{text}</label>
        <button className="destroy" onClick={onDelete} />
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

import React from 'react'
import { TodoContext } from '../../contexts/TodoContext'
import './TodoCounter.css'

function TodoCounter() {
  const {
    completedTodos, 
    totalTodos
  } = React.useContext(TodoContext)

  return (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> To Do's
    </h1>
  )
}

export { TodoCounter }
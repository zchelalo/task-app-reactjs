import React from 'react'
import './TodoCounter.css'

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <h1 className={`TodoCounter ${!!loading ? 'TodoCounter--loading' : null}`}>
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> To Do's
    </h1>
  )
}

export { TodoCounter }
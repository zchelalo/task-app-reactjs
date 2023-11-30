import React from 'react'
import { TodoContext } from '../../contexts/TodoContext'
import './CreateTodoButton.css'

function CreateTodoButton() {
  const {
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)

  return (
    <button 
      type="button" 
      className="CreateTodoButton"
      onClick={() => setOpenModal(!openModal)}
    >
      +
    </button>
  )
}

export { CreateTodoButton }
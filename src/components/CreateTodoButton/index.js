import React from 'react'
import { TodoContext } from '../../hooks/useTodos'
import './CreateTodoButton.css'

function CreateTodoButton({
  openModal,
  setOpenModal
}) {

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
import React from 'react'
import { TodoContext } from '../../contexts/TodoContext'
import './TodoForm.css'

function TodoForm() {
  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext)
  const [newTodoValue, setNewTodoValue] = React.useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  return (
    <form 
      className='TodoForm'
      onSubmit={onSubmit}
    >
      <label>Escribe tu nuevo To Do</label>
      <textarea 
        placeholder='Planificar el proyecto de programación'
        value={newTodoValue}
        onChange={(e) => {
          if (newTodoValue === '' && e.target.value === ' '){
            e.target.value = ''
            return
          }
          setNewTodoValue(e.target.value)
        }}
      />
      <div className='TodoForm-buttonContainer'>
        <button
          type="button"
          className='TodoForm-button TodoForm-button--cancel'
          onClick={() => setOpenModal(false)}
        >Cancelar</button>
        <button
          type="submit"
          className='TodoForm-button TodoForm-button--add'
        >Agregar</button>
      </div>
    </form>
  )
}

export { TodoForm }
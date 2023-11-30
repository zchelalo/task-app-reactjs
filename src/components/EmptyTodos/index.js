import { BiTask } from "react-icons/bi"
import './EmptyTodos.css'

function EmptyTodos() {
  return (
    <div className='EmptyTodos-container'>
      <span className='EmptyTodos-icon'>
        <BiTask />
      </span>
      <p className='EmptyTodos-p'>
        ¡ Agregue un nuevo To Do desde el botón de abajo a la derecha !
      </p>
    </div>
  )
}

export { EmptyTodos } 
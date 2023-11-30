import { FaCheck } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"
import './TodoItem.css'

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className='TodoItem'>
      <span 
        className={`Icon Icon-check ${completed ? 'Icon-check--active' : null}`}
        onClick={onComplete}
      >
        <FaCheck />
      </span>

      <p 
        className={`TodoItem-p ${completed ? 'TodoItem-p--complete' : null}`}
      >
        {text}
      </p>

      <span 
        className='Icon Icon-delete'
        onClick={onDelete}
      >
        <FaXmark />
      </span>
    </li>
  )
}

export { TodoItem }
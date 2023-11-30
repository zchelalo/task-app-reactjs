import { MdError } from "react-icons/md"
import './TodosError.css'

function TodosError() {
  return (
    <div className='TodosError-container'>
      <span className='TodosError-icon'>
        <MdError />
      </span>
      <p className='TodosError-p'>
        Cuidado, hubo un error :/
      </p>
      <button
        type='button'
        className='TodosError-button'
        onClick={() => window.location.reload()}
      >Intentar de nuevo</button>
    </div>
  )
}

export { TodosError } 
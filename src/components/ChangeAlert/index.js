import { withStorageListener } from './withStorageListener'
import './ChangeAlert.css'

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div className='ChangeAlert-bg'>
        <div className='ChangeAlert-container'>
          <p>Parece que hubo cambios en los TODOs</p>
          <p>¿Quieres sincronizar tus TODOs?</p>
          <button
            className='TodoForm-button TodoForm-button--add'
            onClick={toggleShow}
          >
            Sí!
          </button>
        </div>
      </div>
    )
  }
  else {
    return null
  }
  
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }
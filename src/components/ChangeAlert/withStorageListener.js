import { useState } from 'react'

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener({ sincronize }) {
    const [storageChange, setStorageChange] = useState(false)

    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        console.log('Hay cambios chat')
        setStorageChange(true)
      }
    })

    const toggleShow = () => {
      sincronize()
      setStorageChange(false)
    }

    return (
      <WrappedComponent 
        show={storageChange}
        toggleShow={toggleShow}
      />
    )
  }
}

export { withStorageListener }
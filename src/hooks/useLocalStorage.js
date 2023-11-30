import React from 'react'

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      try {
        setItem(JSON.parse(localStorage.getItem(itemName)) || initialValue)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }, 1000)
  }, [])

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {
    item, 
    saveItem, 
    loading, 
    error
  }
}

export { useLocalStorage }

// const defaultTodos = [
//   { text: 'Terminar el proyecto', completed: true },
//   { text: 'Ir al mandado', completed: false },
//   { text: 'Hablar con el profesor', completed: true },
//   { text: 'Hacer la tarea de ingles', completed: false }
// ]
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
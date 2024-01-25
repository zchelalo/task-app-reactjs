import React from 'react'

function useLocalStorage(itemName, initialValue) {
  const [sincronizedItem, setSincronizedItem] = React.useState(true)
  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      try {
        setItem(JSON.parse(localStorage.getItem(itemName)) || initialValue)
        setLoading(false)
        setSincronizedItem(true)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }, 1000)
  }, [sincronizedItem])

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  const sincronizeItem = () => {
    setLoading(true)
    setSincronizedItem(false)
  }

  return {
    item, 
    saveItem, 
    loading, 
    error,
    sincronizeItem
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
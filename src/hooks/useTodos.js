import React from 'react'
import { useLocalStorage } from './useLocalStorage'

function useTodos() {
  const {
    item: todos, 
    saveItem: saveTodos, 
    loading,
    sincronizeItem: sincronizeTodos,
    error
  } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('')
  const [openModal, setOpenModal] = React.useState(false)

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLocaleLowerCase()
      const searchText = searchValue.toLocaleLowerCase()
      return todoText.includes(searchText)
    }
  )

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      text,
      completed: false
    })
    saveTodos(newTodos)
  }

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return {
    loading,
    error,
    completedTodos, 
    totalTodos, 
    searchValue, 
    setSearchValue, 
    searchedTodos,
    addTodo,
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    sincronizeTodos
  }
}

export { useTodos }
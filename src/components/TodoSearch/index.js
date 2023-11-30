import React from 'react'
import { TodoContext } from '../../contexts/TodoContext'
import './TodoSearch.css'

function TodoSearch() {
  const {
    searchValue, 
    setSearchValue
  } = React.useContext(TodoContext)

  return (
    <input 
      type="text" 
      placeholder="Terminar el proyecto"
      className='TodoSearch'
      value={searchValue}
      onChange={(e) => {
        if (searchValue === '' && e.target.value === ' '){
          e.target.value = ''
          return
        }
        setSearchValue(e.target.value)
      }}
    />
  )
}

export { TodoSearch }
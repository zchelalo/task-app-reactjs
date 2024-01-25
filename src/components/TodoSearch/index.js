import React from 'react'
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue }) {
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
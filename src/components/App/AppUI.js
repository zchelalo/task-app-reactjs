import React from 'react'
import { TodoContext } from '../../contexts/TodoContext'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos'
import { EmptySearchedTodos } from '../EmptySearchedTodos'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoForm } from '../TodoForm'
import { Modal } from '../Modal'

function AppUI() {
  const {
    totalTodos,
    loading,
    error,
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal
  } = React.useContext(TodoContext)

  return (
    <>

      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {loading ? 
          <>
            <TodosLoading /> 
            <TodosLoading /> 
            <TodosLoading /> 
          </>
          : 
          null
        }

        {error ? <TodosError /> : null}
        
        {
          (!loading && !error && totalTodos === 0) ? <EmptyTodos /> 
          : 
          (!loading && !error && searchedTodos.length === 0) ? <EmptySearchedTodos /> 
          : 
          searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))
        }
      </TodoList>

      <CreateTodoButton />

      {openModal ?
        <Modal>
          <TodoForm />
        </Modal>
        :
        null
      }

    </>
  )
}

export { AppUI }
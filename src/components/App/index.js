import React from 'react'
import { useTodos } from '../../hooks/useTodos'
import { TodoHeader } from '../TodoHeader'
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

function App() {
  const {
    totalTodos,
    loading,
    error,
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
    openModal,
    setOpenModal
  } = useTodos()

  return (
    <>

      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />

        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

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

      <CreateTodoButton
        openModal={openModal}
        setOpenModal={setOpenModal}
      />

      {openModal ?
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
        :
        null
      }

    </>
  )
}

export { App }
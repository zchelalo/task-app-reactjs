import './TodoList.css'

function TodoList({
  error,
  loading,
  totalTodos,
  searchedText,
  searchedTodos,
  onError,
  onLoading,
  onEmptyTodos,
  onEmptySearchedTodos,
  children
}) {
  return (
    <section>
      <ul className='TodoList'>
        {loading ? 
          onLoading()
          : 
          null
        }

        {error ? onError() : null}

        {
          (!loading && !error && totalTodos === 0) ? onEmptyTodos()
          : 
          (!loading && !error && searchedTodos?.length === 0) ? onEmptySearchedTodos(searchedText)
          : 
          (!loading && !error) ? searchedTodos?.map(children) : null
        }
      </ul>
    </section>
  )
}

export { TodoList }
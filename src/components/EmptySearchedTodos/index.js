import { MdContentPasteSearch } from "react-icons/md"
import './EmptySearchedTodos.css'

function EmptySearchedTodos() {
  return (
    <div className='EmptySearchedTodos-container'>
      <span className='EmptySearchedTodos-icon'>
        <MdContentPasteSearch />
      </span>
      <p className='EmptySearchedTodos-p'>
        No se encontraron resultados de busqueda :(
      </p>
    </div>
  )
}

export { EmptySearchedTodos }
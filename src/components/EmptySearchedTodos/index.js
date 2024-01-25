import { MdContentPasteSearch } from "react-icons/md"
import './EmptySearchedTodos.css'

function EmptySearchedTodos({ searchedText }) {
  return (
    <div className='EmptySearchedTodos-container'>
      <span className='EmptySearchedTodos-icon'>
        <MdContentPasteSearch />
      </span>
      <p className='EmptySearchedTodos-p'>
        No se encontraron resultados de busqueda para {searchedText} :(
      </p>
    </div>
  )
}

export { EmptySearchedTodos }
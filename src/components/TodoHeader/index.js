import { Children, cloneElement } from 'react'

function TodoHeader({ loading, children }) {
  return (
    <header>
      {
        Children
          .toArray(children)
          .map(child => cloneElement(child, { loading }))
      }
    </header>
  )
}

export { TodoHeader }
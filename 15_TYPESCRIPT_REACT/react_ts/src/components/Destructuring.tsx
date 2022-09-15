import React from 'react'

type Props = {
    title: string
    content: string
    commentQty: number
    tags: string[]
    // Enum
    category: Category
}

export enum Category {
  JS = 'Javascript',
  TS = 'Typescript',
  PY = 'Python', 
}

const Destructuring = ({title, content, commentQty, tags, category}: Props) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{commentQty}</p>
        <div>
            {tags.map(tag => (
                <span>#{tag}</span>
            ))}
        </div>
        <h4>Categoria: {category}</h4>
    </div>
  )
}

export default Destructuring;
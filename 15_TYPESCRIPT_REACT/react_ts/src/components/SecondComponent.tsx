import React from 'react'

type Props = {
    name: string
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <p>Segundo Componente</p>
        <p>Nome dele é {props.name}</p>
    </div>
  )
}

export default SecondComponent


const Container = ({children, value}) => {
  return (
    <div>
        <h2>Titulo do Container: {value}</h2>
        {children}
    </div>
  )
}

export default Container;


const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h2>Detalhes do Carro</h2>
        <table>
            <thead>
                <tr>
                    <th>Marca</th>
                    <th>KM</th>
                    <th>Cor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{brand}</td>
                    <td>{km}</td>
                    <td>{color}</td>
                </tr>
            </tbody>
        </table>
        {newCar && <p>Esse carro é novo!</p>}
    </div>
  )
}

export default CarDetails;
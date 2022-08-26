import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Product = () => {
    const { id } = useParams();
    const url = 'http://localhost:3000/products/' + id;

    const {data: product, loading, error } = useFetch(url);

  return (
    <>
        <p>ID do produto: {id}</p>
        {error && <p>{error}</p>}
        {loading && <p>Carregando...</p>}
        {product && (
        <div>
            <h2>{product.name}</h2>
            <h3>R$ {product.price}</h3>
            {/* Nested Routes */}
            <Link to={`/products/${product.id}/info`}>Mais Informações</Link>
        </div>
        )}
    </>
  )
}

export default Product;
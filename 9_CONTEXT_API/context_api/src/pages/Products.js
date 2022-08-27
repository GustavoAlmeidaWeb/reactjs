import { useFetch } from '../hooks/useFetch';
import { Link } from "react-router-dom";
import { Card, Container, Col, Row } from 'react-bootstrap';

const Products = () => {
 
  const url = 'http://localhost:3000/products';
  const { data: items, loading, error } = useFetch(url);
 
  return (
    <div>
      <Container>
        <Row>
          {error && <p>{error}</p>}
          {loading && <p>Carregando os dados...</p>}
          {items && items.map(item => (
          <Col key={item.id}>
            <Card border="primary" style={{ width: '18rem' }} className="mb-3">
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>R$ {item.price}</Card.Text>
                <Link className="btn btn-primary" to={`/products/${item.id}`}>+ Detalhes</Link>
              </Card.Body>
            </Card>
          </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Products;
import styles from './Home.module.css';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Form, Button, Row } from 'react-bootstrap';
import { useFetchDocument } from '../../hooks/useFetchDocuments';
import PostDetail from '../../components/PostDetail';

const Home = () => {

  const [query, setQuery] = useState('');
  const { documents: posts, loading } = useFetchDocument('posts');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  console.log({posts});

  return (
    <Container className='my-5 text-center'>
      <h1 className='text-center'>Nossos Posts mais recentes</h1>
      <Row>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Faça sua busca por aqui..." onChange={(e) => setQuery(e.target.value)} value={query} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Buscar
          </Button>
        </Form>
      </Row>
      <Row className='my-5'>
        <h2>Posts...</h2>
        {posts && posts.map((post) => (
          <PostDetail post={post} key={post.id} />
        ))}
        {posts && posts.length === 0 && (
          <div>
            <p>Não foram encontrados posts...</p>
            <Link className='btn btn-primary' to='/posts/create'>Criar primeiro post</Link>
          </div>
        )}
      </Row>
    </Container>
  )
}

export default Home;
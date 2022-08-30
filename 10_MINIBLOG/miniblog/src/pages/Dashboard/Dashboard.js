import style from './Dashboard.module.css';
import { Link } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useDeleteDocument } from '../../hooks/useDeleteDocument';
import { Container, Card, Button, Col, Row } from 'react-bootstrap';

const Dashboard = () => {

  const {user} = useAuthValue();
  const uid = user.uid;

  // Posts do usuario
  const { documents: posts, loading } = useFetchDocuments('posts', null, uid); 
  const { deleteDocument } = useDeleteDocument('posts');

  return (
    <Container className='text-center my-5'>
        <h1>Dashboard</h1>
        {posts && posts.length === 0 ? (
          <div>
            <p>Não foram encontrados posts...</p>
            <Link to='/posts/create' className='btn btn-primary'>Criar Primeiro Post</Link>
          </div>
        ) : (
          <Row>
            {posts && posts.map((post) => (
              <Col lg={4}>
                <Card style={{ width: '18rem' }} key={post.id}>
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.body}</Card.Text>
                    <Link to={`/posts/${post.id}`} className='btn btn-primary'>Ver</Link>&nbsp;
                    <Link to={`/posts/edit/${post.id}`} className='btn btn-primary'>Editar</Link>&nbsp;
                    <Button variant='primary' onClick={() => deleteDocument(post.id)}>Excluir</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
    </Container>
  )
}

export default Dashboard;
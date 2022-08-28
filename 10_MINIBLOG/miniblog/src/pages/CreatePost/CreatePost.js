import style from './CreatePost.module.css';
import { Container, Form, Button, Alert } from 'react-bootstrap';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Container className='my-5'>
      <h2 className='text-center'>Crie seu Post</h2>
      <p className='text-center'>Escreva o que quiser e compartilhe conosco.</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Título do Post</Form.Label>
          <Form.Control type="text" name="title" placeholder="Insira o título do seu post" onChange={(e) => setTitle(e.target.value)} value={title}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>URL</Form.Label>
          <Form.Control type="text" name="image" placeholder="Insira o link da imagem de destaque do seu post" onChange={(e) => setImage(e.target.value)} value={image} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Conteúdo do Post</Form.Label>
          <Form.Control as="textarea" name="body" placeholder="Coloque o texto do seu post aqui" onChange={(e) => setBody(e.target.value)} value={body} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Tags</Form.Label>
          <Form.Control type="text" name="tags" placeholder="Coloque suas tags, separadas por vírgula" onChange={(e) => setTags(e.target.value)} value={tags} />
        </Form.Group>
        <Button variant="primary" type="submit">Cadastrar</Button>
        {/* {!loading && <Button variant="primary" type="submit">Cadastrar</Button>}
        {loading && <Button variant="primary" type="submit" disabled>Aguarde...</Button>}
        {error && 
            <Alert variant='danger' className='my-3'>{error}</Alert>
        } */}
      </Form>
    </Container>
  )
}

export default CreatePost
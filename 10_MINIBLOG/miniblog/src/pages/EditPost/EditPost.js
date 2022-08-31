import styles from './EditPost.module.css';
import { Container, Form, Button, Alert } from 'react-bootstrap';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';
import { useFetchDocument } from '../../hooks/useFetchDocument';

const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument('posts', id);

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setImage(post.image);
      setBody(post.body);

      const textTags = post.tagsArray.join(', ');
      setTags(textTags);
    }
  },[post])


  const navigate = useNavigate();
  const {user} = useAuthValue();
  const {updateDocument, response} = useUpdateDocument('posts');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    // Validate img URL
    try {
      new URL(image);
    } catch (error) {
      setFormError('A imagem precisa ser uma URL.');
    }

    // criar o array tags
    const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase());

    // checar todos os valores
    if (!title || !image || !tags || !body) {
      setFormError('Todos os campos devem ser preenchidos');
    }

    if(formError) return;

    const data = { title, image, body, tagsArray, uid: user.uid, createdBy: user.displayName };
    updateDocument(id, data);
    navigate('/dashboard');
  }
  return (
    <Container className='my-5'>
      {post && (
        <>
          <h2 className='text-center'>Editando o post: {post.title}</h2>
          <p className='text-center'>Altere o post como desejar...</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Título do Post</Form.Label>
              <Form.Control type="text" name="title" placeholder="Insira o título do seu post" onChange={(e) => setTitle(e.target.value)} value={title}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>URL</Form.Label>
              <Form.Control type="text" name="image" placeholder="Insira o link da imagem de destaque do seu post" onChange={(e) => setImage(e.target.value)} value={image} />
            </Form.Group>
            <p className={styles.title_preview}>Preview da Imagem</p>
            <img src={post.image} alt={post.title} className={styles.img_preview} />
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Conteúdo do Post</Form.Label>
              <Form.Control as="textarea" name="body" placeholder="Coloque o texto do seu post aqui" onChange={(e) => setBody(e.target.value)} value={body} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tags</Form.Label>
              <Form.Control type="text" name="tags" placeholder="Coloque suas tags, separadas por vírgula" onChange={(e) => setTags(e.target.value)} value={tags} />
            </Form.Group>
            {!response.loading && <Button variant="primary" type="submit">Editar</Button>}
            {response.loading && <Button variant="primary" type="submit" disabled>Aguarde...</Button>}
            {response.error && 
                <Alert variant='danger' className='my-3'>{response.error}</Alert>
            }
            {formError && 
                <Alert variant='danger' className='my-3'>{formError}</Alert>
            }
          </Form>
        </>
      )}
    </Container>
  )
}

export default EditPost;
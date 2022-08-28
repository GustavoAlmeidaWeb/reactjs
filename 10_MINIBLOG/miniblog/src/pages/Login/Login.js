// import styles from './Login.module.css';
import { useState, useEffect } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useAuthentication } from '../../hooks/useAuthentication';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const {login, error: authError, loading} = useAuthentication();

  const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
      const user = {
          email,
          password
      }

      const res = await login(user);
      console.log(res);
  }

  useEffect(()=>{
      if(authError) {
          setError(authError);
      }
  }, [authError])

  return (
    <Container className='my-5'>
      <h2 className='text-center'>Entrar</h2>
      <p className="text-center">Faça seu login para poder utilizar o sistema.</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} value={password}/>
        </Form.Group>
        {!loading && <Button variant="primary" type="submit">Entrar</Button>}
        {loading && <Button variant="primary" type="submit" disabled>Aguarde</Button>}
        {error && 
            <Alert variant='danger' className='my-3'>{error}</Alert>
        }
      </Form>
    </Container>
  )
}

export default Login;
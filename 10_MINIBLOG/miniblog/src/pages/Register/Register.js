import styles from './Register.module.css';
import { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Register = () => {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

  return (
    <Container className='my-5'>
        <h2 className='text-center'>Cadastre-se para postar</h2>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome </Form.Label>
                <Form.Control type="text" name="displayName" placeholder="Digite seu nome" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" name="email" placeholder="Digite seu e-mail" />
                <Form.Text className="text-muted">
                    Não compartilhe seu e-mail com ninguém.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Digite uma senha" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirme sua senha</Form.Label>
                <Form.Control type="password" name="confirmPassword" placeholder="Confirme sua senha" />
            </Form.Group>
            <Button variant="primary" type="submit">Enviar</Button>
        </Form>
    </Container>
  )
}

export default Register;
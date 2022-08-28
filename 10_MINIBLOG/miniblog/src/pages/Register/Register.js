import styles from './Register.module.css';
import { useState, useEffect } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { AuthErrorCodes } from 'firebase/auth';
import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const {createUser, error: authError, loading} = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const user = {
            displayName,
            email,
            password
        }
        if(password !== confirmPassword) {
            setError('As senhas precisam ser iguais!');
            return;
        }

        const res = await createUser(user);
        console.log(res);
    }

    useEffect(()=>{
        if(authError) {
            setError(authError);
        }
    }, [authError])

  return (
    <Container className='my-5'>
        <h2 className='text-center'>Cadastre-se para postar</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome </Form.Label>
                <Form.Control type="text" name="displayName" placeholder="Digite seu nome" onChange={(e)=> setDisplayName(e.target.value)} value={displayName} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" name="email" placeholder="Digite seu e-mail" onChange={(e)=> setEmail(e.target.value)} value={email} required />
                <Form.Text className="text-muted">
                    Não compartilhe seu e-mail com ninguém.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Digite uma senha" onChange={(e)=> setPassword(e.target.value)} value={password} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirme sua senha</Form.Label>
                <Form.Control type="password" name="confirmPassword" placeholder="Confirme sua senha" onChange={(e)=> setConfirmPassword(e.target.value)} value={confirmPassword} required />
            </Form.Group>
            {!loading && <Button variant="primary" type="submit">Cadastrar</Button>}
            {loading && <Button variant="primary" type="submit" disabled>Aguarde...</Button>}
            {error && 
                <Alert variant='danger' className='my-3'>{error}</Alert>
            }
        </Form>
    </Container>
  )
}

export default Register;
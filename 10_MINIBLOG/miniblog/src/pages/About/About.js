import styles from './About.module.css';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Container className='text-center my-5'>
      <h2>Sobre o <strong>MiniBlog</strong></h2>
      <p>Esse projeto consiste em um blog feito com React no front-end e Firebase no Back-end.</p>
      <Link to='/posts/create' className='btn btn-primary'>Criar Post</Link>
    </Container>
  ) 
}

export default About;
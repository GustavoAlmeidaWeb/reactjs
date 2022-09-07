import './Profile.css';
import { Link, useParams } from 'react-router-dom';

// Hooks
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import { upload } from '../../utils/config';
import Message from '../../components/Message';

import { getUserDetails } from '../../slices/userSlice';

import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';



const Profile = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const {user, loading} = useSelector((state) => state.user);
    const {user: userAuth} = useSelector((state) => state.auth);

    // Photo
    const newPhotoForm = useRef();
    const editPhotoForm = useRef();

    // Load user data
    useEffect(() => {

        dispatch(getUserDetails(id));

    }, [dispatch, id]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    if(loading){
        return <p>Carregando...</p>
    }

  return (
    <Container>
        <Row className='profile-info'>
            <Col lg={5} className='img-detail'>
                {user.profileImage && (
                    <img src={`${upload}/users/${user.profileImage}`} alt={user.name} />
                )}
            </Col>
            <Col lg={7} className='name-bio-detail'>
                {user && (
                    <>
                        <h2 className='display-6'>{user.name}</h2>
                        <p>{user.bio}</p>
                    </>
                )}
            </Col>
        </Row>
        <Row>
            {id === userAuth._id && (
                <>
                    <Col md={{ span: 6, offset: 3 }} ref={newPhotoForm} className='my-5'>
                        <p className='display-6 text-center'>Compartilhe algo com seus amigos...</p>
                        <Form onSubmit={handleSubmit} className="mb-3">
                            <Form.Group className="mb-3" >
                                <Form.Label>Título</Form.Label>
                                <Form.Control type="text" placeholder="Insira um título" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Imagem do Perfil</Form.Label>
                                <Form.Control type="file" size="lg"/>
                            </Form.Group>
                            <Form.Label className="d-grid">
                                <Button type="submit" size="lg" variant="primary">Postar</Button>
                            </Form.Label>
                        </Form>
                    </Col>
                </>
            )}
        </Row>
    </Container>
  )
}

export default Profile
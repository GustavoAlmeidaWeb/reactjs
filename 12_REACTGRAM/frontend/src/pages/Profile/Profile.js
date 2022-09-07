import './Profile.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Hooks
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import { upload } from '../../utils/config';
import Message from '../../components/Message';

import { getUserDetails } from '../../slices/userSlice';
import { publishPhoto, resetMessage, getUserPhotos } from '../../slices/photoSlice';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Profile = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const {user, loading} = useSelector((state) => state.user);
    const {user: userAuth} = useSelector((state) => state.auth);
    const { photos, loading: loadingPhoto, error: errorPhoto, message: messagePhoto } = useSelector((state) => state.photo);

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');

    // Photo
    const newPhotoForm = useRef();
    const editPhotoForm = useRef();

    // Load user data
    useEffect(() => {

        dispatch(getUserDetails(id));
        dispatch(getUserPhotos(id));

    }, [dispatch, id]);

    const handleFile = (e) => {
        // Image preview
        const image = e.target.files[0];
        
        setImage(image);
    
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const photoData = {
            title,
            image
        }

        // Build Form Data
        const formData = new FormData();
        const photoFormData = Object.keys(photoData).forEach((key) => formData.append(key, photoData[key]));
        
        formData.append('photo', photoFormData);

        dispatch(publishPhoto(formData));

        setTitle('');
        setImage('');

        setTimeout(() => {
            dispatch(resetMessage());
        }, 2000);

    };

    if(loading){
        return <p>Carregando...</p>
    };

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
                                <Form.Control type="text" placeholder="Insira um título" onChange={(e) => setTitle(e.target.value)} value={title || ''}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Imagem do Perfil</Form.Label>
                                <Form.Control type="file" size="lg" onChange={handleFile}/>
                            </Form.Group>
                            <Form.Label className="d-grid">
                                {!loadingPhoto && <Button type="submit" size="lg" variant="primary">Postar</Button>}
                                {loadingPhoto && <Button type="submit" size="lg" variant="primary" disabled>Aguarde...</Button>}
                                {errorPhoto && <Message msg={errorPhoto} type='danger'/>}
                                {messagePhoto && <Message msg={messagePhoto} type='success'/>}
                            </Form.Label>
                        </Form>
                    </Col>
                </>
            )}
        </Row>
        <Row>
            <>
                {photos && <p className='display-6 text-center'>Fotos Publicadas</p>}
                {photos.length === 0 && <p className='display-6 text-center'>Não há fotos Publicadas...</p>}
                <Col md={{ span: 8, offset: 2 }} className='my-5 container-photos'>
                    {photos && photos.map((photo) => (
                        <>
                            <div className="photo text-center" key={photo._id}>
                                {photo.image && (
                                    <img src={`${upload}/photos/${photo.image}`} alt={photo.title} />
                                )}
                                {id === userAuth._id ? (
                                    <div className="actions">
                                        <Link to={`/photos/${photo._id}`} className='btn text-white' >
                                            <FontAwesomeIcon icon="eye"/>
                                        </Link>
                                        <FontAwesomeIcon icon="pencil" className='btn text-white' />
                                        <FontAwesomeIcon icon="xmark" className='btn text-white' />
                                    </div>
                                ) : (
                                    <Link to={`/photos/${photo._id}`}>Ver</Link>
                                )}
                            </div>
                        </>
                    ))}
                </Col>
            </>
        </Row>
    </Container>
  )
}

export default Profile
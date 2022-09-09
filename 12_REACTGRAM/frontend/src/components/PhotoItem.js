import './PhotoItem.css';

import { upload } from '../utils/config';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';


const PhotoItem = ({ photo, handleLike }) => {
  return (
    <Container className='photo-item'>
        <Row>
            <Col md={{ span: 8, offset: 2 }} className="mt-5">
                {photo.image && (
                    <img src={`${upload}/photos/${photo.image}`} alt={photo.title} onDoubleClick={() => handleLike(photo)} />
                )}
                <h2 className='my-3'>{photo.title}</h2>
                <p>Publicado por: <Link to={`/users/${photo.userId}`} >{photo.userName}</Link></p>
            </Col>
        </Row>
    </Container>
  )
}

export default PhotoItem
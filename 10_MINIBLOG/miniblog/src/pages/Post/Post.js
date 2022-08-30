import { useParams } from 'react-router-dom';

// Hook
import { useFetchDocument } from '../../hooks/useFetchDocument';

import { Container } from 'react-bootstrap';

const Post = () => {

    const { id } = useParams();
    const { document: doc, loading } = useFetchDocument('posts', id);

  return (
    <Container className='text-center my-5'>
        {loading && <p>Caregando...</p>}
        {doc && (
          <>
            <h1>{doc.title}</h1>
            <p><i>{doc.createdBy}</i></p>
            <img src={doc.image} alt={doc.title} />
            <div className='my-3'>
              <p>{doc.body}</p>
              <p>
                {doc.tagsArray.map((tag) => (
                  <span key={tag}><strong>#{tag}</strong> </span>
                ))}
              </p>
            </div>
          </>
        )}
    </Container>
  )
}
export default Post;
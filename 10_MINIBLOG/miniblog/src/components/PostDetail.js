import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const PostDetail = ({post}) => {
  return (
    <Container>
        <img src={post.image} alt={post.title} />
        <h2>{post.title}</h2>
        <p>{post.createdBy}</p>
        <div>
            {post.tagsArray.map((tag) => (
                <p key={tag}><span>#</span>{tag}</p>
            ))}
        </div>
        <Link to={`/posts/${post.id}`} className="btn btn-primary">Ler mais</Link>
    </Container>
    
  )
}

export default PostDetail;

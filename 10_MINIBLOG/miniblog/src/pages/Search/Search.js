import PostDetail from "../../components/PostDetail";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Search = () => {

        const query = useQuery();
        const search = query.get('q');

        const {documents: posts} = useFetchDocuments('posts', search);


  return (
    <Container className="text-center my-5">
        <h2 className="my-3">Resultados da busca...</h2>
        <div>
            {posts && posts.length === 0 && (
                <>
                    <p>Não foram encontrados resultados a partir de sua busca...</p>
                    <Link to='/' className="btn btn-primary">Voltar</Link>
                </>
            )}
            {posts && posts.map((post) => 
                <PostDetail key={post.id} post={post} />
            )}
        </div>
    </Container>
  )
}

export default Search;
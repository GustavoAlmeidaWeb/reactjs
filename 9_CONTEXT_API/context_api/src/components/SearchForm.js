import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchForm = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/search?q=' + query);
    }
  return (

    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Control
        type="search"
        placeholder="Busca"
        className="me-2"
        aria-label="Search"
        onChange={(e)=> setQuery(e.target.value)}
      />
      <Button variant="dark"><FontAwesomeIcon icon="search" /></Button>
    </Form>
  )
}

export default SearchForm;


import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const SearchForm = () => {

  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault();
      if(query) {
        return navigate(`/search?q=${query}`);
      }
  }

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
        <Form.Control
        type="search"
        placeholder="Buscar..."
        className="me-2"
        aria-label="Search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        />
        <Button type='submit' variant="outline-light">Buscar</Button>
    </Form>
  )
}

export default SearchForm;
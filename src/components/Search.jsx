import React from 'react';
import { Form } from 'react-bootstrap';

const Search = ({ onSearch }) => {
  const search = (e) => {
    onSearch(e.target.value);
  };
  return (
    <div className='container'>
      <Form.Control onChange={search} type="text" placeholder="Search ..." />
    </div>
  )
}

export default Search;
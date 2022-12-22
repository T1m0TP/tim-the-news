import React from 'react';
import './styles.css';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className='searchBar-wrap'>
    <form onSubmit={formSubmit}>
      <input
        type='text'
        placeholder='Search by category'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button>Search 🔍</button>
    </form>
  </div>
);

export default SearchBar;

import React, { useState } from 'react';
import EmptyList from '../../components/items/EmptyList';
import List from '../../components/Home/List';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import { articleList } from '../../config/data';

const Home = () => {
  const [articles, setArticles] = useState(articleList);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for article by category
  const handleSearchResults = () => {
    const allArticles = articleList;
    const filteredArticles = allArticles.filter((article) =>
      article.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setArticles(filteredArticles);
  };

  // Clear search and show all articles
  const handleClearSearch = () => {
    setArticles(articleList);
    setSearchKey('');
  };

  return (
    <div>
      <Header />
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {!articles.length ? <EmptyList /> : <List articles={articles} />}
    </div>
  );
};

export default Home;

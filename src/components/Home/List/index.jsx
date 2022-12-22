import React from 'react';
import ArticleItem from './ArticleItem';
import './styles.css';

const List = ({ articles }) => {
  return (
    <div className='List-wrap'>
      {articles.map((articles) => (
        <ArticleItem article={articles} />
      ))}
    </div>
  );
};

export default List;

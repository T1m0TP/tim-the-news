import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router';
import { articleList } from '../../config/data';
import Chip from '../../components/items/Chip';
import EmptyList from '../../components/items/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';


const Article = () => {
  const { id } = useParams();
  const [article, setArticles] = useState(null);

  useEffect(() => {
    let article = articleList.find((article) => article.id === parseInt(id));
    if (article) {
      setArticles(article);
    }
  }, []);

  return (
    <>
      <Link className='article-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {article ? (
        <div className='article-wrap'>
          <header>
            <p className='article-date'>Published {article.createdAt}</p>
            <h1>{article.title}</h1>
            <div className='article-subCategory'>
              {article.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <ReactPlayer url={article.video} controls playing width="100%" height="100%" />
          <p className='article-desc'>{article.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Article;

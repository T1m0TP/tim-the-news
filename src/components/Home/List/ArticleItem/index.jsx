import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../items/Chip';
import './styles.css';

const ArticleItem = ({
  article: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className='articleItem-wrap'>
      <img className='articleItem-cover' src={cover} alt='cover' />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className='articleItem-desc'>{description}</p>
      <footer>
        <div className='articleItem-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='articleItem-link' to={`/news/${id}`}>
          Read →
        </Link>
      </footer>
    </div>
  );
};

export default ArticleItem;

import React from 'react';
import { Link } from 'react-router-dom';

function CardsItem(props) {
  const state = { 
    article: props.article
  };

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path} state={state}>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.article.title}</h5>
            <h5 className='cards__item__text'>{props.article.created_date}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardsItem;

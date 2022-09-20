import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardItem from './CardItem';
import './Cards.css';
import { getAllArticle } from '../redux/actions/article';

function Cards() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.article.articles);
  const loading  = useSelector((state) => state.article.loading);
  const error    = useSelector((state) => state.article.error);

  useEffect(() => {
    dispatch(getAllArticle());
    console.log("Start userEffect: Cards.js");

    return () => {
      console.log("End userEffect: Cards.js")
    }
  }, []);

  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {!error && loading && <p>Loading...</p>}

          {articles.length > 0 && articles.map((article) => (
            <CardItem
                key={article.id}
                article={article}
                path={"/article"}
            /> 
          ))}

          {!error && articles.length === 0 && !loading && <p>No Articles available!</p>}
          {error  && <p>{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Cards;

import React from 'react';
import NewsCard from '../NewsCard';

const NewsList = ({ articles }) => {
  return (
    <div className='flex flex-col'>
      {articles.map((article, index, arr) => {
        return (
          <NewsCard
            key={index}
            sourceName={article.source.name}
            src={article.urlToImage}
            title={article.title}
            author={article.author}
            description={article.description}
            publishedAt={article.publishedAt}
            notLastChild={!(arr.length === index + 1)}
          />
        );
      })}
    </div>
  );
};

export default NewsList;

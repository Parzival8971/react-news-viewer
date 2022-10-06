import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from './Categories';
import NewsList from './NewsList';

const NewsPage = () => {
  const params = useParams();
  console.log(params);
  const category = params.category || 'all';
  console.log(category);
  return (
    <Categories>
      <NewsList />
    </Categories>
  );
};

export default NewsPage;

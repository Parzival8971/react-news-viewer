import React, { useEffect, useState } from 'react';
import BounceLoader from 'react-spinners/ClipLoader';
import axios from 'axios';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  min-height: 768px;
  margin: 0 auto;
  background: white;
  padding: 2px 20px;
  padding-top: 4rem;
  padding-bottom: 4rem;

  @media screen and (max-width: 768px) {
    width: 80%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const LodingBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 768px;
  min-height: 568px;
  margin: 0 auto;
  background: white;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    width: 80%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=9b9cc0aa70394bc4950b08fb1faca2f7`
        );
        setArticles(response.data.articles.slice(0, 5));
        console.log(articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return (
      <LodingBlock>
        <BounceLoader color='#36d7b7' size={50} />
      </LodingBlock>
    );
  }

  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;

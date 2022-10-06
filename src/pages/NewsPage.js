import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const Template = styled.div`
  border-radius: 5px;
  margin-top: 4rem;
  margin-bottom: 4rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const NewsPage = () => {
  const params = useParams();
  // 카테고리가 선택되지 않았으면 기본값 all로 사용
  const category = params.category || 'all';
  return (
    <Template>
      <Categories />
      <NewsList category={category} />
    </Template>
  );
};

export default NewsPage;

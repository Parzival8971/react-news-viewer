import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const CategoriesBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  background: white;
  border-bottom: 1px solid #e2e2e2;
  border-top: 1px solid #e2e2e2;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  @media screen and (max-width: 768px) {
    font-size: 0.825rem;
    margin-left: 0rem;
    margin-right: 0rem;
  }

  &:hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }

  & {
    margin-left: 1rem;
    margin-right: 1rem;
    @media screen and (max-width: 768px) {
      margin-left: 0.425rem;
      margin-right: 0.425rem;
    }
  }
`;
// 아래서 뺀다 { onSelect, category }

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          end={c.name === 'all'}
          // className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
          to={c.name === 'all' ? '/' : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
    // ---
    //   <CategoriesBlock>
    //   {categories.map((c) => (
    //     <Category
    //       key={c.name}
    //       activeClassName='active'
    //       exact={c.name === 'all'}
    //       to={c.name === 'all' ? '/' : `/${c.name}`}
    //     >
    //       {c.text}
    //     </Category>
    //   ))}
    // </CategoriesBlock>
    // --------
    // <CategoriesBlock>
    //   {categories.map((c) => (
    //     <Category
    //       key={c.name}
    //       active={category === c.name}
    //       onClick={() => onSelect(c.name)}
    //     >
    //       {c.text}
    //     </Category>
    //   ))}
    // </CategoriesBlock>
  );
};

export default Categories;

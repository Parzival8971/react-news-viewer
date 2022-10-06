import React, { useCallback, useState } from 'react';
import Categories from './components/Categories';
import NewsList from './components/NewsList';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

function App() {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback((category) => {
  //   setCategory(category);
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<NewsPage />} />
          <Route path='/:category' element={<NewsPage />} />
          {/* <div className='App'>
            <Categories category={category} onSelect={onSelect} />
            <NewsList category={category} />>
          </div> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

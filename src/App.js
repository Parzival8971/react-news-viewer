import './App.css';
import { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=9b9cc0aa70394bc4950b08fb1faca2f7'
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='App'>
      <NewsList />
    </div>
  );
}

export default App;

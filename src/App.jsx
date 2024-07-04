import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import EditPost from './components/EditPost';
import AddPost from './components/AddPost';
import itemsData from './data/items.json';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(itemsData);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData} />} />
        <Route path="/addpost" element={<AddPost data={data} setData={setData} />} />
        <Route path="/edit/:id" element={<EditPost data={data} setData={setData} />} />
      </Routes>
    </Router>
  );
}

export default App;




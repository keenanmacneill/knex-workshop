import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Vehicles from './components/Vehicles';
import People from './components/People';
import Locations from './components/Locations'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/vehicles' element={<Vehicles />} />
      <Route path='/People' element={<People />} />
      <Route path='/Locations' element={<Locations />} />
    </Routes>
  );
};

export default App
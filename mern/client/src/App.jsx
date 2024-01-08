import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Start from './pages/Start'
import Upload from './pages/Upload';


import NavigationBar from './components/navbar';
import './components/styles.css'
const App = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/upload" element={<Upload />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/start" element={<Start />} />

      </Routes>
      </div>
  )
  }
export default App;

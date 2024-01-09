import React from 'react';
import {Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import NavigationBar from './components/navbar';
import UploadSyllabus from './components/uploadsyllabus';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/upload" element={<UploadSyllabus />} />
        <Route path='/' element={<Home />}></Route>
        <Route path='/books/create' element={<CreateBook />}></Route>
      </Routes>
      </div>
  )
  }
export default App;

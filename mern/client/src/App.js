import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navbar';
import UploadSyllabus from './components/uploadsyllabus';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/upload" element={<UploadSyllabus />} />
      </Routes>
    </Router>
  );
};

export default App;

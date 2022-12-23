import React from 'react'
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Upload from './Pages/Upload';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Upload />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

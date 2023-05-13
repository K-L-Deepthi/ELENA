import React from 'react';
import './App.css';
import Home from './Home.js';
import PossibleRoutes from './PossibleRoutes.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Your header component */}
        {/* ... */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/possibleroutes" element={<PossibleRoutes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

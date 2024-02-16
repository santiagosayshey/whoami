import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Dashboard from './components/pages/Dashboard';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
}

export default App;

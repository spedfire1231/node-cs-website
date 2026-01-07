import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Servers from './pages/Servers';
import Rules from './pages/Rules';
import Privileges from './pages/Privileges';
import Contacts from './pages/Contacts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servers" element={<Servers />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/privileges" element={<Privileges />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
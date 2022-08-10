import './App.css';
import React from "react";
import { Home } from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { Article } from './pages/Article/Article';
import { Header } from './component/Header';

function App() {
  return (
    <div className="App">
      < Header/>
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/article/:articleId' element={< Article />} />
      </Routes>
    </div>
  );
}

export default App;

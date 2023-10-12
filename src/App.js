import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/navigation';
import Home from './components/Home/Home';
import Article from './components/Article/Article';
import Contact  from './components/Contact/Contact';
import NotFound from './components/Not_Found/NotFound';
function App() {
  return (
    <BrowserRouter>
      <div className="App">    
        <Navigation />
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/article" element={<Article />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<NotFound />}></Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar   from './components/Navbar';
import Home     from './components/pages/Home';
import Article  from './components/pages/Article';
import Site     from './components/pages/Site';
import Profile  from './components/pages/Profile';
import './App.css';
import { marked }  from 'marked';
import highlightjs from 'highlight.js';

function App() {
  // Highlight setting.
  marked.setOptions({
    highlight: (code, lang) => {
      return highlightjs.highlightAuto(code, [lang]).value;
    },
  });

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'        exact element={<Home />} />
          <Route path='/article' exact element={<Article />} />
          <Route path='/site'    exact element={<Site />} />
          <Route path='/profile' exact element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

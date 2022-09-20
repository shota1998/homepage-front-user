import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar   from './components/Navbar';
import Footer   from './components/Footer';
import Home     from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp   from './components/pages/SignUp';
import Article  from './components/pages/Article';
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
          <Route path='/'         exact element={<Home />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/products' exact element={<Products />} />
          <Route path='/sign-up'  exact element={<SignUp />} />
          <Route path='/article'  exact element={<Article />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;

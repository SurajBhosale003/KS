import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EntryQuoteImg from './pages/EntryQuoteImg';
import FlowerBlood from './pages/FlowerBlood';
import Gallary from './pages/Gallary';
import LifeTrgImg from './pages/LifeTrgImg';
import QuestionPage from './pages/QuestionPage';
import Thoughts from './pages/Thoughts';
import VOD from './pages/VOD';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entry-quote-img" element={<EntryQuoteImg />} />
        <Route path="/flower-blood" element={<FlowerBlood />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/life-trg-img" element={<LifeTrgImg />} />
        <Route path="/questions" element={<QuestionPage />} />
        <Route path="/thoughts" element={<Thoughts />} />
        <Route path="/vod" element={<VOD />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Frame2 from './pages/Frame2';
import Frame3 from './pages/Frame3';
import Frame4 from './pages/Frame4';
import Frame5Gall from './pages/Frame5Gall';
import Frame5Words from './pages/Frame5Words';
import Frame7 from './pages/Frame7';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frame2" element={<Frame2 />} />
        <Route path="/frame3" element={<Frame3 />} />
        <Route path="/frame4" element={<Frame4 />} />
        <Route path="/frame5" element={<Frame5Gall />} />
        <Route path="/frame6" element={<Frame5Words />} />
        <Route path="/Frame7" element={<Frame7 />} />
      </Routes>
    </Router>
  );
}

export default App;

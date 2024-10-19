import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Lazy load the components
const Home = lazy(() => import('./pages/Home'));
const Frame2 = lazy(() => import('./pages/Frame2'));
const Frame3 = lazy(() => import('./pages/Frame3'));
const Frame4 = lazy(() => import('./pages/Frame4'));
const Frame5Gall = lazy(() => import('./pages/Frame5Gall'));
const Frame5Words = lazy(() => import('./pages/Frame5Words'));
const Frame7 = lazy(() => import('./pages/Frame7'));
import Loading from './pages/Loading';

// Component to display on mobile devices
const MobileWarning = () => (
  <div className="flex items-center justify-center min-h-screen">
  <div className="text-center p-5 ">
    <h1 className="text-3xl font-bold text-gray-800 mb-4 hachi-maru-pop-font">
      Please use a laptop for a better experience.
    </h1>
    <img src='frame4/PicLeft.gif' alt="Animated GIF" className="ml-4 rounded-lg shadow-lg" />
  </div>
</div>
);

function App() {
  // Check if the device is a phone
  const isMobile = window.innerWidth <= 768; // Adjust the width as needed

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Render MobileWarning if on a mobile device */}
          <Route path="/" element={isMobile ? <MobileWarning /> : <Home />} />
          <Route path="/frame2" element={isMobile ? <MobileWarning /> : <Frame2 />} />
          <Route path="/frame3" element={isMobile ? <MobileWarning /> : <Frame3 />} />
          <Route path="/frame4" element={isMobile ? <MobileWarning /> : <Frame4 />} />
          <Route path="/frame5" element={isMobile ? <MobileWarning /> : <Frame5Gall />} />
          <Route path="/frame6" element={isMobile ? <MobileWarning /> : <Frame5Words />} />
          <Route path="/frame7" element={isMobile ? <MobileWarning /> : <Frame7 />} />
          {/* <Route path="/frame8" element={<Loading />} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import HomeLayout from './pages/home/HomeLayout';
import LandingPage from './pages/home/LandingPage';
import AboutPage from './pages/home/AboutPage';
import SignupPage from './pages/home/SignupPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="" element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
      <Route path="/teacher" element={<div>Teacher</div>} />
    </Routes>
  );
}

export default App;

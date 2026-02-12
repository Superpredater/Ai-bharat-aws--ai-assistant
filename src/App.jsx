import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import TechnicalSpace from './pages/TechnicalSpace';
import NonTechnicalSpace from './pages/NonTechnicalSpace';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technical" element={<TechnicalSpace />} />
        <Route path="/non-technical" element={<NonTechnicalSpace />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

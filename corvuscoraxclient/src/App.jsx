import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import PdfPreview from './PdfPreview'
import Navbar from './pages/Navbar'
import AboutPage from './pages/AboutPage';
import Converter from './pages/Converter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Index />} /> */}
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/team" element={<Team />} /> */}
        {/* <Route path="/documentation" element={<Docs />} /> */}
        {/* <Route path="/calendar" element={<Calendar />} /> */}
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        <Route path="/converter" element={<Converter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

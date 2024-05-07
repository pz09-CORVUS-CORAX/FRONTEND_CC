import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PdfPreview from './PdfPreview'
import Navbar from './pages/Navbar'
import AboutPage from './pages/AboutPage';
import Converter from './pages/Converter';
import '../src/assets/styles/style.css'
import '../src/assets/styles/Navbar.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Navbar />
  );
}

export default App

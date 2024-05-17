import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Navbar from './pages/Navbar.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Converter from './pages/Converter.jsx'
import IndexPage from './pages/IndexPage.jsx'
import Documentation from './pages/Documentation.jsx'
import Calendar from './pages/Calendar.jsx'
import TeamReports from './pages/TeamReports.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/team" element={<TeamReports />} />
      <Route path="/documentation" element={<Documentation />} />
      <Route path="/calendar" element={<Calendar />} />
      {/* <Route path="/gallery" element={<Gallery />} /> */}
      <Route path="/converter" element={<Converter />} />
    </Routes>
  </BrowserRouter>
)
1
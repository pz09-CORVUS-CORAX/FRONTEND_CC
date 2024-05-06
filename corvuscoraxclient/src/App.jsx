import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PdfPreview from './PdfPreview'
import Navbar from './pages/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className='App'>
        <h1>PDF PdfPreview</h1>
        <PdfPreview />
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import Logo from '/logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://ajrass-tajemouti.netlify.app" target="_blank">
          <img src={Logo} className="logo" alt="Logo" />
        </a>
      </div>
      <h1>Ajrass Tajemouti</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the logo to visit my portfolio.
      </p>
    </>
  )
}

export default App

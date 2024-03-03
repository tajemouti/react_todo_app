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
      <p className="read-the-docs">
        Click on the logo to visit my portfolio.
      </p>
    </>
  )
}

export default App

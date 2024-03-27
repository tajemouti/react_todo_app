import Logo from '/logo.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://ajrass-tajemouti.netlify.app" target="_blank">
          <img src={Logo} className="logo" alt="Logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold">Ajrass Tajemouti</h1>
      <p>
        Click on the logo to visit my portfolio.
      </p>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import "./components/SideMenuComponent/SideMenuComponent.jsx"
import { SideMenuComponent } from './components/SideMenuComponent/SideMenuComponent.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to your React Library!</h1>
      <SideMenuComponent />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import "./components/MyFirstComponent.jsx"
import MyFirstComponent from './components/MyFirstComponent.jsx'
import SecondComponent from './components/SecondComponent';

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
      <h1>Andre came here with his <span>VITE</span></h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          And so the journey begins.
        </p>
        <span id='gg-ez'>GG, EZ</span>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="my-first-component">
        <MyFirstComponent name="Andre Williams" message="Damn, not necessary to click that hard"/>
      </div>

      <div className='second-component'>
        <SecondComponent />
      </div>
    </div>
  )
}

export default App

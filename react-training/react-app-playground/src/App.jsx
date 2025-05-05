import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import "./components/MyFirstComponent.jsx"
import MyFirstComponent from './components/MyFirstComponent.jsx'
import SecondComponent from './components/SecondComponent.jsx';
import { Home } from './components/Home.jsx';
import { Contact } from './components/Contact.jsx';
import { About } from './components/About.jsx';
import { Help } from './components/Help.jsx';
import { NavLink, Link, Routes, Route } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <div className="App">
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src="/vite.svg" className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://reactjs.org" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Andre came here with his <span>VITE</span></h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         And so the journey begins.
  //       </p>
  //       <span id='gg-ez'>GG, EZ</span>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //     <div className="my-first-component">
  //       <MyFirstComponent name="Andre Williams" message="Damn, not necessary to click that hard"/>
  //     </div>

  //     <div className='second-component'>
  //       <SecondComponent />
  //     </div>
  //   </div>
  // )

  return (
    // allows me to render multiple components
    // without having to wrap them in a div
    <>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/my-first-component">My First Component</NavLink></li>
          <li><NavLink to="/second-component">Second Component</NavLink></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/help">Help</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome to your React Library!</h1>} />
        <Route path="/my-first-component" element={<MyFirstComponent name="Andre Williams" message="Damn, not necessary to click that hard"/>} />
        <Route path="/second-component" element={<SecondComponent className='second-component' />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  ) 
}

export default App

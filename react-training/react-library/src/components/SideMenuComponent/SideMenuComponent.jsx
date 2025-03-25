import { useState } from 'react'
import './../SideMenuComponent/SideMenuComponent.css'

export function SideMenuComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // I use this because react does not update immediately, it updates in batches, so just ensures I always have the most recent state
    const toggleMenu = () => setIsMenuOpen(oldState => !oldState);

  return (
    <div className="side-menu">
      <div className="side-menu-header">
        <div
          id='burger-menu-btn'
          className={`burger-menu-btn ${isMenuOpen ? "expanded" : "collapsed"}`}
          role="button"
          tabIndex={0}
          onClick={toggleMenu}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              toggleMenu();
            }
          }}
          style={{ cursor: "pointer" }}
        >
          <span className="burger-menu"></span>
          <span className="burger-menu"></span>
          <span className="burger-menu"></span>
        </div>
      </div>

      <div className={`menu-content ${isMenuOpen ? "open" : "closed"}`}>
        <h2 className={`${isMenuOpen ? "open" : "closed"}`}>React Library</h2>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}
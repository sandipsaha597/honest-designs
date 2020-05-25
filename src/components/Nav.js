import React from 'react'
import logo from '.././logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Nav() {
  return (
    <div className="topbar">
      <div className="container">
        <img src={logo} alt="logo" className="logo" />
        <nav>
          <ul>
            <li className="dropbtn"><a href="#" >Software <FontAwesomeIcon icon={faChevronDown} /></a>
              <ul className="dropdown">
                <li><a href="#">link 1</a></li>
                <li><a href="#">link 2</a></li>
                <li><a href="#">link 3</a></li>
                <li><a href="#">link 4</a></li>
              </ul>
            </li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Nav

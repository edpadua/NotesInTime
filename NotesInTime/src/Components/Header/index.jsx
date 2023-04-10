import React from 'react'

import './Header.css'

import { FaClipboard } from 'react-icons/fa';

function Header() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-container">

            <FaClipboard className="logo-header" style={{ fontSize: '30px' }} />


          </div>
        </nav>
      </header>
    </>
  )
}

export default Header

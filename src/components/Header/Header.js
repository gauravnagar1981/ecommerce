import React from 'react'
import {IndexLink, Link} from 'react-router'
import './Header.scss'

export const Header = () => (
  <div className="header">
    <Link to ='/'>
      <img className="logo"
           src={require('./img/logo.jpg')}/>
    </Link>
    <div>
      <h1>Awesome ECommerce Site</h1>
    </div>
    <Link to ='/'>
      <div className="login">Login</div>
    </Link>

  </div>
)

export default Header

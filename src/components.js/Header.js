import React from 'react'
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='header_container'>
      <div className='header_container_left'>
        <img src={logo} alt=".." width="40px" height={"40px"}/>
        <span>Estatery</span>
        <p>Rent</p>
        <p>Buy</p>
        <p>Manage Property🔻</p>
        <p>Resources🔻</p>
      </div>
      <div className='header_container_right'>
        <button>Login</button>
        <button>Sign up</button>
      </div>
    </div>
  )
}

export default Header;
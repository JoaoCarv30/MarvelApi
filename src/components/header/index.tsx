import React from 'react'

import logo from '../../assets/logo.svg'
import './header.css'
import { MdGroup } from "react-icons/md";


export const Header = () => {
  return (
   
        <header>

            <nav className='container'>

                <div className='logo'>
                  <img src={logo} alt="" />
                  <h1 id='text-logo'>Marvel Strike Team </h1>
                  </div>

                <button id='button-header'>Join Group <MdGroup/> </button>

            </nav>

        </header>
  )
}

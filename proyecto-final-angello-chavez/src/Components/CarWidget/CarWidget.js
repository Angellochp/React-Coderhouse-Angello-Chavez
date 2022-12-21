import React from 'react'
import logo from '../Assets/KART.png'
import '../CarWidget/CarWidget.css'


const CarWidget = () => {
  return (
    <div className='menu-navbar-logo'>
        <img className='menu-navbar_img' src={logo} alt='Card Widget'/>
        <span> 2 </span>

    </div>
  )
}

export default CarWidget
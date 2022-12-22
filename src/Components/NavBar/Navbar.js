import React from "react";
import CarWidget from "../CarWidget/CarWidget";
import '../NavBar/NavBar.css'

const NavBar = () => {

return(

<>

<div className="menu-navbar-container">
    <h1 className="menu-title"> Ajo Caramelo</h1>
    <nav className="menu-items">
    <li className="li-navbar">
        <a href="" className="menu-list">Beneficios</a>

    </li>
    <li className="li-navbar"> 
        <a href="" className="menu-list">Historia</a>

    </li>
    <li className="li-navbar">
        <a href="" className="menu-list">Lo Quiero!</a>

    </li>
    <CarWidget/>
    </nav>
   
</div>


</>

)

}


export default NavBar 
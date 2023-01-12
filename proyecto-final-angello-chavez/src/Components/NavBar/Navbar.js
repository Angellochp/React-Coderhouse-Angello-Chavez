import React from "react";
import CarWidget from "../CarWidget/CarWidget";
import '../NavBar/NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <>
        <ul className="nav-list">
            <li className="nav-item">
                <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/electronics">Electrónica</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/jewelery">Joyería</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/men's clothing">Ropa de Hombre</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/women's clothing">Ropa de Mujer</Link>
            </li>
            <div className="widget-container">
                <CarWidget/>
            </div>
        </ul>
        </>
    );

}


export default NavBar 
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item linkardo">
                        <NavLink className="nav-link" to = '/'
                            style={({ isActive, isPending }) => {
                                return {
                                fontWeight: isActive ? "bold" : "bold",
                                color: isActive? "black" : "black",
                                textDecoration: isActive ? "none" : "none",
                                };
                            }}
                        >Home</NavLink>
                    </li>
                    <li class="nav-item linkardo">
                        <NavLink className="nav-link" to = '/articulos'
                            style={({ isActive, isPending }) => {
                                return {
                                fontWeight: isActive ? "bold" : "bold",
                                color: isActive? "black" : "black",
                                textDecoration: isActive ? "none" : "none",
                                };
                            }}
                        >Articulos</NavLink>
                    </li>
                </ul>
                <ul className='navbar-nav'>
                    <li className='nav-item mb-2'>
                        <Link to='login'><button id='inicio-sesion'>Iniciar sesión</button></Link>
                    </li>
                    <li className='nav-item mb-2'>
                        <Link to='registro'><button id='registro'>Registrarse</button></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
     
  )
}

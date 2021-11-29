import React from 'react'
import '../style.css'


function NavBar() {

  
    return(
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
            <div className="container-fluid">
              <img className="logo" src="./icono.png" alt="logo"/> <a className="navbar-brand" href="{{url_for('index')}}"> </a>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                      <link to="../public/index.html" className="nav-link">Home</link>
                  </li>
                  <li className="nav-item">
                      <link to="" className="nav-link">Cuenta</link>
                  </li>
                  <li className="nav-item">
                    <link to="" className="nav-link">Extractos</link>
                  </li>
                  <li className="nav-item">
                    <link to="" className="nav-link">Transferencias</link>
                  </li>
                  <li className="nav-item">
                    <link to="" className="nav-link">Cancelacion</link>
                  </li>
                  <li className="nav-item">
                    <link to="" className="nav-link">PQRs</link>
                  </li>
                  
                  <div className="navbar-nav ml-auto">
                  <div className="row"/>
                  <div className="row"/>
                  <div className="row"/>
                  <div className="row"/>
                    <li className="nav-item dropdown ">
                      
                      <a className="nav-link dropdown-toggle" href="none" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="" alt="" />
                        Usuarios
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><link to="./Login" className="dropdown-item" > Iniciar Sesion</link></li>
                        <li><link to="./Signin" className="dropdown-item">Registrarse</link></li>                       
                      </ul>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </nav>

    );

}

export default NavBar;
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
                      <a className="nav-link" aria-current="page" href="{}">Home</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="{}">Cuenta</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="{}">Extractos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="{}">Transferencias</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="{}">Cancelacion</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="{}">PQRs</a>
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
                        <li><a className="dropdown-item" href="Login"> Iniciar Sesion</a></li>
                        <li><a className="dropdown-item" href="{}">Registrarse</a></li>                       
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
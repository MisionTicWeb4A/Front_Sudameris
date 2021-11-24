import React from 'react'



function NavBar() {

  
    return(
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary" >
            <div class="container-fluid">
              <img class="logo" src="./icono.png" alt="logo"/> <a class="navbar-brand" href="{{url_for('index')}}"> </a>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                  <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="{{url_for('index')}}">Home</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="{}">Cuenta</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="{}">Extractos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="{}">Transferencias</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="{}">Cancelacion</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="{}">PQRs</a>
                  </li>
                   
                  <div class="navbar-nav ml-auto">
                    <li class="nav-item dropdown ">
                      
                      <a class="nav-link dropdown-toggle" href="none" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="" alt="" />
                        Usuarios
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="Login"> Iniciar Sesion</a></li>
                        <li><a class="dropdown-item" href="{}">Registrarse</a></li>                       
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
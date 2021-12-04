import React from 'react';
import '../style.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavDropdown, Nav , NavItem, NavLink} from 'react-bootstrap';


const MenuBar = function ({onOptionClicked}) {

    return(
        
        <Navbar className="BarraNavegacion" bg="primary" variant="dark" expand="lg" >
            <Container fluid>
              <img className="logo" src="./icono.png" alt="logo"/> <a className="navbar-brand" href="{{url_for('index')}}"> </a>
              <Navbar.Collapse>
                <Nav className="navbar-nav">
                    <NavItem >
                      <NavLink href="#Login" name="login" onClick={onOptionClicked}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#Login" name="login" onClick={onOptionClicked}>Cuenta</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#Login" name="login" onClick={onOptionClicked}>Extractos</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#Login" name="login" onClick={onOptionClicked}>Transferencias</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#Login" name="login" onClick={onOptionClicked}>Cancelacion</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#Login" name="login" onClick={onOptionClicked}>PQRs</NavLink>
                    </NavItem>
                    
                    <NavDropdown align="ml-auto" id="basic-nav-dropdown">
                      
                        <Nav className="dropdown-toggle" href="none" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Usuarios
                          
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <NavDropdown.Item href="#Login" name="login" onClick={onOptionClicked}> Iniciar Sesion</NavDropdown.Item>
                            <NavDropdown.Item href="#Signin" name="signin" onClick={onOptionClicked}>Registrarse</NavDropdown.Item>                      
                          </ul>
                        </Nav>
                    </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

    );

}

export default MenuBar;
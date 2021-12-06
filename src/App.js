
import {Fragment, useState} from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Login from './components/Login';
import Signin from './components/Signin';
import './style.css';
//import Container from 'react-bootstrap/Container';
import Extractos from './components/Extractos';



function App() {

  const [ compDinamico, setCompDinamico ] = useState(<Banner />);

  const onOptionClicked = function (evt) {
    evt.preventDefault();
    if (evt.target.name==="home") {
      setCompDinamico(<Banner />);
    }
    else {
      if (evt.target.name==="Iniciar Sesion") { setCompDinamico(<Login />); }
      else { 
        if (evt.target.name==="Registrarse") {setCompDinamico(<Signin />);}
        else {
          if (evt.target.name==="Extractos") {setCompDinamico(<Extractos />);} 
          else {
            setCompDinamico(<Banner />);
          }
        }
      }
    }
  }


  return (
      
      <Fragment>
        <NavBar onOptionClicked={onOptionClicked} />
          {compDinamico}
        <pre>


        
        </pre>
        <footer className="text-center text-lg-start bg-light text-muted p-2">
          
        <section>
          <div className="container text-center text-md-start mt-5">
            
            <div className="row mt-3">
              
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Banco Sudameris
                </h6>
                <p>
                  Somos una Compañia de Ventas de Productos Bancarios, aqui podras encontrar cualquier producto<br/>
                  de tu interes.
                </p>
              </div>
      
              
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <section className="d-flex justify-content-center justify-content-lg-between">
                  
                <h6 className="text-uppercase fw-bold mb-4">
                  Contactenos.
                </h6>
                
                <img src="./mail.png" alt="correo" className="mx-auto mb-md-0 mb-4"/>
                
                  
                </section>
                <br/>               
                                                
              </div>
              
            </div>
            
          </div>
        </section>
        
        <div className="text-center p-4">
          Copyright © 2021 Sudameris
        </div>
        
      </footer>
      </Fragment>   

    
  );
}

export default App;

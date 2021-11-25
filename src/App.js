
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner'
//import Tarjetas from './components/Tarjetas';
//import Login from './components/Login'


function App() {
  return (
    <div className="App">
      
      
      <NavBar/>
      <br/>
      <Banner />
      <pre>


      
      </pre>
      <footer class="text-center text-lg-start bg-light text-muted p-2">
         
      <section>
        <div class="container text-center text-md-start mt-5">
          
          <div class="row mt-3">
            
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>Banco Sudameris
              </h6>
              <p>
                Somos una Compañia de Ventas de Productos Bancarios, aqui podras encontrar cualquier producto<br/>
                de tu interes.
              </p>
            </div>
    
            
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

              <section class="d-flex justify-content-center justify-content-lg-between">
                
                <div>
                  <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <img class="fab fa-instagram" src="" alt=""/>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <img class="fab fa-facebook-f" src="" alt=""/>
                  </a>
                  <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
                    <img class="fab fa-whatsapp" src="" alt=""/>
                  </a>
                </div>
                
              </section>
              <br/>
              
              <h6 class="text-uppercase fw-bold mb-4">
                Contactenos
              </h6>
                                               
            </div>
            
          </div>
          
        </div>
      </section>
      
      <div class="text-center p-4">
        Copyright © 2021 Sudameris
      </div>
      
    </footer>
               
    </div>
    
  );
}

export default App;

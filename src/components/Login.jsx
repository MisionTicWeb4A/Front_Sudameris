import React from 'react'
import '../style.css'


function Login(){

    return (

        <div>

            <form className="formulario" method="POST" action="validar_usuario">
                
                <label for="correo" className="form-label">Correo</label>
                <input type="text" name="correo" id="correo" className="form-control" required/>
                
                
                <br/>
                
                <label for="contraseña" className="form-label">Contraseña</label>
                <input type="password" name="contraseña" id="contraseña" className="form-control" required/>
                
                <br/>
                
                <input type="submit" name="Entrar" className="btn btn-primary"/>
            </form>


        </div>


    );


}

export default Login;
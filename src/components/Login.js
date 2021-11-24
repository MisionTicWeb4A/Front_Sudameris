import React from 'react'

function Login(){

    return (

        <div>

            <form className="formulario" method="POST" action="validar_usuario">
                
                <label for="correo" className="form-label">Correo</label>
                <input type="text" name="correo" id="correo" className="form-control"/>
                
                
                <br/>
                
                <label for="contraseña" className="form-label">Contraseña</label>
                <input type="password" name="contraseña" id="contraseña" className="form-control"/>
                
                <br/>
                
                <input type="submit" name="Entrar" className="btn btn-primary"/>
            </form>


        </div>


    );


}

export default Login;
import React from 'react'

function Login(){

    return (

        <div>

            <form class="formulario" method="POST" action="validar_usuario">
                
                <label for="correo">Correo</label>
                <input type="text" name="correo" id="correo">
                </input>
                
                <br/>
                
                <label for="contraseña">Contraseña</label>
                <input type="password" name="contraseña" id="contraseña"></input>
                
                <br/>
                
                <input type="submit">Entrar</input>
            </form>


        </div>


    );


}

export default Login;
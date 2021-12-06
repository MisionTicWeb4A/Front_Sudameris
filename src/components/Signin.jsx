import React from 'react'
import '../style.css'


function Signin(){

    return (

        <div>

            <form class="formulario" action="registrar_usuario" method="POST">
            
            
            <br/>
            
            <label for="tipo" className="form-label">Tipo</label>
            <input id="tipo" name="tipo" type="text" className="form-control" required/>
            
            <br/>
        
            <label for="documento" className="form-label">Documento</label>
            <input id="documento" name="documento" type="text" className="form-control" required/>
            
            
            <br/>
            
            <label for="primer_nombre" className="form-label">Primer Nombre</label>
            <input id="primer_nombre" name="primer_nombre" type="text" className="form-control" required/>
            
            
            <br/>
            
            <label for="segundo_nombre" className="form-label">Segundo Nombre</label>
            <input id="segundo_nombre" name="segundo_nombre" type="text" className="form-control" required/>
            
            <br/>
            
            <label for="primer_apellido" className="form-label">Primer Apellido</label>
            <input id="primer_apellido" name="primer_apellido" type="text" className="form-control" required/>
            
            
            <br/>
            
            <label for="segundo_apellido" className="form-label">Segundo Apellido</label>
            <input id="segundo_apellido" name="segundo_apellido" type="text" className="form-control" required/>
            
            
            <br/>
            
            <label for="fecha_nacimiento" className="form-label">Fecha Nacimiento</label>
            <input id="fecha_nacimiento" name="fecha_nacimiento" type="date" className="form-control" required/>
            
            
            <br/>
            
            <label for="correo" className="form-label">Correo</label>
            <input id="correo" name="correo" type="text" className="form-control" required/>
            
            
            <br/>
            
            <label for="contraseña" className="form-label">Contraseña</label>
            <input id="contraseña" name="contraseña" type="password" className="form-control" required/>
                        
            <br/>
            
            <input type="submit" name="Registrar" className="btn btn-primary"/>
            
            
            
        </form>


        </div>


    );


}

export default Signin;
import React from 'react'
import '../style.css'
import Table from 'react-bootstrap/Table'

function Extractos(props) {
   
    
    return (
        <div className="contenido">
            <div className="py-5">                  
               
                    <h3>Consulte el extracto de su cuenta Aqui!</h3>
                
                    <div className="col-md-4">
                        <div class="py-3">
                            <div class="input-group">
                                <select class="form-select" id="inputGroupSelect04">
                                    <option selected>Seleccione mes</option>
                                    <option value="1">Enero</option>
                                    <option value="2">Febrero</option>
                                    <option value="3">Marzo</option>
                                </select>
                                <button class="btn btn-outline-secondary" type="button">Consultar</button>
                                    
                            </div>
                        </div>
                    </div>
                <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Fecha</th>
                            <th>Detalle</th>
                            <th>Monto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.datos.map(datos => (                            
                                <tr>
                                    <td>{ datos.id }</td>
                                    <td>{ datos.fecha }</td>
                                    <td>{ datos.detalle } </td>
                                    <td>{ datos.monto }</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table> 
                </div>
            </div>
        
    );

}
    
export default Extractos;
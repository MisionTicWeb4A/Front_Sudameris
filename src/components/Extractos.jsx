import React from 'react'
import '../style.css'
import Table from 'react-bootstrap/Table'

function Extractos() {
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
                            <th>#</th>
                            <th>Fecha</th>
                            <th>Detalle</th>
                            <th>Monto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>21-01-21</td>
                            <td>Compra EDS Carretera </td>
                            <td>$ 30.000.oo</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>22/01/21</td>
                            <td>Thornton S.A.</td>
                            <td>$ 734.000</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>23/01/21</td>
                            <td>Subway</td>
                            <td>$ 14.000</td>
                            </tr>
                        </tbody>
                    </Table> 
                </div>
            </div>
        
    );

}
    
export default Extractos;
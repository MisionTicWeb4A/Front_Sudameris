import React from 'react'
import '../style.css'
import Table from 'react-bootstrap/Table'

function Extractos() {
    return (
        <div className="py-5">                  
            <div className="py-5">
            
                 <h1>Extractos</h1>
            

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
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table> 
            </div>
        </div>
    );

    }
    
    export default Extractos;
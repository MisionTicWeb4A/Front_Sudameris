import React from 'react';
import '../style.css';


function PQRs() {
    return (
        <div>

            <form className="mx-auto" action="">

                <div className="mx-auto mb-3">
                    <h1> Peticiones - Quejas - Reclamos </h1>
                </div>
                <label for="exampleFormControlInput1" className="form-label">Registre la siguiente solicitud</label>

                <div className="input-group mb-4">
                    <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                        <option selected>Tipo de Solicitud ... </option>
                        <option value="1"> 01 - Petición </option>
                        <option value="2"> 02 - Queja </option>
                        <option value="3"> 03 - Reclamo </option>
                    </select>
                </div>

                <div className="mb-5">
                    <label for="exampleFormControlTextarea1" className="form-label">Mensaje (Opcional)</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <p>
                    <a className="btn btn-primary mx-auto d-grid gap-2 col-6 mx-auto" data-bs-toggle="collapse" href="#collapseExample" role="button"
                        aria-expanded="false" aria-controls="collapseExample">
                        Confirmar Transacción
                    </a>
                </p>
                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        Se ha enviado correctamente, en los proximos 5 días habiles se dará respuesta.
                    </div>
                </div>
            </form>
        </div>
    );

}; 
export default PQRs;

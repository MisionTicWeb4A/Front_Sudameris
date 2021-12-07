import React from 'react'
import '../style.css'

function PQRs() {
    return (
        <form class="mx-auto" style="max-width: 35em; color: #adadad;" action="">

            <div class="mx-auto mb-3" style="text-align: center; color: #2d7dd2; ">
                <h1> Peticiones - Quejas - Reclamos </h1>
            </div>
            <label for="exampleFormControlInput1" class="form-label">Registre la siguiente solicitud</label>

            <div class="input-group mb-4" style="color: #adadad;">
                <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                    <option selected>Tipo de Solicitud ... </option>
                    <option value="1"> 01 - Petición </option>
                    <option value="2"> 02 - Queja </option>
                    <option value="3"> 03 - Reclamo </option>
                </select>
            </div>

            <div class="mb-5">
                <label for="exampleFormControlTextarea1" class="form-label">Mensaje (Opcional)</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <p>
                <a class="btn btn-primary mx-auto d-grid gap-2 col-6 mx-auto" data-bs-toggle="collapse" href="#collapseExample" role="button"
                    aria-expanded="false" aria-controls="collapseExample">
                    Confirmar Transacción
                </a>
            </p>
            <div class="collapse" id="collapseExample">
                <div class="card card-body">
                    Se ha enviado correctamente, en los proximos 5 días habiles se dará respuesta.
                </div>
            </div>
        </form>
    );

}
export default PQRs;
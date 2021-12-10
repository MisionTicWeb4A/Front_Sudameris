import React from 'react';
import '../style.css';

<<<<<<< HEAD

function Pqrs() {
    return (
        <div>

            <form className="mx-auto" action="">

                <div className="mx-auto mb-3">
                    <h1> Peticiones - Quejas - Reclamos </h1>
=======
const formStyle = {
    'maxWidth': '35em',
    'color': '#adadad'
}
const divStyle ={
    'textAlign': 'center',
    'color': '#2d7dd2'
}


function PQRs() {
    return (
        <form className="mx-auto mt-3" style={formStyle} action="">

            <div className="mx-auto mb-3" style={divStyle}>
                <h1> Peticiones - Quejas - Reclamos </h1>
            </div>
            <label for="exampleFormControlInput1" className="form-label">Registre la siguiente solicitud</label>

            <div className="input-group mb-4" style={{'color': '#adadad'}}>
                <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                    <option selected>Tipo de Solicitud ... </option>
                    <option value="1"> 01 - Petición </option>
                    <option value="2"> 02 - Queja </option>
                    <option value="3"> 03 - Reclamo </option>
                </select>
            </div>

            <div className="mb-5">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensaje (Opcional)</label>
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
>>>>>>> 27231623f3c261ec014d794d9465f07a44c24698
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

<<<<<<< HEAD
};

export default Pqrs;
=======
}; 
export default PQRs;
>>>>>>> 27231623f3c261ec014d794d9465f07a44c24698

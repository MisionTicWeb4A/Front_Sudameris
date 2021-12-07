import React from 'react'
import '../style.css'

function Transferencias(){
    return(
            <form class="mx-auto" style="max-width: 35em; color: #adadad;" action="">

            <div class="mx-auto mb-3" style="text-align: center; color: #2d7dd2; ">
                <h1> Transferencias </h1>
                <div>
                    <h2 class="mb-5"> Monto de transferencia</h2>
                    <div class="input-group input-group-lg">
                        <span class="input-group-text">$</span>
                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
                        <span class="input-group-text">.00</span>
                    </div>
                </div>
            </div>
            <label for="exampleFormControlSelect" class="form-label">Seleccionar Destino</label>

            <div class="input-group mb-4" style="color: #adadad;">
                <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                    <option selected>ESCOGE EL BANCO DE TU PREFERENCIA ... </option>
                    <option value="1"> 01 - BANCO EUROPA TEAMS </option>
                    <option value="2"> 02 - BANCO INTERCONTINENTAL PREMIUM </option>
                    <option value="3"> 03 - BANCO SWITCH </option>
                </select>
            </div>

            <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">Numero de cuenta destino</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="XXX-XXX-XX"/>
            </div>

            <div class="mb-5">
                <label for="exampleFormControlTextarea1" class="form-label">Mensaje (Opcional)</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div class="mx-auto d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="submit">Confirmar Transacción</button>
            </div>
        </form>
    );

}
export default Transferencias;
import React from 'react'

const formStyle = {
    'maxWidth': '35em',
    'color': '#adadad'
}
const divStyle ={
    'textAlign': 'center',
    'color': '#2d7dd2'
}


function Transferencias(){
    return(
            <form className="mx-auto mt-3" style={formStyle} action=""> 
            <div className="mx-auto mb-3" style={divStyle}>
                <h1> Transferencias </h1>
                <div>
                    <h2 className="mb-5"> Monto de transferencia</h2>
                    <div className="input-group input-group-lg">
                        <span className="input-group-text">$</span>
                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                        <span className="input-group-text">.00</span>
                    </div>
                </div>
            </div>
            <label htmlFor="exampleFormControlSelect" className="form-label">Seleccionar Destino</label>

            <div className="input-group mb-4" style={{'color': '#adadad'}}>
                <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                    <option selected>ESCOGE EL BANCO DE TU PREFERENCIA ... </option>
                    <option value="1"> 01 - BANCO EUROPA TEAMS </option>
                    <option value="2"> 02 - BANCO INTERCONTINENTAL PREMIUM </option>
                    <option value="3"> 03 - BANCO SWITCH </option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="exampleFormControlInput1" className="form-label">Numero de cuenta destino</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="XXX-XXX-XX"/>
            </div>

            <div className="mb-5">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensaje (Opcional)</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div className="mx-auto d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-primary" type="submit">Confirmar Transacción</button>
            </div>
        </form>
    );

}; export default Transferencias;
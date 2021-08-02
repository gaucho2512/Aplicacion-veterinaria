import React , {Fragment} from 'react'

const AgregarCita = ({cita , eliminarCita}) => {
    return (
        <Fragment>
            <div className="citas">
                <p> Mascota :  <span> {cita.mascota} </span></p>
                <p> Dueño :  <span> {cita.propietario} </span></p>
                <p> Fecha :  <span> {cita.fecha} </span></p>
                <p> Hora :  <span> {cita.hora} </span></p>
                <p> Sintomas :  <span> {cita.sintomas} </span></p>

                <button
                 className="btn btn-danger"
                 onClick= { () => eliminarCita(cita.id) }
                > Eliminar </button>
            </div>
        </Fragment>
    )
}

export default AgregarCita

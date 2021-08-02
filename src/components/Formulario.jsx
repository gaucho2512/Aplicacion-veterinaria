import React , {Fragment , useState} from 'react'
import {v4 as uuidv4} from 'uuid';

const Formulario = ({crearCita}) => {

    // uso del State con objetos ''
    const [citas, setcitas] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
      });

     
       // state para validar campos
       const [validar, setValidar] = useState(false)

      // extraer los valores
      const { mascota , propietario , fecha , hora  , sintomas } = citas

      // funcion inputs , cambiando el estado
      const actualizarState = (event) => {
        
          setcitas({
              ...citas ,
              [event.target.name] : event.target.value

          })
      }

      // funcion agregar cita
      const submitCita = (event) => {
          event.preventDefault()
        
      

      // validar campos
      if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' ||
         hora.trim() === '' || sintomas.trim() === ''){
        
           setValidar(true)
            return;
      }

      //eliminar mensaje de validacion
        setValidar(false)


        //asignar un id unico con UUID
        citas.id = uuidv4();

        //Crear la cita
        crearCita(citas)

        //reiniciar el form
        setcitas({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })








}




    return (
        <Fragment>
             <h3>Crear Cita</h3>
         
             {validar ? <p className="error">Todos los campos son Obligatorios</p> : null}
         
             <form
               onSubmit={submitCita}
               >
                 <label> Nombre de Mascota: </label>
                 <input
                  type="text"
                  name="mascota"
                  className="form-control"
                  placeholder="Nombre de tu Mascota"
                  onChange={actualizarState}
                  value={mascota}
                  />

                 <label> Nombre del Dueño: </label>
                 <input
                  type="text"
                  name="propietario"
                  className="form-control"
                  placeholder="Nombre del Propietario"
                  onChange={actualizarState}
                  value={propietario}
                  />

                 <label> Fecha: </label>
                 <input
                  type="date"
                  name="fecha"
                  className="form-control"
                  onChange={actualizarState}
                  value={fecha}
                  />

                 <label> Hora: </label>
                 <input
                  type="time"
                  name="hora"
                  className="form-control"
                  onChange={actualizarState}
                  value={hora}
                  />

                 <label> Sintomas: </label>
                 <textarea
                  name="sintomas"
                 className="form-control"
                 onChange={actualizarState}
                 value={sintomas}
                 >
                 </textarea>

                 <button
                 type="submit"
                 className="btn btn-primary"
                 > Agregar Cita </button>
             </form>
        </Fragment>
    )
}

export default Formulario

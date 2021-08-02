import './App.css';
import React , {Fragment , useState , useEffect} from 'react';
import Formulario from './components/Formulario';
import AgregarCita from './components/AgregarCita'
import Header from './components/Header';
import Footer from './Footer';






function App() {

  //Citas en LocalStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
     citasIniciales = [];
  }


  // Arreglos de citas
  const [citas , guardarCitas] = useState([

  ]);

  //UseEfect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
     if(citasIniciales) {
        localStorage.setItem('citas' , JSON.stringify(citas))
     } else {
        localStorage.setItem('citas' , JSON.stringify([]));
     }
  }, [citas] );
  //se le pasa un arreglo vacio para que solo se ejecute una sola vez
     

  //Funcion que elimina una cita
  const eliminarCita = id => {
     const nuevasCitas = citas.filter( cita => cita.id !== id)
     guardarCitas(nuevasCitas);
     
  }


  //Funcion para agregar las citas actuales
  const crearCita = cita => {
     
     guardarCitas([
        ...citas ,
        cita
     ])
  }


  // Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay Citas' : 'Administra tus Citas'


  return (
       <Fragment>

               <Header/>

               <div className="container">
                  <div className="row">
                        <div className="col-md-5 col-sm-5 contenedor-left">
                        
                           <Formulario
                           crearCita = {crearCita} />
                           
                        </div>

                        <div className="col-md-5 col-sm-5 contenedor-right">

                           <h3>{titulo}</h3>
                           { citas.map( (cita) => {
                              return <AgregarCita 
                                    key={cita.id}
                                    cita={cita}
                                    eliminarCita = {eliminarCita}
                                    />
                           })}

                     </div>
                  </div>
               </div>

         <Footer />

       </Fragment>    
  );
}

export default App;

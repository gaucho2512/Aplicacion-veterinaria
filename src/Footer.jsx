import React from 'react'
import logoLinkedin from '../src/assets/facebook-azul.png'
import logoFacebook from '../src/assets/linkedin-azul.png'

const Footer = () => {
    return (

       <footer>
        
           <div>
               <h4> Pagina diseñada por <a href="#"> Juan Ariztegui</a></h4>
           </div>

           <div className="contenedor-logos">
             <a href="https://www.linkedin.com/in/juan-carlos-ariztegui/" target="_blank "><img className="logos-redes" src={logoLinkedin} alt="logo-linkedin" /> </a>  
              <a href="https://www.facebook.com/juan.ariztegui.5"  target="_blank "><img className="logos-redes" src={logoFacebook} alt="logo-facebook" /> </a> 
           </div>
       </footer>
    )
}

export default Footer

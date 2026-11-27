

import ContactForm from "@/components/ContactForm";
import "@/styles/contacto.css";

export const metadata = {
    title: "Freelancer 2026",
    description: "Servicios Freelancer",
};

export default function Contacto() {
    return (
        <section className="contacto">

            <h2>Presupuesto sin cargo</h2>

            <ContactForm postUrl={`${process.env.API_BASE_URL}/api/contacto`} />

        </section>
    )
}







// import ContactForm from "@/components/ContactForm";
// import "@/styles/contacto.css";

// export const metadata = {
//   title: "Freelancer 2026",
//   description: "Servicios Freelancer",
// };

// export default function Contacto() {
//   return (
//     <section className="contacto">  
         
//         <h2>Presupuesto sin cargo</h2>
//         <form className="formulario">
//         <fieldset>
//         <legend>Contactame llenando todos los campos</legend>
//         <ContactForm postUrl={`${process.env.API_BASE_URL}/api/contacto`} />
        
//     <div className="contenedor-campos">
//         <div className="campo">
//         <label>Nombre</label>
//         <input className="input-text" type="text" placeholder="Tu nombre" />
//         </div>

//         <div className="campo">
//         <label>Correo</label>
//         <input className="input-text" type="email" placeholder="Tu email" />
//         </div>

                
//         <div className="campo">
//         <label>Teléfono</label>
//         <input className="input-text" type="tel" placeholder="Tu teléfono" />
//         </div>
        
     
//         <div className="campo">
//         <label>Mensaje</label>
//         <textarea className="input-text"></textarea>
//         </div>
        
//     </div>         
    
//     <div className="alinear-derecha flex">
//         <input className="boton w-sm-100" type="submit" value="Enviar"/>
//         </div>
        
//     </fieldset>
    
//     </form>
           
//     </section>

//   ) 
// }


'use client'

import { useState } from 'react'

export default function ContactForm({ postUrl }) {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;

        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();

        setMsg('');
        setSending(true);

        try {
            const rawResponse = await fetch(postUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const texto = await rawResponse.text();

            console.log("URL UTILIZADA:", postUrl);
            console.log("STATUS HTTP:", rawResponse.status);
            console.log("RESPUESTA COMPLETA:", texto);

            if (!rawResponse.ok) {
                throw new Error(
                    `Error HTTP ${rawResponse.status}: ${texto}`
                );
            }

            const response = JSON.parse(texto);

            setMsg(response.message);

            if (response.error === false) {
                setFormData(initialForm);
            }

        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setMsg('No se pudo enviar el mensaje. Intentá nuevamente.');

        } finally {
            setSending(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="formulario">

                <fieldset>
                    <legend>Contactame llenando todos los campos</legend>

                    <div className="contenedor-campos">

                        <div className="campo">
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                className="input-text"
                                type="text"
                                id="nombre"
                                name="nombre"
                                placeholder="Tu nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="email">Correo</label>
                            <input
                                className="input-text"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Tu email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="telefono">Teléfono</label>
                            <input
                                className="input-text"
                                type="tel"
                                id="telefono"
                                name="telefono"
                                placeholder="Tu teléfono"
                                value={formData.telefono}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea
                                className="input-text"
                                id="mensaje"
                                name="mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>

                    <div className="alinear-derecha flex">
                        <input
                            className="boton w-sm-100"
                            type="submit"
                            value="Enviar"
                            disabled={sending}
                        />
                    </div>

                </fieldset>
            </form>

            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}
        </>
    )
}









// 'use client'

// import { useState } from 'react'

// export default function ContactForm({ postUrl }) {

//     const initialForm = {
//         nombre: '',
//         email: '',
//         telefono: '',
//         mensaje: ''
//     }

//     const [sending, setSending] = useState(false);
//     const [msg, setMsg] = useState('');
//     const [formData, setFormData] = useState(initialForm);

//     const handleChange = e => {
//         const { name, value } = e.target;

//         setFormData(oldData => ({
//             ...oldData,
//             [name]: value
//         }));
//     }

//     const handleSubmit = async e => {
//         e.preventDefault();

//         setMsg('');
//         setSending(true)

//         try {
//             const rawResponse = await fetch(postUrl, {
//                 method: 'POST',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });

//             //  const response = await rawResponse.json();

//             const texto = await rawResponse.text();

//             console.log("STATUS:", rawResponse.status);
//             console.log("URL:", postUrl);
//             console.log("RESPUESTA DEL SERVIDOR:", texto);

//             const response = JSON.parse(texto);


//         if (!rawResponse.ok) {
//             throw new Error(response.message || 'Error al enviar el mensaje');
//         }

//         setMsg(response.message);

//         if (response.error === false) {
//             setFormData(initialForm);
//         }

//     } catch (error) {
//         console.error('Error al enviar el formulario:', error);
//         setMsg('No se pudo enviar el mensaje. Intentá nuevamente.');

//     } finally {
//         setSending(false);
//     }
// };



            // const response = await rawResponse.json();

            

            // console.log(response);
            // setSending(false);
            // setMsg(response.message);
            // if (response.error === false) {
            //     setFormData(initialForm)}
            // // if (rawResponse.ok && response.error === false) {
            // //     setFormData(initialForm);
            // };

    //     } catch (error) {
    //         console.error(error);
    //         setMsg('No se pudo enviar el mensaje. Intentá nuevamente.');

    //     } finally {
    //         setSending(false);
    //     }
    // }

//     return (
//         <>
//         <form onSubmit={handleSubmit} className="formulario">
//             {/* <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario"> */}

//                 <fieldset>
//                     <legend>Contactame llenando todos los campos</legend>

//                     <div className="contenedor-campos">

//                         <div className="campo">
//                             <label>Nombre</label>
//                             <input
//                                 className="input-text"
//                                 type="text"
//                                 // id="nombre"
//                                 name="nombre"
//                                 placeholder="Tu nombre"
//                                 value={formData.nombre}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>

//                         <div className="campo">
//                             <label>Correo</label>
//                             <input
//                             className="input-text"
//                             type="email"
//                             name="email"
//                             placeholder="Tu email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                                 />
//                         </div>

//                         <div className="campo">
//                             <label>Teléfono</label>
//                             <input
//                                 className="input-text"
//                                 type="text"
//                                 // id="telefono"
//                                 name="telefono"
//                                 placeholder="Tu teléfono"
//                                 value={formData.telefono}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>

//                         <div className="campo">
//                             <label>Mensaje</label>
//                             <textarea
//                                 className="input-text"
//                                 // id="mensaje"
//                                 name="mensaje"
//                                 value={formData.mensaje}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>

//                     </div>

//                     <div className="alinear-derecha flex">
//                         <input
//                             className="boton w-sm-100"
//                             type="submit"
//                             value="Enviar"
//                             disabled={sending}
//                         />
//                     </div>

//                 </fieldset>
//             </form>

//             {sending ? <p>Enviando...</p> : null}
//             {msg ? <p>{msg}</p> : null}
//         </>
//     )
// }



// 'use client'

// import { useState } from 'react'


// export default function ContactForm (postUrl) {

//     const initialForm = {
//         nombre: '',
//         email: '',
//         telefono: '',
//         mensaje: ''

//     }

//     const [sending, setSending] = useState(false);
//     const [msg, setMsg] = useState('');
//     const [formData, setFormData] = useState(initialForm);

//     const handleChange = e => {
//         const {name, value } = e.target;
//         setFormData(oldData => ({
//             ...oldData, 
//             [name]: value
//         }));
//     }
    
//     const handleSubmit = async e => {
//         e.preventDefault();
//         setMsg('');
//         setSending(true)

//         const rawResponse = await fetch(postUrl,{
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify(formData)
//         });
//         const response = await rawResponse.json();
//         console.log(response)
//         setSending(false);
//         setMsg(response.message);
//         if (response.error === false) {
//             setFormData(initialForm)
//         }
//     }

//     return (
//         <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
//                 <p>
//                     <label>Nombre</label>
//                     <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
//                 </p>
                
//                 <p>
//                     <label>Correo</label>
//                     <input type="text" name="email" value={formData.email} onChange={handleChange} />
//                 </p>
//                 <p>
//                     <label>Teléfono</label>
//                     <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
//                 </p>
//                 <p>
//                     <label>Mensaje</label>
//                     <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
//                 </p>
//                 <p>
//                     <input type="submit" value="Enviar" />
//                 </p>
//             </form>


//         { sending ? <p>Enviando...</p> : null}
//         { msg ? <p>{msg}</p> : null}
//         // </>

//     )
// }
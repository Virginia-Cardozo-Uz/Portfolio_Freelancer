// export default async function NovedadItem(props) {

//         const { title, subtitle, imagen, body } = props; 

 
//     return (

//         <div className="novedades">
//             <h1>{title}</h1>
//             <h2>{subtitle}</h2>
//             <img src={imagen} alt={title} />
//             <div dangerouslySetInnerHTML={{__html: body}} />
            
//             <hr />
//         </div>

//     );
// }




export default function NovedadItem({ title, subtitle, imagen, body }) {

    return (
        <div className="novedad">

            <h1>{title}</h1>

            <h2>{subtitle}</h2>

            {imagen && imagen.trim() !== "" ? (
                <img
                    src={imagen}
                    alt={title || "Imagen de novedad"}
                />
            ) : null}

            <p>{body || ""}</p>

            <hr />

        </div>
    );
}


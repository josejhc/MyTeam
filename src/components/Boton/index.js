import "./Boton.css"

const Boton = (props) => {
    return <div className='boton-espacio'>
        <button className="boton">{props.texto}</button>
        </div>
}

export default Boton
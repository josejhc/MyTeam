import './equipo.css'
import '../Colaborador'
import Colaborador from '../Colaborador'
import hexRoRgba from 'hex-to-rgba';
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) =>{
    // Desestructuracion
    const {colorPrimario, colorSecundario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props


    const obj = {backgroundColor: hexToRgba(colorPrimario,0.25)}
    const estiloTitulo = {borderColor:colorPrimario}
    
    return <>
        { 
            colaboradores.length > 0 && 
            <section className="equipo" style={obj}>
                <input
                type='color'
                className='input-color'
                value={colorPrimario}
                onChange={(e)=>{actualizarColor(e.target.value, id)}}
                
                />
                <h3 style={estiloTitulo} > {titulo}</h3>
                <div className="colaboradores">
                {
                    colaboradores.map((colaborador,index) => <Colaborador 
                    datos ={colaborador} 
                    key= {index} 
                    colorPrimario={colorPrimario}
                    eliminarColaborador = {eliminarColaborador}
                    like={like}
                    />)
                }
                </div>
            </section>
        
        }
        </>
}

export default Equipo 

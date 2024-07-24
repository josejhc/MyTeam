import { useState } from 'react'
import './Form.css'
import Campo from '../Campo'
import ListaOpciones from '../ListaOpciones'
import Boton from '../Boton'



const Form = (props) => {

    const [nombre, actualizarNombre] = useState('')
    const [puesto, actualizarPuesto] = useState('')
    const [foto, actualizarFoto] = useState('')
    const [equipo, actualizarEquipo] = useState('Seleccionar equipo')

    const [titulo, actualizarTitulo] = useState('')
    const [color, actualizarColor] = useState('')

    const {registrarColaborador, crearEquipo} = props
    
    const manejarEnvio = (e) =>{
        e.preventDefault()
        let datosAEnviar = {
            nombre:nombre,
            puesto:puesto,
            foto:foto,
            equipo: equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo,colorPrimario:color})
    } 


    return (

    <section className = 'form'>

        <form onSubmit = {manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo 
                titulo = 'Nombre' 
                placeholder='Ingresar nombre...' 
                required = {true} 
                valor = {nombre} 
                actualizarValor = {actualizarNombre} 
            />

            <Campo 
                titulo = 'Puesto' 
                placeholder='Ingresar puesto...' 
                required
                valor = {puesto} 
                actualizarValor = {actualizarPuesto} 
            />

            <Campo 
                titulo = 'Foto' 
                placeholder='Ingresar enlace de foto...' 
                required
                valor = {foto} 
                actualizarValor = {actualizarFoto} 
            />
            <ListaOpciones 
                valor = {equipo}
                actualizarEquipo = {actualizarEquipo}
                equipos = {props.equipos}
            />
            <Boton texto = 'Crear'/>

        </form>

        <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo 
                titulo = 'Título' 
                placeholder='Ingresar título...' 
                required = {true} 
                valor = {titulo} 
                actualizarValor = {actualizarTitulo} 
                
            />

            <Campo 
                titulo = 'Color' 
                placeholder='Ingresar el color en Hex...' 
                required
                valor = {color} 
                actualizarValor = {actualizarColor}
                type = 'color' 
                
            />
            <Boton texto = 'Registrar equipo'/>
        </form>
    </section>

    )
}

export default Form
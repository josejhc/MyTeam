import './MiOrg.css'
// import {useState} from 'react'

const MiOrg = (props) => {
    // Estado - hooks
    // useState
    // useState() 
    // const [nombreVariable, funcionActualiza] = useState('valorInicial')

  
    return <section className='orgSection'>
        <h3 className = 'title'>Mi organización</h3>
        <img src='/img/add.png' alt = 'add' onClick = {props.cambiarMostrar}/>
    </section>
}

export default MiOrg
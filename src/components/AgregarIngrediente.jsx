import { useState, useEffect } from 'react'

const AgregarIngrediente = ({ rotulo, setRotulo }) => {
    // Se inicializan los estados donde se van a guardar los ingredientes y donde se va a capturar el ingrediente
    const [ingredientes, setIngredientes] = useState([])
    const [ingrediente, setIngrediente] = useState('')

    // Este useEffect detecta si hay algun cambio en el array de ingredientes y lo que hace es agregar al rotulo los ingredientes
    useEffect(() => {
        setRotulo({ ...rotulo, ingredientes })
    }, [ingredientes])

    // Funcion para agregar ingrediente mediante el evento de click en el boton y resetear el input a una cadena vacia
    const agregarIngrediente = () => {
        setIngredientes([...ingredientes, ingrediente])
        setIngrediente('')
    }

    return (
        <>
            <label htmlFor="Ingrediente">Ingrediente:</label>
            <input
                type="text"
                id="Ingrediente"
                value={ingrediente}
                onChange={(ev) => setIngrediente(ev.target.value)}
            />
            <button onClick={agregarIngrediente}>Agregar ingrediente</button>
        </>
    )
}
export default AgregarIngrediente

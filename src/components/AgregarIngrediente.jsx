import { useState } from 'react'

const AgregarIngrediente = ({ setRotulo }) => {
    const [nuevoIngrediente, setNuevoIngrediente] = useState('')

    const agregar = () => {
        // Obtengo la version previa del rotulo y copio todas sus propiedades en un nuevo objeto. La propiedad de "ingredientes" la modifica sin intervenir en las demas propiedades.

        // Tambien a su vez, lo que hace [...prev.ingredientes] es crear una nueva copia del array de ingredientes para mantener los ingredientes previos y agregar a lo ultimo uno nuevo. Tambien lo limpia de que no tenga espacios en blanco
        setRotulo((prev) => ({
            ...prev,
            ingredientes: [...prev.ingredientes, nuevoIngrediente.trim()],
        }))

        // Limpio el input despues de agregar un nuevo ingrediente
        setNuevoIngrediente('')
    }

    return (
        <label>
            Ingrediente:
            <input
                placeholder="Ej: sal"
                type="text"
                name="Ingrediente"
                value={nuevoIngrediente}
                onChange={(ev) => setNuevoIngrediente(ev.target.value)}
            />
            <button onClick={agregar}>Agregar ingrediente</button>
        </label>
    )
}
export default AgregarIngrediente

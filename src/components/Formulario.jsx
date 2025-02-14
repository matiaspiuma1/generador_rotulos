import { useState } from 'react'

// Componentes
import AgregarIngrediente from './AgregarIngrediente'

// Estado inicial del rotulo, sin los ingredientes agregados
const initialState = {
    nombreEmpresa: '',
    nombreFantasia: '',
    nombreLegal: '',
    tipoUso: '',
    datosEmpresa: '',
    nroRNE: '',
    nroRNPA: '',
}

// TODO: Estilizar el formulario
const Formulario = () => {
    const [rotulo, setRotulo] = useState(initialState)

    // Funcion para finalizar la carga y crear el PDF
    const handleSubmit = (ev) => {
        // TODO: Terminar la funcion para que cuando se termine la carga se cree el PDF
        ev.preventDefault()
        setRotulo(initialState)
    }

    return (
        <>
            <AgregarIngrediente rotulo={rotulo} setRotulo={setRotulo} />
            <form onSubmit={handleSubmit}>
                <label htmlFor="Empresa">Nombre de Empresa:</label>
                <input
                    type="text"
                    id="Empresa"
                    value={rotulo.nombreEmpresa}
                    onChange={(ev) => setRotulo({ ...rotulo, nombreEmpresa: ev.target.value })}
                />
                <label htmlFor="Fantasia">Nombre fantasia:</label>
                <input
                    type="text"
                    id="Fantasia"
                    value={rotulo.nombreFantasia}
                    onChange={(ev) => setRotulo({ ...rotulo, nombreFantasia: ev.target.value })}
                />
                <label htmlFor="Legal">Nombre legal:</label>
                <input
                    type="text"
                    id="Legal"
                    value={rotulo.nombreLegal}
                    onChange={(ev) => setRotulo({ ...rotulo, nombreLegal: ev.target.value })}
                />
                <label htmlFor="Uso">Tipo uso:</label>
                <input
                    type="text"
                    id="Uso"
                    value={rotulo.tipoUso}
                    onChange={(ev) => setRotulo({ ...rotulo, tipoUso: ev.target.value })}
                />
                <label htmlFor="Datos">Datos de empresa:</label>
                <input
                    type="text"
                    id="Datos"
                    value={rotulo.datosEmpresa}
                    onChange={(ev) => setRotulo({ ...rotulo, datosEmpresa: ev.target.value })}
                />
                <label htmlFor="Rne">RNE N°:</label>
                <input
                    type="text"
                    id="Rne"
                    value={rotulo.nroRNE}
                    onChange={(ev) => setRotulo({ ...rotulo, nroRNE: ev.target.value })}
                />
                <label htmlFor="Rnpa">RNPA N°:</label>
                <input
                    type="text"
                    id="Rnpa"
                    value={rotulo.nroRNPA}
                    onChange={(ev) => setRotulo({ ...rotulo, nroRNPA: ev.target.value })}
                />
                {/* Si la propiedad ingredientes es distinta de vacio, se muestra el boton para finalizar la carga */}
                {rotulo.ingredientes != '' && <button type="submit">Finalizar carga</button>}
            </form>
        </>
    )
}
export default Formulario

import { useState } from 'react'
import AgregarIngrediente from './AgregarIngrediente'

const initialState = {
    nombreEmpresa: '',
    nombreFantasia: '',
    nombreLegal: '',
    tipoUso: '',
    ingredientes: [],
    datosEmpresa: '',
    nroRNE: '',
    nroRNPA: '',
}

const Formulario = () => {
    const [rotulo, setRotulo] = useState(initialState)

    const handleSubmit = (ev) => {
        ev.preventDefault()
        setRotulo(initialState)
        console.log(rotulo)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre de Empresa:
                <input
                    type="text"
                    name="Nombre empresa"
                    value={rotulo.nombreEmpresa}
                    onChange={(ev) => setRotulo({ ...rotulo, nombreEmpresa: ev.target.value })}
                />
            </label>
            <label>
                Nombre fantasia:
                <input
                    type="text"
                    name="Nombre fantasia"
                    value={rotulo.nombreFantasia}
                    onChange={(ev) => setRotulo({ ...rotulo, nombreFantasia: ev.target.value })}
                />
            </label>
            <label>
                Nombre legal:
                <input
                    type="text"
                    name="Nombre Legal"
                    value={rotulo.nombreLegal}
                    onChange={(ev) => setRotulo({ ...rotulo, nombreLegal: ev.target.value })}
                />
            </label>
            <label>
                Tipo uso:
                <input
                    type="text"
                    name="Tipo de uso"
                    value={rotulo.tipoUso}
                    onChange={(ev) => setRotulo({ ...rotulo, tipoUso: ev.target.value })}
                />
            </label>
            <label>
                Datos de empresa:
                <input
                    type="text"
                    name="Datos de empresa"
                    value={rotulo.datosEmpresa}
                    onChange={(ev) => setRotulo({ ...rotulo, datosEmpresa: ev.target.value })}
                />
            </label>
            <label>
                RNE N°:
                <input
                    type="text"
                    name="RNE"
                    value={rotulo.nroRNE}
                    onChange={(ev) => setRotulo({ ...rotulo, nroRNE: ev.target.value })}
                />
            </label>
            <label>
                RNPA N°:
                <input
                    type="text"
                    name="RNPA"
                    value={rotulo.nroRNPA}
                    onChange={(ev) => setRotulo({ ...rotulo, nroRNPA: ev.target.value })}
                />
            </label>
            <AgregarIngrediente rotulo={rotulo} setRotulo={setRotulo} />
            <button type="submit">Finalizar</button>
        </form>
    )
}
export default Formulario

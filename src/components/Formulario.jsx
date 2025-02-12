import { useState } from 'react'
import AgregarIngrediente from './AgregarIngrediente'

const Formulario = () => {
    const [rotulo, setRotulo] = useState({
        nombreEmpresa: '',
        nombreFantasia: '',
        nombreLegal: '',
        tipoUso: '',
        ingredientes: [],
        datosEmpresa: '',
        nroRNE: '',
        nroRNPA: '',
    })

    const handleSubmit = (ev) => {
        ev.preventDefault()
        console.log(rotulo)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre de Empresa:
                <input
                    type="text"
                    name="Empresa"
                    value={rotulo.nombreEmpresa}
                    onChange={(ev) => setRotulo({ ...rotulo, nombreEmpresa: ev.target.value })}
                />
            </label>
            <AgregarIngrediente rotulo={rotulo} setRotulo={setRotulo} />
            <button type="submit">Finalizar</button>
        </form>
    )
}
export default Formulario

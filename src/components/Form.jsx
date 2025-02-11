import { useState } from "react"

const Form = () => {
  const [ingrediente, setIngrediente] = useState("")
  const [empresa, setEmpresa] = useState("")

  const handleSubmit = (ev) => {
    ev.preventDefault()

    setIngrediente("")
    setEmpresa("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Empresa:
        <input
          type="text"
          name="Empresa"
          value={empresa}
          onChange={(ev) => setEmpresa(ev.target.value)}
        />
      </label>
      <label>
        Ingrediente
        <input
          type="text"
          name="Ingrediente"
          value={ingrediente}
          onChange={(ev) => setIngrediente(ev.target.value)}
        />
      </label>
      <button type="submit">Agregar</button>
    </form>
  )
}
export default Form

import React from 'react'
import { Form} from '../MainPage/styles'

const ConfirmationForm = () => {
  return (
    <Form>
      <label>
        data de nascimento:
        <input type="date"/>
      </label>
    <label>
      genero: 
      <select>
<option>Homem</option>
<option>Mulher</option>
      </select>
      </label>
      <button>Enviar dados</button>
      </Form>
  )
}

export default ConfirmationForm
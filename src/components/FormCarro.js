import React from 'react'
require('./formsPanels.css');
import SelectInput from './SelectInput.js'

var FormCarro = React.createClass({

  render: function () {
    return (
      <div className="header callout secondary">

        <div className="sign">
          <h1>Carro</h1>
        </div>

        <p>Selecciona un elemento para editarlo o eliminarlo
          o llena el campo inferior sin seleccionar elemento
          para crear uno nuevo</p>

        <form>
          <div className="input-group">

            <SelectInput
              class="input-group-field"
              url="apiAdmin/allRoles"
              name="selectCarro"
              onUserSelect={this.handleUserSelect}
            />

            <div className="input-group-button">
              <input type="submit" className="alert button" value="Borrar"/>
            </div>
          </div>

          <label>Placa
            <input name="autoPlaca" type="text" placeholder=""/>
          </label>
          <label>Modelo
            <input type="text" placeholder=""/>
          </label>
          <label>Marca
            <select name="autoCart" form="carform">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </label>
          <label>Clase
            <input type="text" placeholder=""/>
          </label>
          <label>Tarjeta de openación
            <input type="text" placeholder=""/>
          </label>
          <button type="button" className="success button">Grabar</button>
        </form>
      </div>
    )
  }

});

export default FormCarro;
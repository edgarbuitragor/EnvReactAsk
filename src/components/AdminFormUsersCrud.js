import React from 'react'
import SelectInput from './SelectInput.js'
require('./formsPanels.css');

var AdminFormUsersCrud = React.createClass({

  getInitialState: function() {
    return {
      childSelectValue: undefined
    }
  },

  changeHandler: function(e) {
    this.setState({
      childSelectValue: e.target.value
    })
  },

  render: function() {
    return (
      <div className="header callout secondary">

        <div className="sign">
          <h1>Roles</h1>
        </div>

        <SelectInput
          url="apiAdmin/allRoles"
          name="admin_roles"
          value={this.state.childSelectValue}
          onChange={this.changeHandler}
        />

      </div>
    )
  }

});

export default AdminFormUsersCrud

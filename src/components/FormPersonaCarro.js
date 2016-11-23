import React from 'react'
import MessageAlert from './MessageAlert.js'
import {makeRequest as mReq} from '../utils/mrequest';
import SelectInput from './SelectInput.js'
require('./formsPanels.css');

var FormPersonaCarro = React.createClass({

  getInitialState: function () {
    return {
      newOptionSelectCar: false,
      newOptionSelectPerson: false,
      childSelectValue: undefined,
      option: [{mod:'', person:''}],
      childSelectText: '',
      inputValue: '',
      updateKey: ''
    };
  },

  getRemoteData: function (parreq, cb_success, cb_error) {
    mReq(parreq)
      .then(function (response) {
        cb_success(response)
      }.bind(this))
      .catch(function (err) {
        cb_error(err);
        console.log('FormPersonCar, there was an error!', err.statusText);
      });
  },

  handleUserSelect: function (childSelectValue, childSelectText) {

    this.setState({
      childSelectValue: childSelectValue,
      inputValue: childSelectText
    });

    if (childSelectValue != 0) {
      var params = {'id': childSelectValue};
      var parreq = {
        method: 'GET',
        url: 'apiFuec/idPersonCar',
        params: params
      };

      this.getRemoteData(parreq
        , this.successHandlerSelect
        , this.errorHandlerSelect);
    } else {
      this.refs.selectCar.refs.selectValue.selectedIndex = undefined;
      this.setState({
        option: [{mod:'', person:''}]
      });
    }
  },

  successHandlerSelect: function (remoteData) {
    var data = JSON.parse(remoteData.result);
    var dataArray = [];

    for (var prop in data) {
      var _mod = (data[prop].mod) ? data[prop].mod : undefined;
      var _per = (data[prop].person) ? data[prop].person : undefined;

      if(_mod != undefined && _per != undefined){
        dataArray.push({mod: _mod, person: _per});
      }else{
        dataArray = [];
      }
    }

    this.setState({
      option: dataArray
    });

  },

  errorHandlerSelect: function (remoteData) {
    this.setState({
      showMessage: true,
      contextText: 'Conexion rechazada',
      typeMess: 'alert'
    });
    setTimeout(function () {
      this.setState({
        showMessage: false,
        contextText: '',
        typeMess: ''
      })
    }.bind(this), 3000);
  },


  onChange(e) {
    this.setState({inputValue: e.target.value});
  },

  componentWillReceiveProps: function (nextProps) {
    var nextc = nextProps.newOptionCar;
    var prevc = this.props.newOptionCar;
    var nextp = nextProps.newOptionPerson;
    var prevp = this.props.newOptionPerson;

    if (nextc == true && nextc != prevc) {
      this.setState({
        newOptionSelectCar: true
      });
      this.props.onItemNewCar(false);
    }

    if (nextc == false && nextc != prevc) {
      this.setState({
        newOptionSelectCar: false
      });
    }

    if (nextp == true && nextp != prevp) {
      this.setState({
        newOptionSelectPerson: true
      });
      this.props.onItemNewPerson(false);
    }

    if (nextp == false && nextp != prevp) {
      this.setState({
        newOptionSelectPerson: false
      });
    }
  },

  handleSubmitForm: function (e) {
    e.preventDefault();
    var data = [];
    var relPerCar = new Object();
    var ref = e.target.elements;
    var selectCar = ref.selectCar.value;
    var result = [];

    for (var prop in ref) {
      if (!isNaN(prop) && prop != '0') {
        result.push(prop);
      }
    }

    for (var i = 0; i < result.length - 2; i++) {
      if ((i % 2 == 1)) {
        relPerCar.mod = ref[result[i]].value;
        data.push(relPerCar);
        relPerCar = new Object();
      } else {
        relPerCar.person = ref[result[i]].value;
      }
    }

    if (selectCar !== "") {

      var params = {
        id: selectCar
        , person_car: data
      };

      var parreq = {
        method: 'PUT',
        url: 'apiFuec/updatePersonCar',
        params: {
          'params': params
        }
      };

      this.getRemoteData(parreq,
        this.successFormUpdate,
        this.errorFormUpdate
      );
    }
  },

  successFormUpdate: function (data) {
    this.setState({
      showMessage: true,
      contextText: 'Se actualizo la relación carro y personas',
      typeMess: 'success',
      newOptionSelectA: true
    });

    setTimeout(function () {
      this.setState({
        showMessage: false,
        contextText: '',
        typeMess: '',
        newOptionSelectA: false
      })
    }.bind(this), 3000);
  },

  errorFormUpdate: function (err) {
    this.setState({
      showMessage: true,
      contextText: 'No se actualizaron los registros',
      typeMess: 'alert'
    });
    setTimeout(function () {
      this.setState({
        showMessage: false,
        contextText: '',
        typeMess: ''
      })
    }.bind(this), 3000);
  },

  addNewRelPerCar: function () {
    var newOption = this.state.option;
    newOption.push({keyId: this.uniqueId});
    this.setState({
      option: newOption
    });
  },

  delRelPerCar: function (e) {
    let idKey = e.currentTarget.dataset.key;
    var newOption = this.state.option;
    delete newOption[idKey];
    this.setState({
      option: newOption
    });
  },
  
  render: function () {
    return (
      <div className="header callout secondary">

        <div className="sign">
          <h1>Personas de Carros y Camiones</h1>
        </div>
        <p>Selecciona un elemento para editarlo o eliminarlo
          o llena el campo inferior sin seleccionar elemento
          para crear uno nuevo</p>

        <form onSubmit={this.handleSubmitForm} ref="personCar">

          <div className="row">
            <div className="small-2 columns">
              <label>&nbsp;&nbsp;</label>
              <a onClick={this.addNewRelPerCar} className="button"><i className="fi-plus"></i></a>
            </div>
            <div className="small-10 columns">
              <label>Carro</label>
              <SelectInput
                url="apiFuec/allCar"
                name="selectCar"
                ref="selectCar"
                newOption={this.state.newOptionSelectCar}
                onUserSelect={this.handleUserSelect}
              />
            </div>
          </div>

          {this.state.option.map(function (data, i) {
            return (
              <div key={i} ref={i} className="row">

                <div className="small-2 columns">
                  <label>&nbsp;&nbsp;</label>
                  <a data-key={i}
                     onClick={this.delRelPerCar}
                     className="button">
                    <i className="fi-minus"></i>
                  </a>
                </div>

                <div className="small-6 columns">
                  <label> Persona
                    <SelectInput
                      selectstate={data.person}
                      className="input-group-field"
                      url="apiFuec/allPerson"
                      name={"selectPersonaCarro_" + i}
                      newOption={this.state.newOptionSelectPerson}
                    />
                  </label>
                </div>

                <div className="small-4 columns">
                  <label> Modalidad
                    <SelectInput
                      selectstate={data.mod}
                      url="apiFuec/allModality"
                      name={"selectModalidad_" + i}
                    />
                  </label>
                </div>
              </div>
            )
          }, this)}

          <div className="row">
            <div className="shrink columns">
              <input type="submit" className="success button" value="Grabar"/>
            </div>
            <div className="columns">
              <MessageAlert
                showHide={this.state.showMessage}
                type={this.state.typeMess}
                contextText={this.state.contextText}
                onclickMessage={this.onClickMessage}
              />
            </div>
          </div>

        </form>
      </div>
    )
  }

});

export default FormPersonaCarro;
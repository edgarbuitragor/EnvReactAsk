import React from 'react'
import AdminFormUser from './AdminFormUser.js'
import AdminFormEmpresa from './AdminFormEmpresa.js'
import AdminFormUserRoles from './AdminFormUserRoles.js'
import {Row, Tooltip, message, Layout,
 Col, BackTop, Button, Icon} from 'antd';

const { Header, Content} = Layout;

const PageOne = React.createClass({

  getInitialState: function () {
    return {
      newOption: false
    }
  },

  handleNewElement: function (newValue) {
    if (newValue !== this.state.newOption) {
      this.setState({
        newOption: newValue
      });
    }
  },

  render: function () {
    return (
      <Content>

        <div className="hiperLink">

          <Tooltip placement="left" title={'Carro'}>
            <Button size={'large'} shape="circle" type="primary" ghost><a href="#empresa">Em</a></Button>
          </Tooltip>

          <Tooltip placement="left" title={'Contrato'}>
            <Button size={'large'} shape="circle" type="primary" ghost><a href="#usuario">Us</a></Button>
          </Tooltip>

          <Tooltip placement="left" title={'Persona'}>
            <Button size={'large'} shape="circle" type="primary" ghost><a href="#usuarioroles">Ur</a></Button>
          </Tooltip>

        </div>

        <Header>
          <h2>
            <Icon type="solution"/>
            ADMIN - Administración
          </h2>
        </Header>

        <AdminFormEmpresa
          id="empresa"/>

        <Row>
          <Col span="12">

            <AdminFormUser
              id="usuario"
              onItemNew={this.handleNewElement} />
          </Col>
          <Col span="12">

            <AdminFormUserRoles
              id="usuarioroles"
              newOption={this.state.newOption}
              onItemNew={this.handleNewElement} />
          </Col>
        </Row>

        <BackTop/>

      </Content>
    );
  }

});

export default PageOne

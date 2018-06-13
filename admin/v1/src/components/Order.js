import React, { Component } from 'react';
import { Row, Col, Badge, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Dropdown as SeDropdown } from 'semantic-ui-react';
import { Table } from 'semantic-ui-react';
import axios from 'axios';

class Order extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  updateOrder(newStatus, index) {
    console.log(newStatus);
    console.log(index);
    if (this.props.status !== newStatus) {
      axios.put('https://aasnackapi-gse00014261.uscom-east-1.oraclecloud.com/api/UpdateOrder/'+this.props.order.id, {
          status: newStatus
        })
        .then(res => {
          console.log(res.status === 200);
          if (res.status === 200) {
            this.props.updateOrder(newStatus, index);
          }
        });
    }
  }

  getLocaleTime() {
    var date = new Date(this.props.order.timestemp);
    var ts = date.toLocaleTimeString();
    console.log(ts);
    return ts;
  }

  getItems() {
    if (this.props.order.items === null) { return ""; }
    else {
      var items = this.props.order.items.split(",");
      if (items.length === 1 && (items[0] === 'NULL' || items[0] === 'null')) {
        items.pop();
      } 
      return (
        <Row>
          <Col xs={{ size: 12 }}>
            <SeDropdown text={(items.length) ? "Items ("+items.length+")" : "None"} 
                        fluid className="inverted order-cell" style={{fontSize: "15px"}}
                        options={
                          items.map((x, i) => { 
                            return { text: x, value: i }
                          })
                        }/>
          </Col>
        </Row>
      )
    }
  }

  getButton(status) {
    console.log(status);
    switch(status) {
      case 'InProgress':
        return (
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} style={{fontSize: "15px"}}>
            <DropdownToggle caret color="warning" size="lg" style={{fontSize: "15px"}}>Pending</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Update Order</DropdownItem>
              <DropdownItem onClick={this.updateOrder.bind(this, 'InProgress', this.props.index)}>Pending</DropdownItem>
              <DropdownItem onClick={this.updateOrder.bind(this, 'Delivered', this.props.index)}>Delivered</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        );
      case 'Delivered':
        return (
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} style={{fontSize: "15px"}}>
            <DropdownToggle caret color="success" size="lg" style={{fontSize: "15px"}}>Delivered</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Update Order</DropdownItem>
              <DropdownItem onClick={this.updateOrder.bind(this, 'InProgress', this.props.index)}>Pending</DropdownItem>
              <DropdownItem onClick={this.updateOrder.bind(this, 'Delivered', this.props.index)}>Delivered</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        );
      default:
        return <Badge></Badge>;
    }
  }

  render() {
    return (
      <Table.Row key={this.props.index} style={{fontSize: "15px"}}>
        <Table.Cell textAlign='center'>
          <Row><Col>{this.props.order.name}</Col></Row>
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Row><Col>{this.props.order.table_number}</Col></Row>
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Row><Col>{this.props.order.team_name}</Col></Row>
        </Table.Cell>
        <Table.Cell textAlign='center'>{this.getItems()}</Table.Cell>
        <Table.Cell textAlign='center'>
          <Row><Col>{this.getLocaleTime()}</Col></Row>
        </Table.Cell>
        <Table.Cell textAlign='center'>{this.getButton(this.props.order.status)}</Table.Cell>
      </Table.Row>
    );
  }
}

export default Order;
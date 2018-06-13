import React, { Component } from 'react';
import { Table, Dropdown, Badge } from 'semantic-ui-react';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  mapItems = (items) => {
    items.map((x, i) => {return{ text: x, value: i}})
  }

  getItems = () => {
    if (this.props.order.items === null) { return ""; }
    else {
      var items = this.props.order.items.split(",");
      if (items.length === 1 && (items[0] === 'NULL' || items[0] === 'null')) {
        items.pop();
      } 
      return (
        <Dropdown fluid button className="inverted icon" icon='chevron down'
                  text={(items.length) ? "Items ("+items.length+")" : "None"} 
                  options={items.map((x, i) => {return{ text: x, value: i}})} />
      )
    }
  }

  getLocaleTime = () => {
    var date = new Date(this.props.order.timestemp);
    var ts = date.toLocaleTimeString();
    console.log(ts);
    return ts;
  }

  getButton = (status) => {
    switch(status) {
      case 'InProgress':
        return (
          <Dropdown text='Pending' pointing button className='link item' color="yellow">
            <Dropdown.Menu>
              <Dropdown.Header>Update Order</Dropdown.Header>
              <Dropdown.Item>Pending</Dropdown.Item>
              <Dropdown.Item>Delivered</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        );
      case 'Delivered':
        return (
          <Dropdown text='Delivered' pointing button className='link item' color="green">
            <Dropdown.Menu>
              <Dropdown.Header>Update Order</Dropdown.Header>
              <Dropdown.Item>Pending</Dropdown.Item>
              <Dropdown.Item>Delivered</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        );
      default:
        return <Dropdown />;
    }
  }

  render(){
    return(
      <Table.Row key={this.props.index} style={{fontSize: "15px"}}>
        <Table.Cell>
          {this.props.order.name}
        </Table.Cell>
        <Table.Cell>
          {this.props.order.table_number}
        </Table.Cell>
        <Table.Cell>
          {this.props.order.team_name}
        </Table.Cell>
        <Table.Cell>
          {this.getItems()}
        </Table.Cell>
        <Table.Cell>
          {this.getLocaleTime()}
        </Table.Cell>
        <Table.Cell>
          {this.getButton(this.props.order.status)}
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default Order;
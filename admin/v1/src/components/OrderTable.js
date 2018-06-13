import React, { Component } from 'react';
import { CardBody } from 'reactstrap';
import { Table } from 'semantic-ui-react';
import Order from './Order';

class OrderTable extends Component {

  constructor(props) {
    super(props)
    this.state = { };
    this.updateOrder = this.updateOrder.bind(this);
    this.getOrders = this.getOrders.bind(this);
  };

  updateOrder(status, index) { this.props.updateOrder(status, index);}
  getOrders() {
    var orders = [];
    var first = (this.props.page - 1) * this.props.pageSize;
    var last = first + this.props.pageSize
    last = (last >= this.props.totalOrders) ? this.props.totalOrders : last;
    console.log(this.props.page);
    console.log(this.props.totalOrders);
    console.log(first);
    console.log(last);
    for (var i = first; i < last; i++) {
      orders.push(<Order order={this.props.orders[i]} 
                         index={i} updateOrder={this.updateOrder}/>
      );
    }
    return <Table.Body>{orders}</Table.Body>
  }

  handleSort = param => () => {
    console.log(param);
    this.props.sortTable(param);
  }

  render() {
    return (
      <CardBody style={{overflowX: "scroll"}}>
        <Table inverted sortable striped selectable collapsing unstackable>
          <Table.Header>
            <Table.Row className="title" textAlign='center' style={{fontSize: "15px"}}>
              <Table.HeaderCell sorted={this.props.column === 'name' ? this.props.direction : null} onClick={this.handleSort("name")}>Name</Table.HeaderCell>
              <Table.HeaderCell sorted={this.props.column === 'team_name' ? this.props.direction : null} onClick={this.handleSort("team_name")}>Team</Table.HeaderCell>
              <Table.HeaderCell sorted={this.props.column === 'table_number' ? this.props.direction : null} onClick={this.handleSort("table_number")}>Team</Table.HeaderCell>
              <Table.HeaderCell>Items</Table.HeaderCell>
              <Table.HeaderCell sorted={this.props.column === 'timestemp' ? this.props.direction : null} onClick={this.handleSort("timestemp")}>Time Ordered</Table.HeaderCell>
              <Table.HeaderCell sorted={this.props.column === 'status' ? this.props.direction : null} onClick={this.handleSort("status")}>Order Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {this.getOrders()}
        </Table>
      </CardBody>
    )
  }
};

export default OrderTable;
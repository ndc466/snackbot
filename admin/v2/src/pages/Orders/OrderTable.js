import React, { Component } from 'react';
import { Responsive, Segment, Container, Header, Table, Pagination } from 'semantic-ui-react';
import Order from './Order';

class OrderTable extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  getOrders = () => {
    var orders = [];
    var first = (this.props.page - 1) * this.props.pageSize;
    var last = first + this.props.pageSize
    last = (last >= this.props.totalOrders) ? this.props.totalOrders : last;
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

  handleChange = (e, data) => {
    console.log(e);
    console.log(data);
  }

  render() {
    return(
      <Segment inverted>
        <Header size="large" style={{textTransform: ""}}>User Orders</Header>
        <Segment.Group style={{overflowX: "scroll"}}>
          <Table inverted sortable striped selectable unstackable>
            <Table.Header>
              <Table.Row textAlign='center'>
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
        </Segment.Group>
        <Pagination defaultActivePage={1}
                    firstItem={{ content: "First" }}
                    lastItem={{ content: "Last" }}
                    prevItem={{ content: "Prev" }}
                    nextItem={{ content: "Next" }}
                    totalPages={8}
                    onPageChange={this.handleChange} />
      </Segment>
    );
  }
}

export default OrderTable;
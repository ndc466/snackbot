import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import MediaQuery from 'react-responsive';
import { Responsive, Segment, Container, Header, Table, Pagination } from 'semantic-ui-react';

import OrderTable from './OrderTable';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    var teams = this.props.teams ? this.props.teams.toString() : 'null';
    var tables = this.props.tables ? this.props.tables.toString() : 'null';
    axios.get('https://aasnackapi-gse00014261.uscom-east-1.oraclecloud.com/api/FilterOrders?teams='+teams+'&tables='+tables)
    .then(res => {
      console.log(res.data);
      const data = res.data;
      this.setState({
        orders: data, column: null, direction: null, 
        page: 1, totalPages: 5, first: 0, last: this.props.opp,
        pageSize: this.props.opp, totalOrders: data.length
      });
    });
  }

  sortTable = (param) => {
    console.log(param);
    const column = this.state.column;
    const orders = this.state.orders;
    const direction = this.state.direction;

    if (column !== param) {
      this.setState({
        column: param,
        orders: _.sortBy(orders, [param]),
        direction: 'ascending'
      })
      return
    }
    this.setState({
      orders: orders.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending'
    })
  }

  render() {
    return(
      <OrderTable orders={this.state.orders} page={this.state.page} 
                  pageSize={this.state.pageSize} updateOrder={this.updateOrder}
                  column={this.state.column} direction={this.state.direction}
                  sortTable={this.sortTable} totalOrders={this.state.totalOrders} />
    );
  }
}

export default Orders;

/*
<MediaQuery minDeviceWidth={1024}>
  <Desktop />
</MediaQuery>
<MediaQuery maxDeviceWidth={1023}>
  <MediaQuery minDeviceWidth={426}>
    <Tablet />
  </MediaQuery>
  <MediaQuery maxDeviceWidth={425}>
    <Mobile />
  </MediaQuery>
</MediaQuery>


class Desktop extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render(){
    return(
      <Segment>
        <Header size="large" style={{textTransform: ""}}>User Orders</Header>
        <Segment.Group>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Registration Date</Table.HeaderCell>
                <Table.HeaderCell>E-mail address</Table.HeaderCell>
                <Table.HeaderCell>Premium Plan</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>No</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie Harington</Table.Cell>
                <Table.Cell>January 11, 2014</Table.Cell>
                <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                <Table.Cell>Yes</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jill Lewis</Table.Cell>
                <Table.Cell>May 11, 2014</Table.Cell>
                <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                <Table.Cell>Yes</Table.Cell>
              </Table.Row>
            </Table.Body>

          </Table>
        </Segment.Group>
      </Segment>
    );
  }
}

class Tablet extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render(){
    return(
      <Segment>
        <Header size="large">Tablet</Header>
        <Segment.Group style={{overflowX: "scroll"}}>
          <Table unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Registration Date</Table.HeaderCell>
                <Table.HeaderCell>E-mail address</Table.HeaderCell>
                <Table.HeaderCell>Premium Plan</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>No</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie Harington</Table.Cell>
                <Table.Cell>January 11, 2014</Table.Cell>
                <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                <Table.Cell>Yes</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jill Lewis</Table.Cell>
                <Table.Cell>May 11, 2014</Table.Cell>
                <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                <Table.Cell>Yes</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment.Group>
      </Segment>
    );
  }
}

class Mobile extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render(){
    return(
      <Segment>
        <Header size="large">Mobile</Header>
        <Segment.Group style={{overflowX: "scroll"}}>
          <Table unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Registration Date</Table.HeaderCell>
                <Table.HeaderCell>E-mail address</Table.HeaderCell>
                <Table.HeaderCell>Premium Plan</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>No</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie Harington</Table.Cell>
                <Table.Cell>January 11, 2014</Table.Cell>
                <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                <Table.Cell>Yes</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jill Lewis</Table.Cell>
                <Table.Cell>May 11, 2014</Table.Cell>
                <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                <Table.Cell>Yes</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment.Group>
      </Segment>
    );
  }
}
*/
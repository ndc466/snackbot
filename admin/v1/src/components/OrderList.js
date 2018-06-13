import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ordersActions from '../actions/ordersActions';
import PropTypes from 'prop-types';

import { CardBody } from 'reactstrap';
import { Table } from 'semantic-ui-react';
import OrderTest from './OrderTest';


class OrderList extends Component {  

  componentWillMount() { // HERE WE ARE TRIGGERING THE ACTION
    this.props.ordersActions.fetchOrders();
  }

  getOrders() {
    var orders = [];
    for (var i = 0; i < this.props.orders.length; i++) {
      orders.push(<OrderTest order={this.props.orders[i]} index={i}/>
      );
    }
    return <Table.Body>{orders}</Table.Body>
  }

  renderData() {
    return (
      <CardBody>
        <Table inverted sortable striped selectable>
          <Table.Header>
            <Table.Row className="title" textAlign='center'>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Team</Table.HeaderCell>
              <Table.HeaderCell>Team</Table.HeaderCell>
              <Table.HeaderCell>Items</Table.HeaderCell>
              <Table.HeaderCell>Time Ordered</Table.HeaderCell>
              <Table.HeaderCell>Order Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {this.getOrders()}
        </Table>
      </CardBody>
    )
  }
  
  render() {
    console.log(this.props.orders.length);
    return (
      <div className=""> {
        this.props.orders.length > 0 ? 
        this.renderData() :
        <div className="">
          No Data
        </div>
      }
      </div>
    );
  }
}

OrderList.propTypes = {
  ordersActions: PropTypes.object,
  orders: PropTypes.array
};

function mapStateToProps(state) {
  return {
    orders: state.orders
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ordersActions: bindActionCreators(ordersActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderList);
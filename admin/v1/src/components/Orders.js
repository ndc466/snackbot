import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Card, CardHeader } from 'reactstrap';
import OrderTable from './OrderTable';
import OrderPagination from './OrderPagination';
import MediaQuery from 'react-responsive';

const ordersPerPage = 10;

class Orders extends Component {

  constructor(props) {
    super(props);
    this.state = { };
    this.setPage = this.setPage.bind(this);
    this.sortTable = this.sortTable.bind(this);
    this.updateOrder = this.updateOrder.bind(this);
  }

  componentDidMount() {
    var teams = this.props.teams ? this.props.teams.toString() : 'null';
    var tables = this.props.tables ? this.props.tables.toString() : 'null';
    axios.get('https://aasnackapi-gse00014261.uscom-east-1.oraclecloud.com/api/FilterOrders?teams='+teams+'&tables='+tables)
    //axios.get('https://aasnackapi-gse00014261.uscom-east-1.oraclecloud.com/api/GetOrders')
      .then(res => {
        console.log(res.data);
        const data = res.data;
        this.setState({
          orders: data, column: null, direction: null, 
          page: 1, totalPages: 5, first: 0, last: ordersPerPage,
          pageSize: ordersPerPage, totalOrders: data.length
        });
      });
  }

  updateOrder(status, index) {
    var orders = this.state.orders;
    orders[index].status = status;
    this.setState({ orders: orders });
  }
  setPage(newPage) {
    console.log(newPage);
    this.setState({ page: newPage })
  }
  sortTable(param) {
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
    return (
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <MediaQuery minDeviceWidth={1000}>
          <CardHeader>
            <i className="fa fa-align-justify"></i>
            <h1 className="display-6" style={{fontSize: "35px", textTransform: "uppercase"}}>User Orders</h1>
          </CardHeader>
          <OrderTable orders={this.state.orders} page={this.state.page} pageSize={this.state.pageSize}
                      column={this.state.column} direction={this.state.direction}
                      sortTable={this.sortTable} totalOrders={this.state.totalOrders}
                      updateOrder={this.updateOrder}/>
          <OrderPagination page={this.state.page} totalPages={this.state.totalPages}
                          pageSize={this.state.pageSize} totalOrders={this.state.totalOrders}
                          setPage={this.setPage}/>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1000}>
          <CardHeader>
            <i className="fa fa-align-justify"></i>
            <h1 className="display-6" style={{fontSize: "20px", textTransform: "uppercase"}}>User Orders</h1>
          </CardHeader>
          <OrderTable orders={this.state.orders} page={this.state.page} pageSize={this.state.pageSize}
                      column={this.state.column} direction={this.state.direction}
                      sortTable={this.sortTable} totalOrders={this.state.totalOrders}
                      updateOrder={this.updateOrder}/>
          <OrderPagination page={this.state.page} totalPages={this.state.totalPages}
                          pageSize={this.state.pageSize} totalOrders={this.state.totalOrders}
                          setPage={this.setPage}/>
        </MediaQuery>
      </Card>
    )
  }
}

export default Orders;
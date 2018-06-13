import React, { Component } from 'react';
import axios from 'axios';

import Orders from './Orders';
import TableSelect from './TableSelect';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ordersPerPage: 10
    };
  }

  componentDidMount = () => {
    axios.get('https://aasnackapi-gse00014261.uscom-east-1.oraclecloud.com/api/GetTableNumbers')
    .then(res => {
      console.log(res.data);
      const data = res.data;
      this.setState({
        allTables: data.map((table, i) => {
          return {
            text: "Table " + table.TableNumber,
            value: table.TableNumber
          }
        })
      });
    });
    axios.get('https://aasnackapi-gse00014261.uscom-east-1.oraclecloud.com/api/GetTeamNames')
    .then(res => {
      console.log(res.data);
      const data = res.data;
      this.setState({
        allTeams: data.map((team, i) => {
          return {
            text: team.TeamName,
            value: team.TeamName
          }
        })
      });
    });
  }

  filterOrders = (tables, teams) => { this.setState({ tables: tables, teams: teams }) }

  render(){
    return(
      (this.state.tables || this.state.teams) ? 
      <Orders tables={this.state.tables} teams={this.state.teams} opp={this.state.ordersPerPage} /> :
      <TableSelect tables={this.state.allTables} teams={this.state.allTeams} filterOrders={this.filterOrders}/>
    );
  }
}

export default Home;
import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import axios from 'axios';

import Orders from './Orders';
import TableSelect from './TableSelect';

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = { };
    this.searchBy = this.searchBy.bind(this);
  };

  componentDidMount() {
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

  searchBy(tables, teams) { this.setState({ tables: tables, teams: teams }) }

  render() {
    return (
      <Container fluid="true" className="Orders">
        <br/><br/>
        <Row>
          <Col sm="12"  md={{ size: 10, offset: 1 }}>
              { 
                (this.state.tables || this.state.teams) ? 
                <Orders tables={this.state.tables} teams={this.state.teams}/> :
                <TableSelect tables={this.state.allTables} teams={this.state.allTeams} searchBy={this.searchBy}/>
              }
          </Col>
        </Row>
      </Container>
    )
  }
};

export default Main;
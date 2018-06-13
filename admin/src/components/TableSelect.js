import React, { Component } from 'react';
import { Dropdown, Button } from 'semantic-ui-react';
import { Row, Col,  Card, CardHeader, CardBody, CardFooter } from 'reactstrap';

class TableSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.updateTables = this.updateTables.bind(this);
    this.updateTeams = this.updateTeams.bind(this);
    this.startSearch = this.startSearch.bind(this);
  }

  updateTables(e, { name, value }) { this.setState({ tables: value }) }
  updateTeams(e, { name, value }) { this.setState({ teams: value }) }
  startSearch() {
    this.props.searchBy(this.state.tables, this.state.teams);
  }
  
  render() {
    return (
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardHeader>
          <i className="fa fa-align-justify"></i>
            <h1 className="display-6" style={{fontSize: "35px", textTransform: "uppercase"}}>Select Assigned Tables</h1>
        </CardHeader>
        <Row>
          <Col sm="8" md={{ size: 8, offset: 2 }}>
            <CardBody>
              <Row>
                <Col xs={{ size: 6 }}>
                  <Dropdown placeholder='Table Number'
                            fluid multiple selection
                            style={{fontSize: "20px"}}
                            options={this.props.tables}
                            value={this.state.tables}
                            onChange={this.updateTables}
                            name='tables' className="inverted">
                  </Dropdown>
                </Col>
                <Col xs={{ size: 6 }}>
                  <Dropdown placeholder='Team Name'
                            fluid multiple selection
                            style={{fontSize: "20px"}}
                            options={this.props.teams}
                            value={this.state.teams}
                            onChange={this.updateTeams}
                            name='teams' className="inverted">
                  </Dropdown>
                </Col>
              </Row>
            <CardFooter>
              <Button content='Next' icon='right arrow' labelPosition='right' 
                      onClick={this.startSearch} style={{fontSize: "20px"}}/>
            </CardFooter>
          </CardBody>
          </Col>
        </Row>

      </Card>
    );
  }
}

export default TableSelect;
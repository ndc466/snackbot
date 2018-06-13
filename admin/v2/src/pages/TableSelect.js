import React, { Component } from 'react';
import { 
  Container, Segment, Header,
  Dropdown, Form, Input, Button, Icon
} from 'semantic-ui-react';

class TableSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  updateTables = (e, { name, value }) => { this.setState({ tables: value }) }
  updateTeams = (e, { name, value }) => { this.setState({ teams: value }) }
  filterOrders = () => {
    this.props.filterOrders(this.state.tables, this.state.teams);
  }

  render(){
    return(
      <Segment inverted>
        <Header size="large" style={{textTransform: ""}}>Select Assigned Tables</Header>
        <Form inverted>
          <Form.Group widths="equal">
            <Form.Dropdown placeholder='Table Number'
                           fluid multiple selection
                           options={this.props.tables}
                           value={this.state.tables}
                           onChange={this.updateTables} />
            <Form.Dropdown placeholder='Team Name'
                           fluid multiple selection 
                           options={this.props.teams}
                           value={this.state.teams}
                           onChange={this.updateTeams}/>
          </Form.Group>
        </Form>
        <Button icon labelPosition='right' onClick={this.filterOrders}>
          Next<Icon name='right arrow' />
        </Button>
      </Segment>
    );
  }
}

export default TableSelect;
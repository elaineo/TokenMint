import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';

const LaunchIco = React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  getValidationState() {
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            Launch a crowdsale
          </Col>
        </Row>
        <Form>
          <FormGroup
            controlId="etherPrice"
            validationState={this.getValidationState()}
          >
            <ControlLabel>Price per Token (in ether)</ControlLabel>
            <FormControl
              type="number"
              value={this.state.value}
              placeholder="1"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>Required.</HelpBlock>
          </FormGroup>

          <FormGroup
            controlId="fundingGoal"
            validationState={this.getValidationState()}
          >
            <ControlLabel>Funding Goal (sale will end when goal is reached)</ControlLabel>
            <FormControl
              type="number"
              value={this.state.value}
              placeholder="100000000"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <FormControl.Static>
              BTC, EUR USD
            </FormControl.Static>
          </FormGroup>

          <FormGroup>
            <Button 
              bsStyle="primary"
              onClick={this.initIco} >
              START THE ICO
            </Button>
          </FormGroup>

        </Form>
      </Grid>
    );
  }
});




export default LaunchIco;

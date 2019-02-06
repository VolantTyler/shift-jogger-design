import React, { Component } from 'react';
//thirt party imports
import { 
    Row, 
    Col 
    } from "reactstrap";
//local imports
import { DashboardBanner } from "./componentStyles/dashboardStyles";
import { NewLog } from "./NewLog";
import { LogSnapshot } from "./LogSnapshot";

export class Dashboard extends Component {
  render() {
    return (
      <DashboardBanner>
          <Row>
              <Col xs="12" sm="4">
                <NewLog />
              </Col>
              <Col xs="12" sm="4">
                <NewLog />
              </Col>
              <Col xs="12" sm="4">
                  <NewLog />         
              </Col>
          </Row>
          <Row>
              <Col>
                <LogSnapshot />
              </Col>
              <Col>
                <LogSnapshot />
              </Col>             
               <Col>
                <LogSnapshot />
              </Col>
          </Row>
      </DashboardBanner>
    )
  }
}

export default Dashboard

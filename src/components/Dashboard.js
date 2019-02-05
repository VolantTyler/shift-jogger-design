import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col } from "reactstrap";
import { DashboardBanner } from "./componentStyles/dashboardStyles";

export class Dashboard extends Component {
  render() {
    return (
      <DashboardBanner>
          <Row>
              <Col>One</Col>
              <Col>Two</Col>
              <Col>Three</Col>

          </Row>
        
      </DashboardBanner>
    )
  }
}

export default Dashboard

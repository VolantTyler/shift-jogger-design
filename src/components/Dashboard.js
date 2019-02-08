import React, { Component } from 'react';
//thirt party imports
import { 
    Container,
    Row, 
    Col 
    } from "reactstrap";
//local imports
import { 
    DashboardBanner,
    SnapShotStyle
 } from "./componentStyles/dashboardStyles";
import { NewLog } from "./NewLog";
import { LogSnapshot } from "./LogSnapshot";
//local style


const dashStyle = {
    textAlign: 'left',
};

export class Dashboard extends Component {
  render() {
    return (
        <div style={dashStyle}>
            <DashboardBanner >
                <Container>
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
                </Container>
            </DashboardBanner>
                
            <Container style={SnapShotStyle}>
                <h3>Recent Invoices</h3>
                <Row>
                    <Col >
                        <LogSnapshot />
                    </Col>
                    <Col>
                        <LogSnapshot />
                    </Col>             
                    <Col>
                        <LogSnapshot />
                    </Col>
                </Row>
            </Container>
        </div>
    )
  }
}

export default Dashboard

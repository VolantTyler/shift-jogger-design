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
import { DashboardBannerSummary } from "./DashboardBannerSummary";
import { LogSnapshot } from "./LogSnapshot";
//local style


const dashStyle = {
    textAlign: 'left',
};

export class NewLog extends Component {
  render() {
    return (
        <div style={dashStyle}>
            <DashboardBanner >
                <Container>
                    <Row>
                        <Col xs="12" sm="4">
                            <DashboardBannerSummary />
                        </Col>
                        <Col xs="12" sm="4">
                            <DashboardBannerSummary />
                        </Col>
                        <Col xs="12" sm="4">
                            <DashboardBannerSummary />         
                        </Col>
                    </Row>
                </Container>
            </DashboardBanner>
                
            <Container style={SnapShotStyle}>
                <h3>NEW LOG COMING SOON TO A ROUTE NEAR YOU!!!</h3>
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

export default NewLog

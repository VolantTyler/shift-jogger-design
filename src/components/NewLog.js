import React, { Component } from 'react';
//thirt party imports
import { 
    Container,
    Row, 
    Col,
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText
    } from "reactstrap";

//local imports
import { 
    DashboardBanner,
    SnapShotStyle
 } from "./componentStyles/dashboardStyles";
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
                        <h3>Submit a New Log</h3>
                    </Row>
                </Container>
            </DashboardBanner>
                
            <Container style={SnapShotStyle}>
                <Form>
                    {/* Title row */}
                    <Row>
                        <h3>Title</h3>
                        <hr></hr>
                    </Row>
                    <FormGroup row>
                        <Col >
                            <Input type="email" name="title" id="title" placeholder="with a placeholder" />
                        </Col>
                    </FormGroup>
            <Row>
                {/* Duration column */}
                <Col sm={6}>
                    <Row>
                        <h3>Duration</h3>
                        <hr></hr>
                    </Row>
                    <FormGroup row>
                        <Label for="startDate" sm={4}>Start Date</Label>
                        <Col sm={8}>
                            <Input type="text" name="startDate" id="startDate" placeholder="MM/DD/YYYY" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="endDate" sm={4}>End Date</Label>
                        <Col sm={8}>
                            <Input type="text" name="endDate" id="endDate" placeholder="MM/DD/YYYY" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="startTime" sm={4}>Start Time</Label>
                        <Col sm={8}>
                            <Input type="text" name="startTime" id="startTime" placeholder="--:-- --" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="endTime" sm={4}>End Time</Label>
                        <Col sm={8}>
                            <Input type="text" name="endTime" id="endTime" placeholder="--:-- --" />
                        </Col>
                    </FormGroup>
                </Col>

                {/* Notes column */}
                <Col sm={6}>
                    <Row>
                        <h3>Notes</h3>
                        <hr></hr>
                    </Row>
                    <FormGroup row style={{height: "100%"}}>
                        {/* <Label for="notes" sm={2}>Notes</Label> */}
                        <Col >
                            <Input type="textarea" name="notes" id="notes" />
                        </Col>
                    </FormGroup>
                </Col>
            </Row>
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button>Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    )
  }
}

export default NewLog

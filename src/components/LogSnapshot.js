import React, {Component} from 'react';
import { Card, Button, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
import {PrimaryText} from "./componentStyles/dashboardStyles";

export class LogSnapshot extends Component  {
    render() {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>John Smith</CardTitle>
          <PrimaryText>2.50 </PrimaryText>
          <CardText>2/7/19</CardText>
        </CardBody>
        <CardFooter className="text-muted" style={{textAlign: 'center'}}>View Invoice</CardFooter>
      </Card>
    </div>
  )
    }
}

export default LogSnapshot;
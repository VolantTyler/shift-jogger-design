import React, {Component} from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

export class LogSnapshot extends Component  {
    render() {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>John Smith</CardTitle>
          <CardText>2.50</CardText>
          <CardText>2/7/19</CardText>
          <Button>View Invoice</Button>
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
    </div>
  )
    }
}

export default LogSnapshot;
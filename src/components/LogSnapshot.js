import React, {Component} from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

export class LogSnapshot extends Component  {
    render() {
  return (
    <div>
      <Card>
        <CardHeader tag="h3">Featured</CardHeader>
        <CardBody>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
    </div>
  )
    }
}

export default LogSnapshot;
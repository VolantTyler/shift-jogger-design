import React, { Component } from 'react'
import { 
    Button
 } from "reactstrap";
import { BannerLog } from "./componentStyles/bannerLogStyles";

export class NewLog extends Component {
  render() {
    return (
      <BannerLog>
        <p>Hours Worked:</p>
        <h1>5.75</h1>
        <Button outline color="secondary">New Log</Button>
      </BannerLog>
    )
  }
}

export default NewLog

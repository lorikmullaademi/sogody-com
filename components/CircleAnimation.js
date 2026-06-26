import React, { Component } from "react"

const cir = {
  height: "50px",
  width: "50px",
  borderRadius: "50px",
  borderStyle: "solid",
  borderColor: "green",
}

class CircleAnimation extends Component {
  state = {
    timer: 10,
  }
  render() {
    return <div style={cir}>{this.state.timer}</div>
  }
}

export default CircleAnimation

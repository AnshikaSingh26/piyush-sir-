import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
// import home_image from '../assets/breakfast.png'
class Quick extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="qs-box" onClick={this.handleClick} style={{ cursor: 'pointer' }}>
              <div className="qs-box-container">
                  <img className="qs-image" src={require('../'+this.props.imgSrc).default} alt="breakfast" />
                  <h4 className="qs-box-heading">{this.props.title}</h4>
                  <p className="qs-box-desc">{this.props.disp}</p>
              </div>
          </div>
      </React.Fragment>
  )
  }
}
export default withRouter(Quick);
import React, { Component } from 'react'

export default class AddToCart extends Component {
  render() {
    return (
      <div className="text-center button-container">
        <button className="btn btn-primary" onClick={this.props.getNewSubtotal}>Add to cart</button>
      </div>
    )
  }
}

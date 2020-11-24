import React, { Component } from 'react'
import './POPOSSpace.css'

class LikeButton extends Component {
  constructor(props) {
    super(props)

    this.state = { count: 0}
    // console.log(this.props.test)
  }

  increment() {
    this.setState({ count: this.state.count + parseInt(this.props.test) })
  }

  render() {
    return (
      <div className="LikeButton" >
        <p >{this.state.count}</p>

        <button onClick={(e) => {
          this.increment()
        }}>Like</button>

      </div>
    )
  }
}

export default LikeButton
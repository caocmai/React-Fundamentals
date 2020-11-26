import React, { Component } from 'react'
import './POPOSSpace.css'

class LikeButton extends Component {
  constructor(props) {
    super(props)

    this.state = { count: 0}
    // console.log(this.props.test)
  }

  increment() {
    this.setState({ count: this.state.count + parseInt(this.props.count) })
  }

  render() {
    return (
      <div className="LikeButtonSection">
        <h4 className="LikeButtonCount"  >{this.state.count}</h4>

        <button className='likeButton' onClick={(e) => {
          this.increment()
        }}>Like</button>

      </div>
    )
  }
}

export default LikeButton
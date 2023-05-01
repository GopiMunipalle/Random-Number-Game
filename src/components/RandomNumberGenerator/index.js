// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onClickButton = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button
              className="button"
              type="button"
              onClick={this.onClickButton}
            >
              Generate
            </button>
          </div>
          <p className="heading">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator

// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    // list: {
    //   imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    //   username: 'Wade Warren',
    //   companyName: 'Rang',
    //   description:
    //     'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
    // },
    count: 0,
  }

  onClickRight = () => {
    const {reviewsList} = this.props
    const listLength = reviewsList.length
    const {count} = this.state

    if (count < listLength - 1) {
      this.setState(prev => ({count: prev.count + 1}))
    }
    // this.setState({list: reviewsList[count]})
  }

  onClickLeft = () => {
    const {count} = this.state
    // const {reviewsList} = this.props

    if (count > 0) {
      this.setState(prev => ({count: prev.count - 1}))
    }
    // this.setState({list: reviewsList[count]})
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const list = reviewsList[count]

    return (
      <div className="bg-container">
        <h1>Reviews</h1>
        <div className="carousel">
          <button
            type="button"
            onClick={this.onClickLeft}
            data-testid="leftArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="list-container">
            <img
              src={list.imgUrl}
              alt={list.username}
              className="profile-image"
            />
            <p>{list.username}</p>
            <p>{list.companyName}</p>
            <p>{list.description}</p>
          </div>
          <button
            type="button"
            onClick={this.onClickRight}
            data-testid="rightArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel

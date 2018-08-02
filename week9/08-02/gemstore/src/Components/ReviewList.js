import React, { Component } from "react";
import ReviewItem from "./ReviewItem";

class ReviewList extends Component {
  render() {
    return (
      <div>
        {this.props.reviews.map(review => <ReviewItem key={review.id} review={review} />)}
      </div>
    )
  }
}

export default ReviewList;
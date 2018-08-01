import React, { Component } from 'react';

class ReviewItem extends Component {
  render() {

    const review = this.props.review;

    return(
      <blockquote>
        <strong>Stars { review.rating }</strong> { review.body }
        <cite className="clearfix">
          &mdash;{ review.author }
        </cite>
      </blockquote>
    );
  }
}

export default ReviewItem;
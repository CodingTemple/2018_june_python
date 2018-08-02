import React, {Component} from 'react';
import ReviewList from '../ReviewList';
import AddReview from '../AddReview';

class Reviews extends Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    }
  }

  addReview(submittedReview) {
    this.setState(state => ({reviews: state.reviews.concat([submittedReview])}))
  }

  render() {

    if (this.state.reviews.length === 0) {
      // this.state.reviews = this.props.gem.reviews;
      this.setState({
        reviews: this.props.gem.reviews
      });
    }
    // const reviews = this.props.gem.reviews;

    return(
      <ul className="list-unstyled">
        <h4>Reviews</h4>
        <li>
          <ReviewList reviews={this.state.reviews} />

          {/* <!-- Live Preview --> */}
          {/* <blockquote>
            <strong>Stars { newReview.rating }</strong>
            { newReview.body }
            <cite className="clearfix">
              &mdash;{ newReview.author }
            </cite>
          </blockquote> */}
          {/* <!-- Live Preview --> */}

          {/* <!-- Review Form --> */}
          <AddReview onAddReview={addedReview => {
            this.addReview(addedReview);
            console.log(addedReview)
          }} />
        </li>
      </ul>
    );
  }
}

export default Reviews;
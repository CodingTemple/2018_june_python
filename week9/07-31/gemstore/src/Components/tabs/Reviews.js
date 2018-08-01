import React, {Component} from 'react';
import ReviewsList from '../ReviewsList';
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
    if(this.state.reviews.length === 0){
      this.state.reviews  = this.props.gem.reviews;
    }
    console.log(this.state.reviews);
    return(
      <ul className="list-unstyled">
        <h4>Reviews</h4>
        <li>
          <ReviewsList reviews={this.state.reviews} />

          {/* <!-- Review Form --> */}
          <h4>Submit a Review</h4>
          <AddReview onAddReview={addedReview => {
            this.addReview(addedReview);
            console.log(addedReview);
          }} />
        </li>
      </ul>
    );
  }
}

export default Reviews;
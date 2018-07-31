import React, {Component} from 'react';

class Reviews extends Component {
  render() {

    const reviews = this.props.gem.reviews;

    return(
      <ul className="list-unstyled">
        <h4>Reviews</h4>
        <li>
          <blockquote>
            <strong>Stars { reviews.rating }</strong>
            { reviews.body }
            <cite className="clearfix">
              &mdash;{ reviews.author }
            </cite>
          </blockquote>

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
          <form action="">
            <h4>Submit a Review</h4>
            <fieldset className="form-group">
              <select name="rating" className="form-control" title="Stars">
                <option disabled>Rate the Product</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
                <option value="4">★★★★</option>
                <option value="5">★★★★★</option>
              </select>
            </fieldset>
            <fieldset className="form-group">
              <textarea name="body"
                className="form-control" cols="30" rows="10" placeholder="Write a short review of the product..."></textarea>
            </fieldset>
            <fieldset className="form-group">
              <input name="author" type="text" className="form-control" placeholder="Derek" title="Name" />
            </fieldset>
            <fieldset className="form-group">
              <input type="submit" value="Submit Review" className="btn btn-primary pull-right" />
            </fieldset>
          </form>
        </li>
      </ul>
    );
  }
}

export default Reviews;
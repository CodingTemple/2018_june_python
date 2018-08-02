import React, {Component} from 'react';

class AddReview extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const rating = e.target.elements.rating.value;
    const body = e.target.elements.body.value;
    const author = e.target.elements.author.value;
    const newReview = {
      id: Number(new Date()),
      createDate: Number(new Date()),
      rating,
      body,
      author
    }
    rating && body && author ? this.props.onAddReview(newReview) : alert("Invalid submision");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
      </div>
    )
  }
}

export default AddReview;
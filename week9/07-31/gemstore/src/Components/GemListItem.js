import React, {Component} from 'react';
import ProductTab from './ProductTabs';

class GemListItem extends Component {
  render() {

    const gem = this.props.gem;

    return (
      <div className="col-md-4">
        <li className="list-group-item">
          {/* Gem name and price */}
          <h3>
            {gem.name}
            <em className="pull-right">${gem.price}</em>
          </h3>

          {/* Gem image */}
          <div className="img-wrap product-image">
            <img className="img-responsive" src="http://placehold.it/500x500&text=Gem_Image" alt={gem.description} />
          </div>

          {/* Add to cart button */}
          <div className="text-center button-container">
            <button className="btn btn-primary">Add to cart</button>
          </div>

          {/* Product tabs */}
          <ProductTab gem={gem} />
        </li>
      </div>
    );
  }
}

export default GemListItem;
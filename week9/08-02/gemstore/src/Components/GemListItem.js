import React, {Component} from 'react';
import ProductTab from './ProductTabs';
import AddToCart from './AddToCart';

class GemListItem extends Component {
  constructor() {
    super();
    this.state = {
      subtotal: 0
    }
  }

  updateSubtotal = () => this.setState({subtotal: this.state.subtotal + this.props.gem.price});
  
  render() {
    const gem = this.props.gem;
    const getSubtotal = this.props.subtotal;

    return (
      <div className="col-md-4">
        <div>
          {this.state.subtotal}
        </div>
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
          <AddToCart subtotal={getSubtotal} gem={gem} getNewSubtotal={this.updateSubtotal} />

          {/* Product tabs */}
          <ProductTab gem={gem} />
        </li>
      </div>
    );
  }
}

export default GemListItem;
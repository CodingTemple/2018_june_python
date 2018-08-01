import React, {Component} from 'react';
import Description from './tabs/Description';
import Specs from './tabs/Specs';
import Reviews from './tabs/Reviews';


class ProductTab extends Component {
  render() {

    const gem = this.props.gem;

    return(
      <div>
        <ul className="nav nav-pills">
          <li>
            <a href="">Description</a>
          </li>
          <li>
            <a href="">Specs</a>
          </li>
          <li>
            <a href="">Reviews</a>
          </li>
        </ul>

        {/* Description Tab */}
        <Description gem={gem} />

        {/* Specs Tab */}
        <Specs />

        {/* Reviews */}
        <Reviews gem={gem} />
      </div>
    );
  }
}

export default ProductTab;
import React, {Component} from 'react';

class Specs extends Component {
  render() {
    return(
      <div>
        <h4>Specs</h4>
        <ul className="list-unstyled">
          <li>
            <strong>Shine</strong>: Product Shine
          </li>
          <li>
            <strong>Faces</strong>: Product Faces
          </li>
          <li>
            <strong>Rarity</strong>: Product Rarity
          </li>
          <li>
            <strong>Color</strong>: Product Color
          </li>
        </ul>
      </div>
    );
  }
}

export default Specs;
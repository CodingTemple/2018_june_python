import React, {Component} from 'react';
import GemListItem from './GemListItem';

class GemsList extends Component {
  render() {
    const getSubtotal = this.props.subtotal;

    return (
      <ul className="list-group">
        {this.props.gems.map((gem, index) => <GemListItem key={index} gem={gem} subtotal={getSubtotal} />)}
      </ul>
    );
  }
}

export default GemsList;
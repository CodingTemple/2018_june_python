import React, {Component} from 'react';
import GemListItem from './GemListItem';

class GemsList extends Component {
  render() {
    return (
      <ul class="list-group">
        {this.props.gems.map((gem, index) => <GemListItem key={index} gem={gem} />)}
      </ul>
    );
  }
}

export default GemsList;
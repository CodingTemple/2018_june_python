import React, {Component} from 'react';

class Description extends Component {
  render() {

    const gem = this.props.gem;

    return(
      <div>
        <h4>Description</h4>
        <blockquote>{gem.description}</blockquote>
      </div>
    );
  }
}

export default Description;
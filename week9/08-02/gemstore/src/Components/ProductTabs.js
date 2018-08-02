import React, { Component } from 'react';
import Description from './tabs/Description';
import Specs from './tabs/Specs';
import Reviews from './tabs/Reviews';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class ProductTab extends Component {
  handleClick = e => e.preventDefault();

  render() {

  const gem = this.props.gem;

  return(
      <div>
        <Tabs defaultIndex={0} selectedTabClassName="active">
          <TabList>
            <ul className="nav nav-pills">
              <Tab><a href="" onClick={this.handleClick}>Description</a></Tab>
              <Tab><a href="" onClick={this.handleClick}>Specs</a></Tab>
              <Tab><a href="" onClick={this.handleClick}>Reviews</a></Tab>
            </ul>
          </TabList>

          {/* Description Tab */}
          <TabPanel>
            <Description gem={gem} />
          </TabPanel>

          {/* Specs Tab */}
          <TabPanel>
            <Specs />
          </TabPanel>

          {/* Reviews Tab */}
          <TabPanel>
            <Reviews gem={gem} />
          </TabPanel>

        </Tabs>
      </div>
    );
  }
}

export default ProductTab;


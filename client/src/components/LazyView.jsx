import React from 'react';
import { render } from 'react-dom';
import LazyList from './LazyList.jsx'

export default class LazyView extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  	  lazyData: [{name: "Golden Gate Bridge", img: "http://www.planetware.com/photos-large/USCA/california-san-francisco-golden-gate-bridge.jpg", type: "Price"},
  	  {name: "Palace of Fine Arts", img: "http://resources.touropia.com/gfx/d/tourist-attractions-in-san-francisco/palace_of_fine_arts.jpg", type: "Distance"},
  	  {name: "Testing", img: "https://i.ytimg.com/vi/PI-v0x6MOyg/maxresdefault.jpg", type: "Time"}]
  	};

    this.filterData = this.filterData.bind(this);
  }

  filterData(type) {
    return this.state.lazyData.filter(item => (
      item.type === type
    ));
  }

  render() {
    return(
      <div>
        <h2>Price</h2>
        <LazyList 
          lazyData={ this.filterData('Price') } />
        <h2>Distance</h2>
        <LazyList 
          lazyData={ this.filterData('Distance') } />
        <h2>Time</h2>
        <LazyList 
          lazyData={ this.filterData('Time') } />
      </div>
    )
  }
}

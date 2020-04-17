import React, { Component } from 'react';
import Carousel from "./Carousel";

class Carouselparent extends Component {
  render() {
    return (
      <div>
        <Carousel/>
        {this.props.children}

      </div>
    );
  }
}

export default Carouselparent;
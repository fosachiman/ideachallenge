import React from 'react';

export default class BackgroundImage extends React.Component {

  render() {
    return (
        <img className="carousel-image" src={'./assets/images/' + this.props.images[this.props.location]} alt={this.props.images[this.props.location]}/>
    )
  }
}

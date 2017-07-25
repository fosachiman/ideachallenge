import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import BackgroundImage from './BackgroundImage';

export default class Carousel extends React.Component {

  handleClick(position) {
    clearInterval(this.props.carouselInterval);
    this.props.goToImage(position);
  }

  buttonStyle(position) {
    if(this.props.carouselLocation === position)
      return {backgroundColor: 'gray'}
  }

  //generates Carousel "buttons" based on the number of header images
  render() {
    let carouselButtons = this.props.data.images.map((_, index) => {
      return (
        <div
          key={index}
          onClick={() => this.handleClick(index)}
          style={this.buttonStyle(index)}></div>
      )
    })
    let backgroundImage = (<BackgroundImage
                key={this.props.carouselLocation}
                images={this.props.data.images}
                location={this.props.carouselLocation}
              />)
    return (
      <div className="carousel-cont">
        <section className="carousel">
          <CSSTransitionGroup
            transitionName="slide"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
            {backgroundImage}
          </CSSTransitionGroup>
          <div className="carousel-overlay">
            <div className="carousel-text-cont">
              <h1 className="carousel-title">Screening: <br/> DVF Secret Agent Part 2</h1>
              <h2 className="carousel-date">October 15, 2017</h2>
              <p className="carousel-info">Join us for a private screening of DVF Secret Agent Part 2 with our special guest,
                director Peter Lindberg</p>
            </div>
          </div>
        </section>
        <div className="carousel-navigation">
          {carouselButtons}
        </div>
      </div>
    );
  }
}

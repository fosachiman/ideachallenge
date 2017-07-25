import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Article from './components/Article';
import data from './data.js';
import Swipeable from 'react-swipeable';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 0,
  columnWidth: 1,
  horizontalOrder: true
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      carouselLocation: 0,
      interval: null
    }
    this.goToImage = this.goToImage.bind(this);
  }

  componentDidMount() {
    this.orderArticles(data.articles);
    this.startCarousel(this.state.carouselLocation);
  }

  goToImage(position) {
    this.setState({ carouselLocation: position });
    this.startCarousel(position);
  }

  startCarousel(position) {
    let currentLocation = position;
    let run = setInterval(() => {
      if (currentLocation >= data.images.length - 1)
        currentLocation = 0;
      else
        currentLocation++;
      this.setState({ carouselLocation: currentLocation})
    }, 5000)
    this.setIntervalState(run);
  }

  setIntervalState(interval) {
    this.setState({ interval });
  }

  //sorts articles by date
  orderArticles(data) {
    const sortedData = data.sort((a,b) => b.date - a.date);
    this.setState({ articles: sortedData })
  }

  onSwipeRight() {
    clearInterval(this.state.interval);
    let position;
    if (this.state.carouselLocation > 0)
      position = this.state.carouselLocation - 1;
    else
      position = data.images.length - 1;
    this.goToImage(position)
  }

  onSwipeLeft() {
    clearInterval(this.state.interval);
    let position;
    if (this.state.carouselLocation < (data.images.length - 1) )
      position = this.state.carouselLocation + 1;
    else
      position = 0;
    this.goToImage(position)
  }

  render() {
    let articles = this.state.articles.map((article, index) => {
      return (
        <Article
          key={index}
          title={article.title}
          date={article.date}
          image={article.image}
          largeCol={'largeCol' + ((index + 3) % 3 + 1)}
          smallCol={'smallCol' + ((index + 2) % 2 + 1)}
          createMasonry={this.createMasonry}
        />
      )
    })
    return (
      <div className="App">
        <Header />
        <Swipeable
          onSwipedRight={() => this.onSwipeRight()}
          onSwipedLeft={() => this.onSwipeLeft()}
          style={{touchAction: 'none'}}
        >
          <Carousel
            data={data}
            carouselLocation={this.state.carouselLocation}
            goToImage={this.goToImage}
            carouselInterval={this.state.interval}
            />
        </Swipeable>
        <section className='article-cont'>
          <Masonry
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}>
            {articles}
          </Masonry>
        </section>
        <footer>&#169;2017 &#8212; SPARTA PLAESENT - <a href="">INSTAGRAM</a> - <a href="">FACEBOOK</a> - <a href="">TWITTER</a></footer>
      </div>
    );
  }
}

export default App;

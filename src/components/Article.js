import React from 'react';
import moment from 'moment';

export default class Article extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hovered: false,
    }
  }

  componentDidMount() {
    moment().format();
  }

  changeArticleStyle(action) {
    if (action === 'hover')
      this.setState({ hovered: true })
    else
      this.setState({ hovered: false })
  }

  render() {
    let style;
    if (this.state.hovered)
      style = {textDecoration: 'underline'}
    return (
      <div
        className={`article ${this.props.largeCol} ${this.props.smallCol}`}
        onMouseEnter={() => this.changeArticleStyle('hover')}
        onMouseLeave={() => this.changeArticleStyle('out')}>
        <img className="article-image" src={`./assets/images/${this.props.image}`} alt={this.props.image} />
        <p className="article-date">{moment.utc(this.props.date).format('MMMM DD YYYY')}</p>
        <h3 className="article-title" style={style}>{this.props.title}</h3>
        <p className="article-presented">Presented by <span className="underline">LOREM IPSUM</span></p>
      </div>
    );
  }
}

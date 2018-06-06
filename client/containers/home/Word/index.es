import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Word extends Component {
  constructor(props) {
    super(props);
    this.handleDetails = this.handleDetails.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleDetails() {
    alert('coming soon');
  }

  handleRemove(e) {
    e.stopPropagation();
    this.props.onRemove(this.props.item);
  }

  render() {
    const className = classNames('Word ui-button ui-button-secondary', this.props.className);
    const { item } = this.props;

    return (
      <article className={className} onClick={this.handleDetails}>
        {item.data.word}
        <span className="ui-link" onClick={this.handleRemove}>x</span>
      </article>
    );
  }
}

Word.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
  onRemove: PropTypes.func,
};

export default Word;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Word from '../Word';
import WordsSelector from '../WordsSelector';

const MAX_ITEMS = 10;

class Words extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(item) {
    return <Word key={item.data.word} item={item} onRemove={this.props.onRemove} />;
  }

  render() {
    const className = classNames('Words', this.props.className);
    const { onUpdate, items } = this.props;

    let selector;
    if (items.length < MAX_ITEMS) selector = <WordsSelector onUpdate={onUpdate} />;

    return (
      <article className={className}>
        {items.map(this.renderItem)}
        {selector}
      </article>
    );
  }
}

Words.propTypes = {
  className: PropTypes.string,
  onRemove: PropTypes.func,
  onUpdate: PropTypes.func,
  items: PropTypes.array,
};

export default Words;

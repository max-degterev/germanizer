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

  renderItem(item, index) {
    const key = `${item.data.word}:${index}`;
    return <li key={key}><Word item={item} onRemove={this.props.onRemove} /></li>;
  }

  render() {
    const className = classNames('Words', this.props.className);
    const { onUpdate, items } = this.props;

    let selector;
    if (items.length < MAX_ITEMS) selector = <WordsSelector onUpdate={onUpdate} />;

    return (
      <article className={className}>
        <ul>{items.map(this.renderItem)}</ul>
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

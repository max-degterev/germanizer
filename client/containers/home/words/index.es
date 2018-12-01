import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Word from '../word';
import WordsSelector from '../words_selector';

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
    const { onUpdate, onRefresh, items } = this.props;

    let selector;
    if (items.length < MAX_ITEMS) selector = <WordsSelector onUpdate={onUpdate} />;

    let refresh;
    if (items.length) {
      refresh = <span className="ui-button ui-button-primary" onClick={onRefresh}>Refresh</span>;
    }

    return (
      <article className={className}>
        <ul>{items.map(this.renderItem)}</ul>
        {selector}
        {refresh}
      </article>
    );
  }
}

Words.propTypes = {
  className: PropTypes.string,
  onRemove: PropTypes.func,
  onUpdate: PropTypes.func,
  onRefresh: PropTypes.func,
  items: PropTypes.array,
};

export default Words;
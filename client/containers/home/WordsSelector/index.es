import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Select from '../../../components/select';

const DICTIONARIES = [
  { value: 'actors', key: 'subject' },
  { value: 'adjectives', key: 'adjective' },
  { value: 'nouns', key: 'noun' },
  { value: 'prepositions', key: 'preposition' },
  { value: 'pronouns', key: 'pronoun' },
  { value: 'verbs', key: 'verb' },
  { value: 'adjectives_wiktionary', key: 'adjective (wiktionary)' },
  { value: 'nouns_wiktionary', key: 'noun (wiktionary)' },
  { value: 'verbs_wiktionary', key: 'verb (wiktionary)' },
];


class WordsSelector extends Component {
  handleUpdate({ value }) {
    console.warn(value)
  }

  render() {
    const className = classNames('WordsSelector', this.props.className);

    return (
      <Select className={className} options={DICTIONARIES} onUpdate={this.handleUpdate}>
        <span>+</span> add
      </Select>
    );
  }
}

WordsSelector.propTypes = {
  className: PropTypes.string,
};

export default WordsSelector;

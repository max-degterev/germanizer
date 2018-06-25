import React, { Component, createRef } from 'react';
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
  { value: 'verbs_reflexive', key: 'verb (reflexive)' },
  { value: 'verbs_irregular', key: 'verb (irregular)' },
  { value: 'verbs_modal', key: 'verb (modal)' },
  { value: 'verbs_extended', key: 'verb (extended)' },
  { value: 'adjectives_wiktionary', key: 'adjective (wiktionary)' },
  { value: 'nouns_wiktionary', key: 'noun (wiktionary)' },
  { value: 'verbs_wiktionary', key: 'verb (wiktionary)' },
];

class WordsSelector extends Component {
  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.input = createRef();
  }

  handleUpdate() {
    const { getValue, reset } = this.input.current;
    this.props.onUpdate(getValue().value);
    reset();
  }

  render() {
    const className = classNames('WordsSelector', this.props.className);

    return (
      <article className={className}>
        <span className="ui-button ui-button-primary" onClick={this.handleUpdate}>+</span>
        <Select ref={this.input} options={DICTIONARIES} />
      </article>
    );
  }
}

WordsSelector.propTypes = {
  className: PropTypes.string,
  onUpdate: PropTypes.func,
};

export default WordsSelector;

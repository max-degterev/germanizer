import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Select from '../../../components/select';
import Cross from '../../../components/cross';

const DICTIONARIES = [
  { value: 'actors', key: 'subject' },
  { value: 'adjectives', key: 'adjective' },
  { value: 'nouns', key: 'noun' },
  { value: 'prepositions_dative_accusative', key: 'preposition (dative/accusative)' },
  { value: 'prepositions_genitive', key: 'preposition (genitive)' },
  { value: 'prepositions_multicase', key: 'preposition (multicase)' },
  { value: 'prepositions', key: 'preposition' },
  { value: 'pronouns', key: 'pronoun' },
  { value: 'verbs', key: 'verb' },
  { value: 'verbs_reflexive', key: 'verb (reflexive)' },
  { value: 'verbs_irregular', key: 'verb (irregular)' },
  { value: 'verbs_modal', key: 'verb (modal)' },
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
        <Select className="ui-button ui-button-secondary" ref={this.input} options={DICTIONARIES} />
        <span className="ui-button ui-button-primary" onClick={this.handleUpdate}><Cross straight /></span>
      </article>
    );
  }
}

WordsSelector.propTypes = {
  className: PropTypes.string,
  onUpdate: PropTypes.func,
};

export default WordsSelector;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getURLSafeWord } from './utils.es';

import Modal from '../../../components/modal';

const BasicModal = (props) => {
  const className = classNames('BasicModal', props.className);
  const { item, ...cleanProps } = props;
  const { word, translation } = item.data;

  const urlSafeWord = getURLSafeWord(word, item.type);
  const googleLink = `https://translate.google.com/#de/en/${urlSafeWord}`;
  const wikiLink = `https://en.wiktionary.org/wiki/${urlSafeWord}`;

  return (
    <Modal {...cleanProps} className={className}>
      <header>
        <span className="BasicModal-Word">{word}</span>
        &mdash;
        <strong className="BasicModal-Translation">{translation}</strong>
      </header>
      <footer className="BasicModal-Links">
        more on
        <a href={googleLink} rel="noopener noreferrer nofollow" target="_blank">translate.google.com</a>
        or
        <a href={wikiLink} rel="noopener noreferrer nofollow" target="_blank">wiktionary.org</a>
      </footer>
    </Modal>
  );
};

BasicModal.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
  onClose: PropTypes.func,
};

export default BasicModal;

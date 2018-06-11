import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Modal from '../../../components/modal';

import { getURLSafeWord } from './utils.es';

const LABELS = [
  'ich',
  'du',
  'er/sie/es',
  'wir',
  'ihr',
  'sie/Sie',
];

const renderForms = (data) => {
  if (!data.forms) return null;

  const renderRow = (label, index) => (
    <tr key={label}>
      <td className="VerbModal-Label">{label}</td>
      <td>{data.forms.section_0[index]}</td>
      <td>{data.forms.section_1[index]}</td>
      <td>{data.forms.section_2[index]}</td>
    </tr>
  );

  return (
    <table className="VerbModal-Table">
      <tbody>
        <tr>
          <th />
          <th>Indikativ Präsens</th>
          <th>Indikativ Präteritum</th>
          <th>Indikativ Perfekt</th>
        </tr>
        {LABELS.map(renderRow)}
      </tbody>
    </table>
  );
};

const VerbModal = (props) => {
  const className = classNames('VerbModal', props.className);
  const { item: { data }, ...cleanProps } = props;

  const urlSafeWord = getURLSafeWord(data.word);
  const formsLink = `http://en.bab.la/conjugation/german/${urlSafeWord}`;
  const wikiLink = `https://en.wiktionary.org/wiki/${urlSafeWord}`;

  return (
    <Modal {...cleanProps} className={className}>
      <header>
        <span className="VerbModal-Word">{data.word}</span>
        &mdash;
        <strong className="VerbModal-Translation">{data.translation}</strong>
      </header>

      {renderForms(data)}

      <footer className="VerbModal-Links">
        more on
        <a href={wikiLink} rel="noopener noreferrer nofollow" target="_blank">wiktionary.org</a>
        or
        <a href={formsLink} rel="noopener noreferrer nofollow" target="_blank">bab.la</a>
      </footer>
    </Modal>
  );
};

VerbModal.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
  onClose: PropTypes.func,
};

export default VerbModal;

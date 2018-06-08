import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Modal from '../../../components/modal';

const VerbModal = (props) => {
  const className = classNames('VerbModal', props.className);
  const { item: { data }, ...cleanProps } = props;

  return (
    <Modal {...cleanProps} className={className}>
      <span className="VerbModal-Word">{data.word}</span>
      &mdash;
      <strong className="VerbModal-Translation">{data.translation}</strong>
    </Modal>
  );
};

VerbModal.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
  onClose: PropTypes.func,
};

export default VerbModal;

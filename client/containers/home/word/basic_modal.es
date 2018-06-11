import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Modal from '../../../components/modal';

const BasicModal = (props) => {
  const className = classNames('BasicModal', props.className);
  const { item: { data }, ...cleanProps } = props;

  return (
    <Modal {...cleanProps} className={className}>
      <span className="BasicModal-Word">{data.word}</span>
      &mdash;
      <strong className="BasicModal-Translation">{data.translation}</strong>
    </Modal>
  );
};

BasicModal.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
  onClose: PropTypes.func,
};

export default BasicModal;

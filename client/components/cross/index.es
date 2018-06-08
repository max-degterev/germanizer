import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Cross = ({ className, ...props }) => (
  <span {...props} className={classNames('Cross', className)}>+</span>
);

Cross.propTypes = {
  className: PropTypes.string,
};


export default Cross;

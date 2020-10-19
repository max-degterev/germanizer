import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Cross = ({ className, straight, ...props }) => (
  <span {...props} className={classNames('Cross', className, { 'is-straight': straight })}>+</span>
);

Cross.propTypes = {
  className: PropTypes.string,
  straight: PropTypes.bool,
};


export default Cross;

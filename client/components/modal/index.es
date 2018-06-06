import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Modal extends Component {
  componentDidMount() {
    this.container = document.getElementById('aside');
  }

  componentWillUnmount() {
    this.container.removeChild(this.el);
  }

  render() {
    if (!this.container) return null;

    const className = classNames('Modal', this.props.className);
    const content = (
      <article className={className}>
        <div className="Modal-Content">
          <span className="Modal-Close" onClick={this.props.onClose}>x</span>
          {this.props.children}
        </div>
      </article>
    );
    return createPortal(content, this.container);
  }
}

Modal.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;

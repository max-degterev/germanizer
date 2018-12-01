import React, { Component, createRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Cross from '../cross';


class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { isReady: false };

    this.body = createRef();

    this.handleMisclick = this.handleMisclick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    this.container = document.getElementById('aside');
    document.addEventListener('keydown', this.handleKeyDown);
    this.setState({ isReady: true });
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    const complete = () => this.container.removeChild(this.el);
    this.setState({ isReady: false }, complete);
  }

  handleKeyDown(e) {
    if (e.key === 'Escape') this.props.onClose();
  }

  handleMisclick(e) {
    if (e.target === this.body.current) this.props.onClose();
  }

  render() {
    if (!this.state.isReady) return null;

    const className = classNames('Modal', this.props.className);
    const content = (
      <article className={className} onClick={this.handleMisclick} ref={this.body}>
        <div className="Modal-Content">
          <span className="Modal-Close" onClick={this.props.onClose}><Cross /></span>
          {this.props.children}
          <span className="Modal-Close-Bottom" onClick={this.props.onClose}>Close</span>
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

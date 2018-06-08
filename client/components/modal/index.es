import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { isReady: false };
  }

  componentDidMount() {
    this.container = document.getElementById('aside');
    this.setState({ isReady: true });
  }

  componentWillUnmount() {
    const complete = () => this.container.removeChild(this.el);
    this.setState({ isReady: false }, complete);
  }

  render() {
    if (!this.state.isReady) return null;

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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Modal from '../../../components/modal';


class Word extends Component {
  constructor(props) {
    super(props);
    this.handleShowDetails = this.handleShowDetails.bind(this);
    this.handleHideDetails = this.handleHideDetails.bind(this);
    this.handleRemove = this.handleRemove.bind(this);

    this.state = { isModalVisible: false };
  }

  handleShowDetails() {
    this.setState({ isModalVisible: true });
  }

  handleHideDetails(e) {
    e.stopPropagation();
    this.setState({ isModalVisible: false });
  }

  handleRemove(e) {
    e.stopPropagation();
    this.props.onRemove(this.props.item);
  }

  renderModal() {
    if (!this.state.isModalVisible) return null;

    return (
      <Modal onClose={this.handleHideDetails}>
        {this.props.item.data.translation}
      </Modal>
    );
  }

  render() {
    const className = classNames('Word', this.props.className);
    const { item } = this.props;

    return (
      <article className={className} onClick={this.handleShowDetails}>
        <span className="ui-button ui-button-secondary">{item.data.word}</span>
        <span className="ui-button ui-button-primary" onClick={this.handleRemove}>x</span>
        {this.renderModal()}
      </article>
    );
  }
}

Word.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
  onRemove: PropTypes.func,
};

export default Word;

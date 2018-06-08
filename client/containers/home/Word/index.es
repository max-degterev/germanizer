import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import BasicModal from './basic_modal';
import VerbModal from './verb_modal';

const modalMap = {
  verbs: VerbModal,
  verbs_wiktionary: VerbModal,
};


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

  handleHideDetails() {
    this.setState({ isModalVisible: false });
  }

  handleRemove() {
    this.props.onRemove(this.props.item);
  }

  renderModal() {
    if (!this.state.isModalVisible) return null;
    const { item } = this.props;
    const Modal = modalMap[item.type] || BasicModal;
    return <Modal onClose={this.handleHideDetails} item={item} />;
  }

  render() {
    const className = classNames('Word', this.props.className);
    const { item } = this.props;

    return (
      <article className={className}>
        <span className="ui-button ui-button-secondary" onClick={this.handleShowDetails}>
          {item.data.word}
        </span>
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

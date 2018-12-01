import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/layout';

import * as actions from './state/actions';

import Words from './words';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  componentDidMount() {
    this.fetchWords();
  }

  fetchWords() {
    const { selected } = this.props;
    if (Array.isArray(selected) && selected.length) this.props.getWords(selected);
  }

  handleAdd(value) {
    this.props.addWord(value);
  }

  handleRemove(value) {
    this.props.removeWord(value);
  }

  handleRefresh() {
    this.props.resetWords();
    this.fetchWords();
  }

  render() {
    const { words: items, addWord: onUpdate, removeWord: onRemove } = this.props;
    return (
      <Layout className="HomePage">
        <Words {...{ items, onUpdate, onRemove }} onRefresh={this.handleRefresh} />
      </Layout>
    );
  }
}

const mapStateToProps = ({ session, home }) => {
  const { selected } = session;
  const { words } = home;
  return { selected, words };
};

export default connect(mapStateToProps, actions)(HomePage);

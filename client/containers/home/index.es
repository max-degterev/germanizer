import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/layout';

import { addWord, getWords, removeWord } from './state/actions';

import Words from './Words';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    const { selected } = this.props;
    if (Array.isArray(selected) && selected.length) this.props.getWords(selected);
  }

  handleAdd(value) {
    this.props.addWord(value);
  }

  handleRemove(value) {
    this.props.removeWord(value);
  }

  render() {
    const { words: items, addWord: onUpdate, removeWord: onRemove } = this.props;
    return (
      <Layout className="HomePage">
        <Words {...{ items, onUpdate, onRemove }} />
      </Layout>
    );
  }
}


// TODO: use reselect to optimize this selector
const mapStateToProps = ({ session, home }) => {
  const { selected } = session;
  const { words } = home;
  return { selected, words };
};

const actions = { addWord, getWords, removeWord };

export default connect(mapStateToProps, actions)(HomePage);

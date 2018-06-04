import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/layout';

import { addWord, getWords, removeWord } from './state/actions';
import { setSession } from '../../modules/session';

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
    const current = this.props.selected || [];
    this.props.addWord(value);
    this.props.setSession({ selected: current.concat([value]) });
  }

  handleRemove(value) {
    const index = this.props.words.indexOf(value);
    const selected = [...this.props.selected];
    selected.splice(index, 1);
    this.props.removeWord(index);
    this.props.setSession({ selected });
  }

  render() {
    const { words } = this.props;
    return (
      <Layout className="HomePage">
        <Words onUpdate={this.handleAdd} onRemove={this.handleRemove} items={words} />
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

const actions = { addWord, getWords, removeWord, setSession };

export default connect(mapStateToProps, actions)(HomePage);

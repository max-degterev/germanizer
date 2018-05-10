import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/layout';

import { getWords } from './state/actions';
import { setSession } from '../../modules/session';

import Words from './Words';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.handleSelectionUpdate = this.handleSelectionUpdate.bind(this);
  }

  handleSelectionUpdate() {
    console.warn('ok!', arguments);
  }

  render() {
    const { words } = this.props;
    return (
      <Layout className="HomePage">
        <Words onUpdate={this.handleSelectionUpdate} items={words} />
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

const actions = { getWords, setSession };

export default connect(mapStateToProps, actions)(HomePage);

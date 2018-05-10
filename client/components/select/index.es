import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import classNames from 'classnames';

import { getOption } from './utils';


class Select extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = { index: 0 };
  }

  handleChange(event) {
    const { onUpdate } = this.props;
    const index = parseInt(event.target.value, 10);
    const option = getOption(this.props.options[index]);
    const complete = () => {
      if (onUpdate) onUpdate(option);
    };
    this.setState({ index }, complete);
  }

  renderOption(item, index) {
    const { key } = getOption(item);
    return <option value={index} key={key}>{key}</option>;
  }

  render() {
    const { options, children } = this.props;
    const className = classNames('Select', this.props.className);
    const cleanProps = omit(this.props, 'className', 'options', 'onUpdate');

    return (
      <article className={className}>
        {children}
        <select {...cleanProps} onChange={this.handleChange} value={this.state.index}>
          {options.map(this.renderOption)}
        </select>
      </article>
    );
  }
}

Select.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  options: PropTypes.array.isRequired,
  onUpdate: PropTypes.func,
};

export default Select;

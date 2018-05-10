import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Word = (props) => {
  const className = classNames('Word', props.className);
  const { item: { data } } = props;

  return (
    <article className={className}>{data.word}</article>
  );
};

Word.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
};

export default Word;

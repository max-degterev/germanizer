import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Word = (props) => {
  const className = classNames('Word', props.className);
  const { item, onRemove } = props;

  const handleRemove = onRemove.bind(this, item);

  return (
    <article className={className}>
      {item.data.word}
      <span onClick={handleRemove}>x</span>
    </article>
  );
};

Word.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
  onRemove: PropTypes.func,
};

export default Word;

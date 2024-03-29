import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { isLoading, children, onPress } = props;

  return (
    <button disabled={isLoading} onClick={onPress}>
      {isLoading ? '처리중...' : children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  onPress: PropTypes.func
};

Button.defaultProps = {
  onPress: () => {}
};

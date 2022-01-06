import React from 'react';
import PropTypes from 'prop-types';

export default function ToggleButton({ onPress }) {
  return (
    <button onClick={onPress}>상태 변경</button>
  );
}

ToggleButton.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  onPress: PropTypes.func,
};

ToggleButton.defaultProps = {
  onPress: () => {},
};
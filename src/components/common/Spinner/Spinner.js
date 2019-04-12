import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import styles from './SpinnerStyles';

const Spinner = ({ size }) => (
  <View style={styles.spinnerStyle}>
    <ActivityIndicator size={size} />
  </View>
);

Spinner.defaultProps = {
  size: 'large',
};

Spinner.propTypes = {
  size: PropTypes.string,
};

export { Spinner };

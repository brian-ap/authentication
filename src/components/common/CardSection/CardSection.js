import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './CardStyles';

const CardSection = props => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
);

CardSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CardSection };

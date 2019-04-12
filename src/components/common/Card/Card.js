import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './CardStyles';

const Card = props => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Card };

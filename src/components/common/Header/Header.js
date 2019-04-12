// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './HeaderStyles';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
};

// Make the component available to other parts of the app
export { Header };

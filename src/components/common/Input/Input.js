import React from 'react';
import { TextInput, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './InputStyles';

const Input = ({
  label, value, onChangeText, placeholder, secureTextEntry,
}) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

Input.defaultProps = {
  placeholder: '',
  secureTextEntry: false,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

export { Input };

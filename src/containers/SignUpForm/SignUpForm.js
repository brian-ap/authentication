import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import {
  Button, Card, CardSection, Input, Spinner,
} from '../../components/common/common';
import styles from './SignUpFormStyles';

class SignUpForm extends Component {
  static navigationOptions = {
    title: 'Authentication',
    headerStyle: {
      backgroundColor: 'blue',
    },
    headerTitleStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      flex: 1,
    },
  }

  state = {
    email: '', password: '', error: '', loading: false,
  };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onSignUpSuccess.bind(this))
      .catch(this.onSignUpFail.bind(this));
  }

  onSignUpFail() {
    this.setState({ error: 'Sign Up Failed', loading: false });
  }

  onSignUpSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Sign Up
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.login}>
            Click here to log in
          </Text>
        </TouchableOpacity>
      </Card>
    );
  }
}

SignUpForm.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
  ])).isRequired,
};

export default SignUpForm;

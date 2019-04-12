import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Button, Spinner } from '../../components/common/common';
import LoginForm from '../LoginForm/LoginForm';
import styles from './LandingPageStyles';

class LandingPage extends Component {
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

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBtxMY4K6uHxv_2e3GD-FWAD2ACX6lPVRE',
      authDomain: 'authentication-70a18.firebaseapp.com',
      databaseURL: 'https://authentication-70a18.firebaseio.com',
      storageBucket: 'authentication-70a18.appspot.com',
      messagingSenderId: '682333809338',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm {...this.props} />;
      default:
        return (
          <View style={styles.container}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        {this.renderContent()}
      </View>
    );
  }
}

export default LandingPage;

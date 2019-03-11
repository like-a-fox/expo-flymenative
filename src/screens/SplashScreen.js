import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo';

import { Fonts, Colors } from '../constants';
import { Button } from '../components';

export default class AuthScreen extends React.Component {
  state = {
    anim: new Animated.Value(0),
    isKeyboardVisible: false,
  };
  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      Platform.select({ android: 'keyboardDidShow', ios: 'keyboardWillShow' }),
      this._keyboardDidShow.bind(this),
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      Platform.select({ android: 'keyboardDidHide', ios: 'keyboardWillHide' }),
      this._keyboardDidHide.bind(this),
    );
  }

  componentDidMount() {
    Animated.timing(this.state.anim, { toValue: 3000, duration: 3000 }).start();
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow() {
    LayoutAnimation.easeInEaseOut();
    this.setState({ isKeyboardVisible: true });
  }

  _keyboardDidHide() {
    LayoutAnimation.easeInEaseOut();
    this.setState({ isKeyboardVisible: false });
  }

  fadeIn(delay, from = 0) {
    const { anim } = this.state;
    return {
      opacity: anim.interpolate({
        inputRange: [delay, Math.min(delay + 500, 3000)],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      transform: [
        {
          translateY: anim.interpolate({
            inputRange: [delay, Math.min(delay + 500, 3000)],
            outputRange: [from, 0],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  }

  render() {
    return (
      <Animated.View style={[styles.container, this.fadeIn(700, -20)]}>
        <ImageBackground
          source={require('../../assets/images/landingBg.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={[styles.section, { paddingTop: 40 }]}>
            <Animated.Image
              resizeMode="contain"
              style={[
                styles.logo,
                this.state.isKeyboardVisible && { height: 80 },
                this.fadeIn(0),
              ]}
              source={require('../../assets/images/white-logo.png')}
            />
          </View>
          <Animated.View style={[styles.bottom, this.fadeIn(700, -20)]}>
            <Text style={styles.headerFive}>
              Experience
              {'\n'}Your Very Best Travel
            </Text>
            <Text style={styles.textBody}>
              High-quality, personalized,{'\n'}and cost-effective travel
              experience {'\n'}with A.I. Powered technology
            </Text>
            <Button
              secondary
              style={{ alignSelf: 'stretch', marginBottom: 10 }}
              caption="Get Started"
              title="First"
              onPress={() => this.props.authStateActions.firstVisit()}
            />
            <Text style={styles.textCaption}>
              By tapping, you agree to our Terms, {'\n'}
              Privacy, &amp; Cookie Policies.
            </Text>
          </Animated.View>
        </ImageBackground>
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: Colors.primary,
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 40,
  },
  headerFive: {
    fontSize: 30,
    fontWeight: '100',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    paddingBottom: 0,
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
    opacity: 0.8,
  },
  textBody: {
    fontSize: 18,
    fontWeight: '100',
    lineHeight: 24,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    opacity: 0.8,
  },
  textCaption: {
    fontSize: 14,
    lineHeight: 16,
    marginTop: 10,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

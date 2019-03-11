import React from 'react';
import PropTypes from 'prop-types';
import { View, Platform, StyleSheet, TextInput } from 'react-native';

import { Fonts, Colors } from '../constants';

class FlyNRTextInput extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary', 'bordered']),
    style: PropTypes.number,
    placeholderTextColor: PropTypes.string,
  };

  static defaultProps = {
    type: 'primary',
  };

  render() {
    const finalStyle = [
      styles.default,
      this.props.type === 'bordered' && styles.bordered,
      this.props.dark && styles.dark,
      this.props.style && this.props.style,
    ];

    return (
      <View style={{ alignSelf: 'stretch', flexDirection: 'column' }}>
        <TextInput
          placeholderTextColor={this.props.placeholderTextColor || Colors.white}
          underlineColorAndroid={Colors.primary}
          {...this.props}
          style={finalStyle}
        />
        {Platform.OS === 'ios' && (
          <View style={{ height: 0.5, backgroundColor: 'white' }} />
        )}
      </View>
    );
  }
}

const HEIGHT = 56;

const styles = StyleSheet.create({
  default: {
    height: HEIGHT,
    color: Colors.primary,
    backgroundColor: Colors.lightGray,
    opacity: 0.7,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 0.5,
    fontSize: 16,
    lineHeight: 20,
    fontFamily: Fonts.primaryRegular,
    ...Platform.select({
      android: {
        paddingLeft: 5,
      },
    }),
  },
  bordered: {
    borderWidth: 0.5,
    borderColor: Colors.lightGray,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  dark: {
    color: Colors.gray,
  },
  primary: {
    backgroundColor: Colors.gray,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 0.25,
  },
});

export default FlyNRTextInput;

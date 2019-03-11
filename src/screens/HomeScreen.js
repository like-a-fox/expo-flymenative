import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Image,
  TouchableOpacity,
  Linking,
  ImageBackground,
} from 'react-native';

import { Fonts, Colors } from '../constants';
import Button from '../components/Button';
import { Text, Title } from '../components/StyledText';

export default function HomeScreen({ isExtended, setIsExtended }) {
  const FlyNRUrl = 'https://fly.me';
  const handleClick = () => {
    Linking.canOpenURL(FlyNRUrl).then(supported => {
      if (supported) {
        Linking.openURL(FlyNRUrl);
      } else {
        console.log(`Don't know how to open URI: ${FlyNRUrl}`);
      }
    });
  };

  return (
    <ImageBackground
      style={styles.bgImage}
      source={require('../../assets/images/background.png')}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bgImage: {
    flex: 1,
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLarge: {
    flex: 2,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontFamily: Fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  },
  price: {
    marginBottom: 5,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
});

import React from 'react';
import PropTypes from 'prop-types';
import { addNavigationHelpers } from 'react-navigation';

import AuthScreen from '../containers/AuthScreen';
import SplashScreen from '../containers/SplashScreen';
import AppNavigator from './RootNavigation';

export default function NavigatorView({ dispatch, navigatorState, authState }) {
  if (authState.isLoggedIn || authState.hasSkippedLogin) {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: navigatorState,
        })}
      />
    );
  } else if (!authState.isFirstVisit) {
    return <AuthScreen />;
  }
  return <SplashScreen />;
}

NavigatorView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigatorState: PropTypes.shape({}).isRequired,
};

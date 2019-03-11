import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';

import * as AuthStateActions from '../reducers/auth';
import SplashScreen from '../screens/SplashScreen';

export default compose(
  connect(
    state => ({
      isFirstVisit: true,
    }),
    dispatch => ({
      authStateActions: bindActionCreators(AuthStateActions, dispatch),
    }),
  ),
)(SplashScreen);

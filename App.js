import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './src/AppNavigator'
import MainContainer from './src/MainContainer'
import store from './src/redux/store/Store'
import { Provider } from 'react-redux'
import AdminAppNavigator from './src/Screens/AdminAppNavigator'

const App = () => {
  return (
    <Provider store={store}>
      <MainContainer/>
    </Provider>
  );
};

export default App;

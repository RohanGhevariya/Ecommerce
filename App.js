import { View, Text } from 'react-native'
import React from 'react'
//import AppNavigator from './src/AppNavigator'
import MainContainer from './src/MainContainer'
import store from './src/redux/store/Store'
import { Provider } from 'react-redux'
import AppNavigator from './screens/AppNavigator'

const App = () => {
  return (
    <Provider store={store}>
      <MainContainer/>
    </Provider>
  );
};

export default App;

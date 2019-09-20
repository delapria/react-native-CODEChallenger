import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import AppContainer from './screens';

import { Provider as ReduxProvider } from 'react-redux';
import store from './redux';

class App extends Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar
            translucent={false}
            backgroundColor="black"
            barStyle="light-content"
          />
          <AppContainer />
        </View>
      </ReduxProvider>
    );
  }
}

export default App;

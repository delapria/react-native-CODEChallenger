import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
// import PaperScreen from './screens/PaperScreen';
// import ComponentsShowcaseScreen from './screens/ComponentsShowcaseScreen';
// import PostsScreen from './screens/PostsScreen';
// import FirstScreen from './screens/FirstScreen';
import AppContainer from './screens';

import { Proovider as ReduxProvider } from 'react-redux';
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
          {/* <FirstScreen /> */}
          {/* <ComponentsShowcaseScreen /> */}
          {/* <PostsScreen /> */}
          {/* <PaperScreen /> */}
        </View>
      </ReduxProvider>
    );
  }
}

export default App;

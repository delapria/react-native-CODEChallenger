import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
// import PaperScreen from './screens/PaperScreen';
// import ComponentsShowcaseScreen from './screens/ComponentsShowcaseScreen';
// import PostsScreen from './screens/PostsScreen';
// import FirstScreen from './screens/FirstScreen';
import AppContainer from './screens';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;

import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
// import ComponentsShowcaseScreen from './screens/ComponentsShowcaseScreen';
// import PostsScreen from './screens/PostsScreen';
import PaperScreen from './screens/PaperScreen';
// import FirstScreen from './screens/FirstScreen';

class App extends Component {
  render() {
    return (
      <View>
        <StatusBar
          translucent={false}
          backgroundColor="black"
          barStyle="light-content"
        />
        {/* <FirstScreen /> */}
        {/* <ComponentsShowcaseScreen /> */}
        {/* <PostsScreen /> */}
        <PaperScreen />
      </View>
    );
  }
}

export default App;

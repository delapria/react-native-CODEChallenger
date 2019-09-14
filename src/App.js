import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import ComponentsShowcase from './screens/ComponentsShowcase';
import FirstScreen from './screens/FirstScreen';

class App extends Component {
  render() {
    return (
      <View>
        <StatusBar
          translucent={false}
          backgroundColor="black"
          barStyle="light-content"
        />
        {/*<FirstScreen />*/}
        <ComponentsShowcase />
      </View>
    );
  }
}

export default App;

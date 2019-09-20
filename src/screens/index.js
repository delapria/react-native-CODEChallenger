import React from 'react';
import { IconButton } from 'react-native-paper';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import ComponentsShowcaseScreen from './ComponentsShowcaseScreen';
import PostsScreen from './PostsScreen';
import PaperScreen from './PaperScreen';
import FirstScreen from './FirstScreen';

const TabNavigation = createMaterialTopTabNavigator({
  Posts: {
    screen: PostsScreen,
    navigationOptions: {
      title: 'Posts',
    },
  },
  Components: {
    screen: ComponentsShowcaseScreen,
    navigationOptions: {
      title: 'Show Case',
    },
  },
  // {
  //   tabBarComponent: (props) => {
  //     return (<View/>)
  //   }
  //}
});

const DrawerButton = props => {
  return (
    <IconButton icon="menu" size={24} onPress={() => console.log('pree')} />
  );
};

const StackNavigator = createStackNavigator({
  Paper: {
    screen: PaperScreen,
    navigationOptions: {
      title: 'Paper screen',
      headerLeft: DrawerButton,
    },
  },
  First: {
    screen: FirstScreen,
    navigationOptions: {
      title: 'First screen',
    },
  },
  Tabs: {
    screen: TabNavigation,
    navigationOptions: {
      title: 'Tabs navigator',
    },
  },
});

const DrawerNavigator = createDrawerNavigator({
  Paper: {
    screen: StackNavigator,
    navigationOptions: {
      title: 'Paper screen',
    },
  },
  First: {
    screen: FirstScreen,
    navigationOptions: {
      title: 'First screen',
    },
  },
  Tabs: {
    screen: TabNavigation,
    navigationOptions: {
      title: 'Tabs navigator',
    },
  },
});

const AppContainer = createAppContainer(DrawerNavigator);

export default AppContainer;

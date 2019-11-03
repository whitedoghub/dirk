import React from 'react';
import { Text } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import IntroScreen from './IntroScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import SomethingScreen from './SomethingScreen';

const HomeStack = createStackNavigator(
  {
    HomeScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: 'Home',
    }),
  },
);

const SettingStack = createStackNavigator(
  {
    SettingScreen,
    SomethingScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: 'Setting',
    }),
    initialRouteName: 'SettingScreen',
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Setting: SettingStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let icon = '▲';

        if (routeName === 'Home') {
          icon = '🌈';
        } else if (routeName === 'Setting') {
          icon = '🌙';
        }

        return (
          <Text style={{ color: (focused && '#46c3ad') || '#888' }}>
            {icon}
          </Text>
        );
      },
    }),
    laze: false,
    tabBarOptions: {
      activeTintColor: '#46c3ad',
      inactiveTintColor: '#888',
    },
  },
);

const AppStack = createStackNavigator({
  HomeScreen: HomeScreen,
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
});

export default createAppContainer(AppStack);

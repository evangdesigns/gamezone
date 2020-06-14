import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';


const screens = {
  GameZone: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='GameZone'/>,
      }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Raw Details',
    }
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#808080', height: 60, }
  }
})

export default HomeStack;

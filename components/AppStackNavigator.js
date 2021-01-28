import React from 'react';
import {createStackNavigator} from 'react-navigation-drawer'; 
import BookDonateScreen from '../screens/SettingScreen';
import RecieverDetailsScreen from '../screens/SettingScreen';


export const AppStackNavigator=createStackNavigator({
  BookDonateList:{
      screen:BookDonateScreen,
      navigationOptions:{ headerShown : false }
  },
  RecieverDetails:{
      screen:RecieverDetailsScreen,
      navigationOptions:{ headerShown : false }
    }
},

{ 
    initialRouteName : ' BookDonateList'
}
)

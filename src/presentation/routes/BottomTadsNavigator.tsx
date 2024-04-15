import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/tabs/Tab1Screen';
import {Tab3Screen} from '../screens/tabs/Tab3Screen';
import {globalColors} from '../theme/theme';
import {Text} from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTadsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.light,
      }}
      screenOptions={{
        tabBarActiveTintColor: globalColors.primary,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Tab.Screen
        name="Tad1"
        options={{
          title: 'tab 1',
          tabBarIcon: ({color}) => <IonIcon name="rocket-outline" size={20} color={color} />,
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tad2"
        options={{title: 'tab 2',
        tabBarIcon: ({color}) => <IonIcon name="rocket-outline" size={20} color={color} />,
        }}
        component={TopTabsNavigator}
      />
      <Tab.Screen
        name="Tad3"
        options={{title: 'tab 3',
        tabBarIcon: ({color}) => <IonIcon name="rocket-outline" size={20} color={color} />,
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};

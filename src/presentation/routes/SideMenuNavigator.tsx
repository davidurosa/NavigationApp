import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {globalColors} from '../theme/theme';
import {View, useWindowDimensions} from 'react-native';
import {BottomTadsNavigator} from './BottomTadsNavigator';
import {IonIcon} from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: dimensions.width >= 768 ? 'permanent' : 'slide',
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: globalColors.light,
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          marginVertical: 10,
        },
      }}>
      <Drawer.Screen
        name="Tabs"
        component={BottomTadsNavigator}
        options={{
          drawerIcon: ({color}) => (
            <IonIcon name="airplane-outline" color={color} />
          ),
        }}
      />
      <Drawer.Screen name="Profile" component={ProfileScreen}
      options={{
        drawerIcon: ({color}) => (
          <IonIcon name="american-football-outline" color={color} />
        ),
      }}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 150,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 10,
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

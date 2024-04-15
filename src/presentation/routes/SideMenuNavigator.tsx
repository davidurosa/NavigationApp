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
      <Drawer.Screen name="Tabs" component={BottomTadsNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
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

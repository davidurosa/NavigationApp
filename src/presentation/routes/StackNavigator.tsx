import React, { useEffect } from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../screens/home/HomeScreen';
import {ProductsScreen} from '../screens/products/ProductsScreen';
import {SettingScreen} from '../screens/setting/SettingScreen';
import { ProductScreen } from '../screens/products/ProductScreen';
import { useNavigation } from '@react-navigation/native';
import { HamburgerMenu } from '../components/shared/HamburgerMenu';



export type RootStackParams = {
  Home: undefined;
  Products: undefined;
  product: { id: number, name: string };
  Settings: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {


 /*  const navigation = useNavigation();


  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []); */

  return (
    <>
    <HamburgerMenu />
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="product" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator>
    </>
  );
};

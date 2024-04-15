import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Pressable} from 'react-native';
import { IonIcon } from './IonIcon';

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerLeft: () => (
        <Pressable
        style={{marginLeft: 10}}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
            <IonIcon name="menu-outline" size={30} color="black" />
        </Pressable>
      ),
    });
  }, []);
  return <></>;
};

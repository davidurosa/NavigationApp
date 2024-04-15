import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {RootStackParams} from '../../routes/StackNavigator';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.openDrawer)}>
          <Text>Menu</Text>
        </Pressable>
      ),
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text>HomeScreen !</Text>
      <PrimaryButton
        label="Productos"
        onPress={() => navigation.navigate('Products')}
      />
      <PrimaryButton
        label="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

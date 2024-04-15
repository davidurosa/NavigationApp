import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {NavigationProp, StackActions, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../routes/StackNavigator';

export const SettingScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <View style={globalStyles.container}>
      <Text>SettingScreen !</Text>
      <PrimaryButton label="Regresar" onPress={() => navigation.goBack()} />

      <PrimaryButton
        label="Regresar Home"
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};

import React, { useEffect } from 'react';
import {type RouteProp, useRoute, useNavigation, NavigationProp} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {type RootStackParams} from '../../routes/StackNavigator';
import {globalStyles} from '../../theme/theme';

export const ProductScreen = () => {
  const params = useRoute<RouteProp<RootStackParams>>().params;

  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  console.log(params);

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text>Product!</Text>
      <Text
        style={{
          fontSize: 30,
          marginBottom: 10,
        }}>
        {params.id} - {params.name}
      </Text>
    </View>
  );
};

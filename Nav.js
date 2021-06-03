import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import ReactNativeEasings from './ReactNativeEasings';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ReactNativeEasings" component={ReactNativeEasings} />
    </Stack.Navigator>
  );
}

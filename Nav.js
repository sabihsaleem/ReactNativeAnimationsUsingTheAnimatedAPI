import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import ReactNativeEasings from './ReactNativeEasings';
import AnimatedTiming from './AnimatedTiming';
import AnimatedSpring from './AnimatedSpring';
import AnimatedStagger from './AnimatedStagger';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ReactNativeEasings" component={ReactNativeEasings} />
      <Stack.Screen name="AnimatedTiming" component={AnimatedTiming} />
      <Stack.Screen name="AnimatedSpring" component={AnimatedSpring} />
      <Stack.Screen name="AnimatedStagger" component={AnimatedStagger} />
    </Stack.Navigator>
  );
}

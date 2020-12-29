import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

const Stack = createStackNavigator();

export default function SignRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: '',
        headerTransparent: true,
        headerStyle: { backgroundColor: '#185a9d' },
        headerTintColor: '#FFF',
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

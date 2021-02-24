import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <NavigationContainer>
    <AuthStack.Navigator
      headerMode="float"
      screenOptions={{
        headerBackAccessibilityLabel: `Login e cadastro`,
        safeAreaInsets: { top: 0 },
        cardShadowEnabled: true,
        gestureEnabled: true,
        gestureDirection: `horizontal`,
        cardStyleInterpolator:
          CardStyleInterpolators.forRevealFromBottomAndroid,
        headerStyle: {
          borderBottomWidth: 0,
          elevation: 0,
        },
      }}
    >
      <AuthStack.Screen name="Login" component={SignIn} />
      <AuthStack.Screen name="Cadastro" component={SignUp} />
    </AuthStack.Navigator>
  </NavigationContainer>
);

export { AuthRoutes };

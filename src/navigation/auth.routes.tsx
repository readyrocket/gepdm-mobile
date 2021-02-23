import { NavigationContainer } from '@react-navigation/native';
import {
	CardStyleInterpolators,
	createStackNavigator
} from '@react-navigation/stack';

import React from 'react';

import { SignInScreen } from '../screens/SignIn';
import { SignUpScreen } from '../screens/SignUp';

const AuthStack = createStackNavigator();

const AuthRoutes = () => 
	(
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
				}}>
				<AuthStack.Screen name="Login" component={SignInScreen} />
				<AuthStack.Screen name="Cadastro" component={SignUpScreen} />
			</AuthStack.Navigator>
		</NavigationContainer>
	);

export { AuthRoutes };

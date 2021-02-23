import {
	createMaterialBottomTabNavigator
} from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { Restaurants } from '../screens/Restaurants';

const Search = () => 
	<Text>Hello</Text>;
const Profile = () => 
	<Text>Profile</Text>;

const Tab = createMaterialBottomTabNavigator();

const AppRoutes = () => 
	(
		<NavigationContainer>
			<Tab.Navigator activeColor="#fff" inactiveColor="#f0edf6" shifting>
				<Tab.Screen
					name="Restaurants"
					component={Restaurants}
					options={{
						tabBarIcon: ({ color }) => 
							<Icon name="home" size={20} color={color} />,
						tabBarColor: `#8F4FFB`,
					}}
				/>
				<Tab.Screen
					name="Pesquisar"
					component={Search}
					options={{
						tabBarIcon: ({ color }) =>
							<Icon name="search1" size={20} color={color} />,
						tabBarColor: `#568`,
					}}
				/>
				<Tab.Screen
					name="Perfil"
					component={Profile}
					options={{
						tabBarIcon: ({ color }) =>
							<Icon name="user" size={20} color={color} />,
						tabBarColor: `#869`,
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);

export { AppRoutes };

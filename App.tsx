import 'react-native-gesture-handler';

import React from 'react';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';

import { NetInfoComponent } from './src/components/NetInfo';
import { GeneralStatusBarColor } from './src/components/StatusBar/StatusBar';
import { AuthContextProvider } from './src/context/auth.context';
import { Routes } from './src/navigation/routes';
import { colors } from './src/utils/colors';

const App = () => 
	(
		<SafeAreaView style={styles.wrapper}>
			{Platform.OS === `ios` ? (
				<GeneralStatusBarColor translucent barStyle="dark-content" />
			) : (
				<GeneralStatusBarColor
					backgroundColor="#F6FAFD"
					translucent
					barStyle="dark-content"
				/>
			)}
			<AuthContextProvider>
				<Routes />
			</AuthContextProvider>
			<NetInfoComponent />
		</SafeAreaView>
	);

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: colors.elements_5
	},
});

export { App };

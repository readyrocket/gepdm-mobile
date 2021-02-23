import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === `ios` ? 20 : StatusBar.currentHeight;

const GeneralStatusBarColor = ({ backgroundColor, ...props }: any) => 
	(
		<View style={[styles.statusBar, { backgroundColor }]}>
			<StatusBar translucent backgroundColor="#FFFFFF" {...props} />
		</View>
	);
export { GeneralStatusBarColor };

const styles = StyleSheet.create({
	statusBar: { height: STATUSBAR_HEIGHT },
});

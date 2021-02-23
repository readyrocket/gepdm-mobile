import { useNetInfo } from '@react-native-community/netinfo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../utils/colors';

const NetInfoComponent = () => {
	const netInfo = useNetInfo();

	return (
		<View style={styles.netinfo_wrapper}>
			{!netInfo.isConnected
				&& <Text style={styles.netinfo}>Deliverfy está offline</Text>}
		</View>
	);
};

const styles = StyleSheet.create({
	netinfo_wrapper: {
		backgroundColor: colors.c_primary,
		alignItems: `center`,
	},
	netinfo: {
		color: colors.e_quaternary,
		padding: 5,
	},
});

export { NetInfoComponent };

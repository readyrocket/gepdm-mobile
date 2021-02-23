/* eslint-disable no-unused-expressions */
import React from 'react';
import { StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

const ToastComponent = () => 
	(
		<Toast style={styles.toast} ref={(ref) => 
			Toast.setRef(ref)} />
	);

const ToastMessage = (
	title: string,
	type: string,
	message: string,
	defaultMessage = `Não conseguimos realizar está operação, tente novamente`
) => {
	const rxp = /(undefined)|(null)|(object)|([[\]])/g;
	!rxp.test(message) ?
		Toast.show(
			{ text1: title, type, text2: message, position: `top` }
		)
		: Toast.show(
			{ text1: title, type, text2: defaultMessage, position: `top` }
		);
};

const styles = StyleSheet.create({
	toast: {
		position: `absolute`,
		zIndex: 100,
		top: 0,
	},
});

export { ToastMessage, ToastComponent };

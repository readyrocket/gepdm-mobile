import React from 'react';
import { RectButton as Button } from 'react-native-gesture-handler';
import { ScaledSheet } from 'react-native-size-matters';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function GestureButtonComponent(props) {
	return (
		<Button {...props} style={[styles.button, props?.style]}>
			{props.children}
		</Button>
	);
}

const styles = ScaledSheet.create({
	button: {
		backgroundColor: Colors.deepPurpleA200,
		padding: `7@ms`,
		width: `100%`,
		justifyContent: `center`,
		alignItems: `center`,
		borderRadius: 8,
	},
});

export { GestureButtonComponent };

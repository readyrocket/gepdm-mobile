import React from 'react';
import { TextInput } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

function Input(props) {
	return (
		<TextInput
			{...props}
			selectionColor={colors.c_secondary}
			placeholderTextColor="#ccc"
			style={[styles.text_input, props.style]}>
			{props?.children}
		</TextInput>
	);
}

const styles = ScaledSheet.create({
	text_input: {
		backgroundColor: colors.e_primary,
	},
});

export { Input };

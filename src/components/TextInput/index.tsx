import styled from '@emotion/native';
import React from 'react';
import { TextInput } from 'react-native-paper';

import { colors } from '../../theme/theme';

function Input(props) {
	return (
		<InputComponent
			{...props}
			selectionColor={colors.c_secondary}
			placeholderTextColor="#ccc"
			style={props.style}>
			{props?.children}
		</InputComponent>
	);
}

const InputComponent = styled(TextInput)`
  background-color: ${colors.e_primary};
`;

export { Input };

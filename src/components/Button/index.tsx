import styled from '@emotion/native';
import React from 'react';
import { RectButton as Button } from 'react-native-gesture-handler';

import { colors } from '../../theme/theme';

function GestureButtonComponent(props) {
	return (
		<RectButton {...props} style={props?.style}>
			{props.children}
		</RectButton>
	);
}

const RectButton = styled(Button)`
  background-color: ${colors.c_primary};
  padding: 16px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export { GestureButtonComponent };

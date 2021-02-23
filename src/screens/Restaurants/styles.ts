import styled from '@emotion/native';
import { RectButton } from 'react-native-gesture-handler';

import { Input } from '../../components/TextInput';
import { colors } from '../../utils/colors';


export const Wrapper = styled.View`
  flex: 1;
  background-color: ${colors.e_quaternary};
`;

export const Main = styled.View`
	padding-left: 10px;
	padding-right: 10px;
	height: 100%;
`;

export const MainDescriptionView = styled.View`
	margin-top: 50px;
`;

export const MainLogo = styled.Text`
  font-size: 30px;
	margin-top: 20px;
  color: ${colors.e_primary};
  font-weight: bold;
`;

export const MainTitle = styled.Text`
	font-size: 24px;
	font-weight: bold;
	color: ${colors.e_primary};
`;

export const MainDescription = styled.Text`
	margin-top: 10px;
	font-size: 16px;
	max-width: 80%;
	font-weight: 100;
	color: ${colors.e_secondary};
`;

export const MainInputLocationView = styled.View`
	margin-top: 40px;
	width: 100%;
	flex-direction: row;
`;

export const MainInputLocation = styled(Input)`
	height: 50px;
	width: 60%;
	background-color: ${colors.e_tertiary};
`;

export const MainInputLocationButton = styled(RectButton)`
  height: 50px;
  width: 40%;
  background-color: ${colors.c_primary};
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  padding: 20px;
`;

export const MainInputLocationButtonText = styled.Text`
  color: ${colors.e_quaternary};
`;

export const MainBoxItemsWrapper = styled.View`
  flex: 1;
`;

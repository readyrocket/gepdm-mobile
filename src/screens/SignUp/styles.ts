import styled from '@emotion/native';
import { Link } from '@react-navigation/native';

import { GestureButtonComponent } from '../../components/Button';
import { Input } from '../../components/TextInput';
import { colors } from '../../utils/colors';

export const Form = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;

  width: 100%;

  background-color: ${colors.o_primary};

  padding-right: 20px;
  padding-left: 20px;
  margin-top: 32px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

	position: relative;
`;

export const FormEmail = styled.View`
	margin-top: 10px;
`;

export const FormPassword = styled.View`
  margin-top: 10px;
`;

export const FormRectButton = styled(GestureButtonComponent)`
  margin-top: 50px;
  background-color: ${colors.c_tertiary};
  padding: 15px;
  font-weight: bold;
  font-family: "Poppins";
`;

export const FormRectButtonText = styled.Text`
	color: ${colors.e_quaternary};
	font-family: 'Poppins';
	font-weight: bold;
`;

export const FormButtonRegister = styled(Link)`
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-top: 15px;
	text-align: center;
`;

export const FormButtonRegisterText = styled.Text`
	font-size: 16px;
	color: ${colors.e_primary};
`;

export const FormInput = styled(Input)`
	background-color: ${colors.e_quaternary};
`;

export const FormErrorMessage = styled.Text`
  color: ${colors.c_primary};
  margin-top: 65px;
  position: absolute;
	z-index: 2;
`;

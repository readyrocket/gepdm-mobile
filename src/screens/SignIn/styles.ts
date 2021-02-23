import styled from '@emotion/native';
import { Link } from '@react-navigation/native';

import { GestureButtonComponent } from '../../components/Button';
import { Input } from '../../components/TextInput';
import { colors } from '../../utils/colors';

export const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${colors.e_tertiary};
`;

export const Form = styled.View`
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin-top: 32px;
  background-color: ${colors.o_primary};
  position: relative;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const FormPassword = styled.View`
	margin-top: 0px;
`;

export const FormInput = styled(Input)`
  background-color: ${colors.e_quaternary};
  margin-bottom: 16px;
`;

export const FormSignUpText = styled.Text`
  font-size: 16px;
  color: ${colors.e_primary};
`;

export const FormInputErrorEmail = styled.Text`
  color: ${colors.c_secondary};
  margin-top: 70px;
  z-index: 2;
  font-size: 16px;
  position: absolute;
`;

export const FormInputErrorPassword = styled.Text`
  color: ${colors.c_secondary};
  margin-top: 70px;
  z-index: 2;
  font-size: 16px;
  position: absolute;
`;

export const FormButton = styled(GestureButtonComponent)`
  margin-top: 30px;
  background-color: ${colors.c_tertiary};
  align-items: center;
  padding: 15px;
`;

export const FormButtonText = styled.Text`
  color: ${colors.e_quaternary};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const FormButtonNavigate = styled(GestureButtonComponent)`
  margin-top: 30px;
  padding: 15px;
  background-color: ${colors.c_secondary};
`;

export const FormRecoveryPassword = styled(Link)`
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
	font-weight: 600;
`;

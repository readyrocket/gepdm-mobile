import styled from '@emotion/native';
import { Link } from '@react-navigation/native';

import { GestureButtonComponent } from '../../components/Button';
import { Input } from '../../components/TextInput';
import { colors } from '../../theme/colors';

const _ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${colors.e_tertiary};
`;

const _FormContainer = styled.View`
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

const _FormPassword = styled.View`
  margin-top: 0px;
`;

const _FormInput = styled(Input)`
  background-color: ${colors.e_quaternary};
  margin-bottom: 16px;
`;

const _FormSignUpText = styled.Text`
  font-size: 16px;
  color: ${colors.e_primary};
`;

const _FormInputErrorEmail = styled.Text`
  color: ${colors.c_tertiary};
  margin-top: 70px;
  z-index: 2;
  font-size: 16px;
  position: absolute;
`;

const _FormInputErrorPassword = styled.Text`
  color: ${colors.c_tertiary};
  margin-top: 70px;
  z-index: 2;
  font-size: 16px;
  position: absolute;
`;

const _FormButton = styled(GestureButtonComponent)`
  margin-top: 30px;
  background-color: ${colors.c_quaternary};
  align-items: center;
  padding: 15px;
`;

const _FormButtonText = styled.Text`
  color: ${colors.e_quaternary};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const _FormButtonNavigate = styled(GestureButtonComponent)`
  margin-top: 30px;
  padding: 15px;
  background-color: ${colors.c_primary};
`;

const _FormRecoveryPassword = styled(Link)`
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
`;

export const Screen = {
  layout: {
    ScrollView: _ScrollView,
    FormContainer: _FormContainer,
    FormPassword: _FormPassword,
  },
  with: {
    Input: _FormInput,
    SignUpText: _FormSignUpText,
    EmailError: _FormInputErrorEmail,
    PasswordError: _FormInputErrorPassword,
    Button: _FormButton,
    ButtonLabel: _FormButtonText,
    ButtonNavigate: _FormButtonNavigate,
    RecoveryPassword: _FormRecoveryPassword,
  },
};

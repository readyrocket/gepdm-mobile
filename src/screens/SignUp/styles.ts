import styled from '@emotion/native';
import { Link } from '@react-navigation/native';

import { GestureButtonComponent } from '../../components/Button';
import { Input } from '../../components/TextInput';
import { colors } from '../../theme/colors';

const _Form = styled.View`
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

const _FormEmail = styled.View`
  margin-top: 10px;
`;

const _FormPassword = styled.View`
  margin-top: 10px;
`;

const _FormRectButton = styled(GestureButtonComponent)`
  margin-top: 50px;
  background-color: ${colors.c_quaternary};
  padding: 15px;
  font-weight: bold;
  font-family: "Poppins";
`;

const _FormRectButtonText = styled.Text`
  color: ${colors.e_quaternary};
  font-family: "Poppins";
  font-weight: bold;
`;

const _FormButtonRegister = styled(Link)`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 15px;
  text-align: center;
`;

const _FormButtonRegisterText = styled.Text`
  font-size: 16px;
  color: ${colors.e_primary};
`;

const _FormInput = styled(Input)`
  background-color: ${colors.e_quaternary};
`;

const _FormErrorMessage = styled.Text`
  color: ${colors.c_tertiary};
  margin-top: 65px;
  position: absolute;
  z-index: 2;
`;

export const Screen = {
  layout: {
    FormContainer: _Form,
    EmailContainer: _FormEmail,
    PassowordContainer: _FormPassword,
  },
  with: {
    ButtonSubmit: _FormRectButton,
    ButtonSubmitLabel: _FormRectButtonText,
    ButtonRegister: _FormButtonRegister,
    ButtonRegisterLabel: _FormButtonRegisterText,
    Input: _FormInput,
    MessageError: _FormErrorMessage,
  },
};

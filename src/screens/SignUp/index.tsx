import { Link, useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { Dimensions, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { PulseIndicator } from 'react-native-indicators';
import { Checkbox } from 'react-native-paper';

import { IconEmail } from '../../assets/signin/Email';
import { IconPassword } from '../../assets/signin/Password';
import { IconProfile } from '../../assets/signup/Profile';
import { showToastWithGravity } from '../../components/NativeToast';
import { SvgHeaderIcon } from '../../components/SvgHeaderIcon';
import { api } from '../../services/api';
import { SignUpSchema } from './signup.validations';
import { Screen } from './styles';
import { User } from './types';

function SignUp() {
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(false);
  const [privacy_policy, setPrivacyPolicy] = useState(false);

  const handleUserSignUp = async (userData: User) => {
    setLoading(true);
    try {
			const { name, email, password } = userData;
			
			if (!privacy_policy)
				return;

      const response = await api.post(`/register`, {
        name,
        email,
				password,
				privacy_policy
      });

      if (response.status === 201) {
        setTimeout(() => navigate(`Login`), 1000);
        return;
      }

      if (response.status === 402) {
        showToastWithGravity(response?.data?.message);
        setLoading(false);
        return;
      }

      setLoading(false);
    } catch (error) {
      showToastWithGravity(error.response?.data?.message);
    }
    setLoading(false);
	};
	
  const Height = Dimensions.get("screen").height;

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={100}
      style={{ flex: 1 }}
      behavior={Platform.OS === `ios` ? `position` : null}
    >
      <ScrollView
        contentContainerStyle={{
					flexGrow: 1,
					minHeight: Height
        }}
      >
        <SvgHeaderIcon>Sua comida preferida mais perto de você!</SvgHeaderIcon>

        <Screen.layout.FormContainer>
          <Formik
            validationSchema={SignUpSchema}
            initialValues={{
              name: ``,
              email: ``,
              password: ``,
              confirmedPassword: ``,
            }}
            onSubmit={handleUserSignUp}
          >
            {({
              handleBlur,
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <View>
                  <Screen.with.Input
                    placeholder="Seu Nome"
                    autoCompleteType="name"
                    keyboardType="name-phone-pad"
                    onBlur={handleBlur(`name`)}
                    onChangeText={handleChange(`name`)}
                    value={values.name}
                    error={!!errors.name}
                  />
                  {errors.name && touched.name ? (
                    <Screen.with.MessageError>
                      {errors.name}
                    </Screen.with.MessageError>
                  ) : null}
                  <IconProfile
                    style={{
                      position: `absolute`,
                      right: 10,
                      top: 20,
                    }}
                  />
                </View>

                <Screen.layout.EmailContainer>
                  <Screen.with.Input
                    placeholder="seu_email@mail.com"
                    autoCompleteType="email"
                    keyboardType="email-address"
                    onBlur={handleBlur(`email`)}
                    importantForAutofill="no"
                    onChangeText={handleChange(`email`)}
                    value={values.email}
                    error={!!errors.email}
                  />
                  {errors.email && touched.email ? (
                    <Screen.with.MessageError>
                      {errors.email}
                    </Screen.with.MessageError>
                  ) : null}
                  <IconEmail
                    style={{
                      position: `absolute`,
                      right: 10,
                      top: 20,
                    }}
                  />
                </Screen.layout.EmailContainer>

                <Screen.layout.PassowordContainer>
                  <Screen.with.Input
                    placeholder="********"
                    textContentType="password"
                    secureTextEntry
                    autoCompleteType="password"
                    onBlur={handleBlur(`password`)}
                    onChangeText={handleChange(`password`)}
                    importantForAutofill="no"
                    value={values.password}
                    error={!!errors.password}
                  />
                  {errors.password && touched.password ? (
                    <Screen.with.MessageError>
                      {errors.password}
                    </Screen.with.MessageError>
                  ) : null}
                  <IconPassword
                    style={{
                      position: `absolute`,
                      right: 10,
                      top: 20,
                    }}
                  />
                </Screen.layout.PassowordContainer>

                <Screen.layout.PassowordContainer>
                  <Screen.with.Input
                    placeholder="********"
                    textContentType="password"
                    secureTextEntry
                    autoCompleteType="password"
                    onBlur={handleBlur(`confirmedPassword`)}
                    onChangeText={handleChange(`confirmedPassword`)}
                    importantForAutofill="no"
                    value={values.confirmedPassword}
                    error={!!errors.confirmedPassword}
                  />
                  {errors.confirmedPassword && touched.confirmedPassword ? (
                    <Screen.with.MessageError>
                      {errors.confirmedPassword}
                    </Screen.with.MessageError>
                  ) : null}
                  <IconPassword
                    style={{
                      position: `absolute`,
                      right: 10,
                      top: 20,
                    }}
                  />
                </Screen.layout.PassowordContainer>

                <Screen.layout.CheckBox>
									<Checkbox
										color="#08cf5e"
										uncheckedColor="#e14eca"
                    status={privacy_policy ? "checked" : "unchecked"}
                    onPress={() => {
                      setPrivacyPolicy((checked) => !checked);
                    }}
                  />
                  <Screen.with.CheckBoxDescription>
                    Eu concordo com os{" "}
                    <Link to="/">termos de privacidade</Link>
                  </Screen.with.CheckBoxDescription>
                </Screen.layout.CheckBox>

                <Screen.with.ButtonSubmit onPress={() => handleSubmit()}>
                  {!loading && (
                    <Screen.with.ButtonSubmitLabel>
                      CADASTRAR
                    </Screen.with.ButtonSubmitLabel>
                  )}
                  {loading && (
                    <PulseIndicator
                      style={{ position: `absolute` }}
                      animating
                      size={60}
                      color="#F7F8FB"
                      interaction
                    />
                  )}
                </Screen.with.ButtonSubmit>

                <Screen.with.ButtonRegister to="/Login">
                  <Screen.with.ButtonRegisterLabel>
                    Já tem uma conta ?
                  </Screen.with.ButtonRegisterLabel>
                </Screen.with.ButtonRegister>
              </>
            )}
          </Formik>
        </Screen.layout.FormContainer>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export { SignUp };

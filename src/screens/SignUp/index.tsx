import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { PulseIndicator } from 'react-native-indicators';

import { IconEmail } from '../../assets/signin/Email';
import { IconPassword } from '../../assets/signin/Password';
import { IconProfile } from '../../assets/signup/Profile';
import { showToastWithGravity } from '../../components/NativeToast';
import { SvgHeaderIcon } from '../../components/SvgHeaderIcon';
import { api } from '../../services/api';
import { SignUpSchema } from './signup.validations';
import * as Styles from './styles';
import { User } from './types';

function SignUpScreen() {
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleUserSignUp = async (userData: User) => {
    setLoading(true);
    try {
      const { name, email, password } = userData;
      const response = await api.post(`/register`, {
        name,
        email,
        password,
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

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={100}
      style={{ flex: 1 }}
      behavior={Platform.OS === `ios` ? `position` : null}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <SvgHeaderIcon>Sua comida preferida mais perto de você!</SvgHeaderIcon>
        <Styles.Form>
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
                <View style={{ position: `relative` }}>
                  <Styles.FormInput
                    placeholder="Seu Nome"
                    autoCompleteType="name"
                    keyboardType="name-phone-pad"
                    onBlur={handleBlur(`name`)}
                    onChangeText={handleChange(`name`)}
                    value={values.name}
                    error={!!errors.name}
                  />
                  {errors.name && touched.name ? (
                    <Styles.FormErrorMessage>
                      {errors.name}
                    </Styles.FormErrorMessage>
                  ) : null}
                  <IconProfile
                    style={{
                      position: `absolute`,
                      right: 10,
                      top: 20,
                    }}
                  />
                </View>
                <Styles.FormEmail>
                  <Styles.FormInput
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
                    <Styles.FormErrorMessage>
                      {errors.email}
                    </Styles.FormErrorMessage>
                  ) : null}
                  <IconEmail
                    style={{
                      position: `absolute`,
                      right: 10,
                      top: 20,
                    }}
                  />
                </Styles.FormEmail>

                <Styles.FormPassword>
                  <Styles.FormInput
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
                    <Styles.FormErrorMessage>
                      {errors.password}
                    </Styles.FormErrorMessage>
                  ) : null}
                  <IconPassword
                    style={{
                      position: `absolute`,
                      right: 10,
                      top: 20,
                    }}
                  />
                </Styles.FormPassword>

                <Styles.FormPassword>
                  <Styles.FormInput
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
                    <Styles.FormErrorMessage>
                      {errors.confirmedPassword}
                    </Styles.FormErrorMessage>
                  ) : null}
                  <IconPassword
                    style={{
                      position: `absolute`,
                      right: 10,
                      top: 20,
                    }}
                  />
                </Styles.FormPassword>
                <Styles.FormRectButton onPress={() => handleSubmit()}>
                  {!loading && (
                    <Styles.FormRectButtonText>
                      CADASTRAR
                    </Styles.FormRectButtonText>
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
                </Styles.FormRectButton>
                <Styles.FormButtonRegister to="/Login">
                  <Styles.FormButtonRegisterText>
                    Já tem uma conta ?
                  </Styles.FormButtonRegisterText>
                </Styles.FormButtonRegister>
              </>
            )}
          </Formik>
        </Styles.Form>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export { SignUpScreen };
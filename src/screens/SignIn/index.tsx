/* eslint-disable global-require */
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { PulseIndicator } from 'react-native-indicators';

import { IconEmail } from '../../assets/signin/Email';
import { IconPassword } from '../../assets/signin/Password';
import { showToastWithGravity } from '../../components/NativeToast';
import { SvgHeaderIcon } from '../../components/SvgHeaderIcon';
import { useAuthContext } from '../../context/auth.context';
import { SignInSchema } from './signin.validations';
import { Screen } from './styles';

function SignIn() {
  const { SignIn } = useAuthContext();
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleUserSignIn = async ({ email, password }) => {
    setLoading(true);
		try {
			const response = await SignIn(email, password);

			if (response.status === 202) {
				return;
			}

		} catch (error) {
			const { response } = Object(error);
			if (response?.status === 401) {
				showToastWithGravity(response.data?.message);
				return;
			}
		} finally {
			setLoading(false);
		}
	};
	
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={100}
      style={{ flex: 1 }}
      behavior={Platform.OS === `ios` ? `position` : null}
    >
      <Screen.layout.ScrollView
        contentContainerStyle={{
					flexGrow: 1,
        }}
      >
        <SvgHeaderIcon>Sua comida preferida mais perto de você!</SvgHeaderIcon>

        <Screen.layout.FormContainer>
          <Formik
            validationSchema={SignInSchema}
            initialValues={{ email: ``, password: `` }}
            onSubmit={handleUserSignIn}
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
                    placeholder="email"
                    autoCompleteType="email"
                    keyboardType="email-address"
                    onBlur={handleBlur(`email`)}
                    onChangeText={handleChange(`email`)}
                    error={!!errors.email}
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <Screen.with.EmailError>
                      {errors.email}
                    </Screen.with.EmailError>
                  ) : null}
                  <IconEmail
                    style={{
                      position: `absolute`,
                      right: 10,
                      top: 20,
                    }}
                  />
                </View>

                <Screen.layout.FormPassword>
                  <Screen.with.Input
                    placeholder="senha"
                    textContentType="password"
                    autoCompleteType="password"
                    onBlur={handleBlur(`password`)}
                    onChangeText={handleChange(`password`)}
                    value={values.password}
                    secureTextEntry
                    error={!!errors.email}
                    importantForAutofill="no"
                  />
                  {errors.password && touched.password ? (
                    <Screen.with.PasswordError>
                      {errors.password}
                    </Screen.with.PasswordError>
                  ) : null}
                  <IconPassword
                    style={{
                      position: `absolute`,
                      right: 13,
                      top: 20,
                    }}
                  />
                </Screen.layout.FormPassword>

                <Screen.with.Button onPress={() => handleSubmit()}>
                  <Screen.with.ButtonLabel>
                    {!loading && `ENTRAR`}
                  </Screen.with.ButtonLabel>
                  {loading && (
                    <PulseIndicator
                      style={{ position: `absolute` }}
                      animating
                      size={60}
                      color="#F7F8FB"
                      interaction
                    />
                  )}
                </Screen.with.Button>

                <Screen.with.ButtonNavigate
                  onPress={() => navigate(`Cadastro`)}
                >
                  <Screen.with.ButtonLabel>
                    CRIAR CONTA ?
                  </Screen.with.ButtonLabel>
                </Screen.with.ButtonNavigate>

                <Screen.with.RecoveryPassword to="/#">
                  <Screen.with.SignUpText>
                    Não lembra da senha ?
                  </Screen.with.SignUpText>
                </Screen.with.RecoveryPassword>
              </>
            )}
          </Formik>
        </Screen.layout.FormContainer>
      </Screen.layout.ScrollView>
    </KeyboardAvoidingView>
  );
}

export { SignIn };

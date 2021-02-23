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
import * as Styles from './styles';

function SignInScreen() {
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

			if (response.status === 401) {
				showToastWithGravity(response.data?.message);
			}
		} catch (error) {
			showToastWithGravity();
		}
		setLoading(false);
	};

	return (
		<KeyboardAvoidingView
			keyboardVerticalOffset={100}
			style={{ flex: 1 }}
			behavior={Platform.OS === `ios` ? `position` : null}
		>
			<Styles.ScrollView
				contentContainerStyle={{
					flexGrow: 1,
				}}
			>
				<SvgHeaderIcon>
					Sua comida preferida mais perto de você!
				</SvgHeaderIcon>
				<Styles.Form>
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
						}) => 
							(
								<>
									<View>
										<Styles.FormInput
											placeholder="email"
											autoCompleteType="email"
											keyboardType="email-address"
											onBlur={handleBlur(`email`)}
											onChangeText={handleChange(`email`)}
											error={!!errors.email}
											value={values.email}
										/>
										{errors.email && touched.email ? (
											<Styles.FormInputErrorEmail>
												{errors.email}
											</Styles.FormInputErrorEmail>
										) : null}
										<IconEmail
											style={{
												position: `absolute`,
												right: 10,
												top: 20
											}} />
									</View>

									<Styles.FormPassword>
										<Styles.FormInput
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
											<Styles.FormInputErrorPassword>
												{errors.password}
											</Styles.FormInputErrorPassword>
										) : null}
										<IconPassword
											style={{
												position: `absolute`,
												right: 13,
												top: 20
											}} />
									</Styles.FormPassword>
									<Styles.FormButton
										onPress={() => 
											handleSubmit()}
									>
										<Styles.FormButtonText>
											{!loading && `ENTRAR`}
										</Styles.FormButtonText>
										{loading && (
											<PulseIndicator
												style={{ position: `absolute` }}
												animating
												size={60}
												color="#F7F8FB"
												interaction
											/>
										)}
									</Styles.FormButton>
									<Styles.FormButtonNavigate
										onPress={() => 
											navigate(`Cadastro`)}
									>
										<Styles.FormButtonText>
											CRIAR CONTA ?
										</Styles.FormButtonText>
									</Styles.FormButtonNavigate>
									<Styles.FormRecoveryPassword to="/#">
										<Styles.FormSignUpText>
											Não lembra da senha ?
										</Styles.FormSignUpText>
									</Styles.FormRecoveryPassword>
								</>
							)}
					</Formik>
				</Styles.Form>
			</Styles.ScrollView>
		</KeyboardAvoidingView>
	);
}

export { SignInScreen };

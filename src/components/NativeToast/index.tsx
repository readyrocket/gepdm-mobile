import { Alert, Platform, ToastAndroid } from 'react-native';

const defaultMessage = `Parece que houve algum problema de
conexão. Tente novamente, se o problem persistir entre em contato`;

const showToastWithGravity = (message = defaultMessage) =>
{
	const rgx = /(undefined)|(null)|(object)|([[\]])/g;
	if (!rgx.test(message)) {
		if (Platform.OS === `android`) {
			return ToastAndroid.showWithGravity(
				message,
				ToastAndroid.SHORT,
				ToastAndroid.CENTER
			);
		}
		return Alert.alert(`Oops`, message);
	}
	return null;
};

export { showToastWithGravity };

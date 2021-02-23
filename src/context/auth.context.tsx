import AsyncStorage from '@react-native-community/async-storage';

import React, {
	createContext,
	ReactChild,
	ReactChildren,
	useContext,
	useEffect,
	useState
} from 'react';

import { TResponse } from '../@types/request.type';
import { api } from '../services/api';
import AuthHeader from '../utils/auth.header';

type AuthContextData = {
	signed: boolean
	token?: string
	loading: boolean
	SignIn(email: string, password: string): Promise<TResponse>
	SignOut(): void
}

interface ChildrenProps {
	children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[]
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthContextProvider: React.FC<ChildrenProps> = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [token, setToken] = useState(``);

	useEffect(() => {
		const loadStorageUser = async () => {
			try {
				const [storageUserToken] = await AsyncStorage.multiGet([
					`@RNAuth:token`,
				]);

				const [_, authToken] = storageUserToken;

				if (authToken) {
					const response = await api.get(`/home`, {
						headers: {
							Authorization: AuthHeader.generate(authToken),
						},
					});

					if (response.status === 402) {
						throw new Error(response.data?.message);
					}

					if (response.status === 202) {
						setToken(authToken);
						api.defaults.headers.Authorization
							= AuthHeader.generate(authToken);
					}
				} else {
					throw new Error(
						`Você não tem autorização para essa operação,
						tente fazer login novamente`
					);
				}
				setLoading(false);
			} catch (e) {
				SignOut();
				setLoading(false);
			}
		};
		loadStorageUser();
	}, []);

	const SignIn = async (email: string, password: string) => {
		try {
			const response: TResponse = await api.post(`/login`, {
				email,
				password,
			});

			if (response.status === 202) {
				setLoading(true);
				const jwtToken: string = response.data?.token;
				setToken(jwtToken);
				api.defaults.headers.Authorization
					= AuthHeader.generate(jwtToken);
				await AsyncStorage.multiSet([[`@RNAuth:token`, jwtToken]]);
			}
			setLoading(false);
			return response;
		} catch (error) {
			return error.response;
		}
	};

	const SignOut = async () => {
		await AsyncStorage.multiRemove([`@RNAuth:token`]);
		api.defaults.headers.Authorization = undefined;
	};

	return (
		<AuthContext.Provider
			value={{
				signed: !!token,
				loading,
				SignIn,
				SignOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = (): AuthContextData => {
	const { signed, loading, SignIn, SignOut } = useContext(AuthContext);
	return { signed, loading, SignIn, SignOut };
};

export { AuthContext, AuthContextProvider };

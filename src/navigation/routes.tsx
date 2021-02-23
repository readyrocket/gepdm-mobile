import React from 'react';
import { View } from 'react-native';

import { useAuthContext } from '../context/auth.context';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

function Routes() {
	const { signed, loading } = useAuthContext();

	if (loading) {
		return <View />;
	}

	return signed ? <AppRoutes /> : <AuthRoutes />;
}

export { Routes };

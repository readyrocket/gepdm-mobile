import React from 'react';
import { ActivityIndicator } from 'react-native-paper';

import { styles } from './styles';

const Loading: React.FC = () => 
	<ActivityIndicator style={styles.wrapper} animating />;

export { Loading };

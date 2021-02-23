import { ScaledSheet } from 'react-native-size-matters';

import { colors } from '../../utils/colors';

const styles = ScaledSheet.create({
	wrapper: {
		backgroundColor: colors.e_tertiary,
		marginTop: 10,
		flexDirection: `row`,
		justifyContent: `space-between`,
		alignItems: `center`,
		padding: 10,
		minHeight: 120,
		shadowColor: colors.e_primary,
	},
	container: {
		flexDirection: `row`,
		justifyContent: `flex-start`,
		alignItems: `center`,
		padding: 10
	},
	title: {
		fontSize: 18,
		color: colors.e_primary,
	},
	descriptionWrapper: {
		flexDirection: `row`,
		alignItems: `center`,
	},
	description: {
		marginTop: 10,
		fontSize: 12,
		fontWeight: `100`,
		color: colors.e_secondary,
		lineHeight: 16,
	},
	imageProfile: {
		width: `60@ms`,
		height: `55@vs`,
		marginRight: `15@vs`,
		borderRadius: 50,
	},
});

export { styles };

import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';

export type TRestaurant = {
	restaurant: {
		id: number | string,
		name: string,
		description: string,
		open: string,
		profile: string,
		stars: string,
	},
};

const RestaurantItem = ({ restaurant }: TRestaurant) => 
	(
		<View style={styles.wrapper}>
			<View style={styles.container}>
				<Image style={styles.imageProfile}
					source={{ uri: restaurant?.profile }} />
				<View style={styles.descriptionWrapper}>
					<View>
						<Text style={styles.title}>{restaurant?.name}</Text>
						<Text style={styles.description}>{restaurant?.description}</Text>
					</View>
				</View>
			</View>
		</View>
	);

export { RestaurantItem };

import React from 'react';
import { View } from 'react-native';

import { Screen } from './styles';

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

const RestaurantItem = ({ restaurant }: TRestaurant) => (
  <Screen.layout.Wrapper>
    <Screen.layout.Container>
      <Screen.with.ImageProfile source={{ uri: restaurant?.profile }} />
      <Screen.layout.DescriptionWrapper>
        <View>
          <Screen.with.Title>{restaurant?.name}</Screen.with.Title>
          <Screen.with.Description numberOfLines={4}>
            {restaurant?.description}
          </Screen.with.Description>
        </View>
      </Screen.layout.DescriptionWrapper>
    </Screen.layout.Container>
  </Screen.layout.Wrapper>
);

export { RestaurantItem };

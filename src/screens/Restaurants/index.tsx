import Geolocation from '@react-native-community/geolocation';
import React, { useState } from 'react';
import { NativeSyntheticEvent, Text, TextInputChangeEventData, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import { Coordinates } from '../../@types/coordinates.type';
import { Restaurant } from '../../@types/restaurant.type';
import { RestaurantItem } from '../../components/RestaurantItem';
import { DATA } from './data';
import * as S from './styles';

const Restaurants = () => {
	const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
	const [location, setLocation] = useState(``);
	const [cordinates, setCordinates] = useState<Coordinates>({} as Coordinates);

	const renderItem = ({ item }) => 
		<RestaurantItem restaurant={item} />;

	const handleRestaurant = () => {
		setRestaurants(DATA);
	};

	const handleLocation
		= (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
			setLocation(event.nativeEvent.text);
		};

	function handlePosition() {
		Geolocation.getCurrentPosition(
			(position) => {
				const coords = {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
				};
				setCordinates(coords);
				
			},
			(_err) => {
				alert(`Para continuar, precisamos da sua localização.`);
				
			}
		);
	}

	return (
		<S.Wrapper>
			<S.Main>
				
				<View>
					<S.MainLogo>Olá, Bosun Jones</S.MainLogo>
					<S.MainDescriptionView>
						<S.MainTitle>Procure por restaurantes</S.MainTitle>
						<S.MainDescription>
							Sua comida preferida por delivery, encontre um resturante
							próximo em apenas
							um click.
						</S.MainDescription>
					</S.MainDescriptionView>
					
					<S.MainInputLocationView>
						<S.MainInputLocation
							underlineColorAndroid="transparent"
							onChange={handleLocation}
							value={location}
							placeholder="localização"
							keyboardType="numeric"
							mode="flat"
							underlineColor="#fff"
						/>
						
						<S.MainInputLocationButton
							onPress={() => 
								handleRestaurant()}>
							<Icon name="location-outline" size={20} color="#fff" />
							<S.MainInputLocationButtonText>
								Buscar
							</S.MainInputLocationButtonText>
						</S.MainInputLocationButton>

					</S.MainInputLocationView>
				</View>

				<S.MainBoxItemsWrapper>
					{restaurants[0] && (
						<>
							<FlatList
								data={DATA}
								renderItem={renderItem}
								keyExtractor={(item) => 
									item.id.toString()}
								showsHorizontalScrollIndicator={false}
								showsVerticalScrollIndicator={false}
								contentContainerStyle={{
									flexGrow: 1,
									paddingBottom: 20,
								}}
							/>
						</>
					)}
					<View>
						{!restaurants[0] && <Text>Pesquise por restaurantes</Text>}
					</View>
				</S.MainBoxItemsWrapper>
			</S.Main>
		</S.Wrapper>
	);
};

export { Restaurants };

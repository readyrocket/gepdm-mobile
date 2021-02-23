import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

const isPortrait = () => {
	const dim = Dimensions.get(`window`);
	return dim.height >= dim.width;
};

export function useOrientation() {
	const thatOrientation = isPortrait() ? `PORTRAIT` : `LANDSCAPE`;
	const [orientation, setOrientation] = useState(thatOrientation);
	useEffect(() => {
		const callback = () => 
			setOrientation(isPortrait() ? `PORTRAIT` : `LANDSCAPE`);

		Dimensions.addEventListener(`change`, callback);

		return () => {
			Dimensions.removeEventListener(`change`, callback);
		};
	}, [setOrientation]);

	return orientation;
}

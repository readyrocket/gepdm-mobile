import React from 'react';

import Amico from '../../assets/signin/Amico';
import * as Styles from './styles';

const SvgHeaderIcon = (props: { children: string }) => 
	(
		<>
			<Styles.SvgIcon>
				<Amico />
			</Styles.SvgIcon>
			<Styles.SvgIconText>{props.children}</Styles.SvgIconText>
		</>
	);
export { SvgHeaderIcon };

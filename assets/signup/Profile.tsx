/* eslint-disable max-len */
import React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg';

const IconProfile = (props: SvgProps) => 
	(
		<Svg
			width={17}
			height={17}
			viewBox="0 0 17 17"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M8.5 9.392c2.071 0 3.829-2.762 3.829-4.896S10.57.668 8.5.668a3.804 3.804 0 00-3.828 3.828c0 2.134 1.694 4.896 3.828 4.896z"
				stroke="url(#prefix__paint0_linear)"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M10.32 8.827l1.255 1.883a3.777 3.777 0 013.766 3.765l.628 1.883H.906l.628-1.883a3.777 3.777 0 013.765-3.765l1.256-1.883"
				stroke="url(#prefix__paint1_linear)"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Defs>
				<LinearGradient
					id="prefix__paint0_linear"
					x1={8.883}
					y1={-0.705}
					x2={9.444}
					y2={14.744}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="#FD749B" />
					<Stop offset={1} stopColor="#281AC8" />
				</LinearGradient>
				<LinearGradient
					id="prefix__paint1_linear"
					x1={9.191}
					y1={7.641}
					x2={9.403}
					y2={20.993}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="#FD749B" />
					<Stop offset={1} stopColor="#281AC8" />
				</LinearGradient>
			</Defs>
		</Svg>
	);

export { IconProfile };

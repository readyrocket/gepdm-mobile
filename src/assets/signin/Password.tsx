/* eslint-disable max-len */
import React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg';

function IconPassword(props: SvgProps) {
	return (
		<Svg
			width={15}
			height={20}
			viewBox="0 0 15 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M3.62 6.8h8.14a2.721 2.721 0 012.713 2.714v8.14c0 .814-.543 1.357-1.357 1.357H2.263c-.814 0-1.357-.543-1.357-1.357v-8.14A2.721 2.721 0 013.62 6.801z"
				stroke="url(#prefix__paint0_linear)"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M3.621 5.444c0-2.306 1.764-4.07 4.07-4.07s4.07 1.764 4.07 4.07"
				stroke="url(#prefix__paint1_linear)"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M9.045 10.87l-2.713 2.714"
				stroke="url(#prefix__paint2_linear)"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M6.332 10.87l2.713 2.714"
				stroke="url(#prefix__paint3_linear)"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Defs>
				<LinearGradient
					id="prefix__paint0_linear"
					x1={8.368}
					y1={4.879}
					x2={8.988}
					y2={26.513}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="#FD749B" />
					<Stop offset={1} stopColor="#281AC8" />
				</LinearGradient>
				<LinearGradient
					id="prefix__paint1_linear"
					x1={8.098}
					y1={0.733}
					x2={8.213}
					y2={7.949}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="#FD749B" />
					<Stop offset={1} stopColor="#281AC8" />
				</LinearGradient>
				<LinearGradient
					id="prefix__paint2_linear"
					x1={7.824}
					y1={10.443}
					x2={7.977}
					y2={15.25}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="#FD749B" />
					<Stop offset={1} stopColor="#281AC8" />
				</LinearGradient>
				<LinearGradient
					id="prefix__paint3_linear"
					x1={7.824}
					y1={10.443}
					x2={7.977}
					y2={15.25}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="#FD749B" />
					<Stop offset={1} stopColor="#281AC8" />
				</LinearGradient>
			</Defs>
		</Svg>
	);
}

export { IconPassword }; 

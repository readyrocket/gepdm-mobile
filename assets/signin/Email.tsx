/* eslint-disable max-len */
import React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg';

function IconEmail(props: SvgProps) {
	return (
		<Svg
			width={20}
			height={20}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M19.445 5.165h-18V19.01h18V5.165z"
				stroke="url(#prefix__paint0_linear)"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M2.138 5.857l6.923 6.3c.761.761 2.008.761 2.838 0l6.646-6.023"
				stroke="url(#prefix__paint1_linear)"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M2.138 5.857l7.269-4.223a2.207 2.207 0 012.077 0l6.992 3.946"
				stroke="url(#prefix__paint2_linear)"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M12.522 12.087l5.954 5.954m-16.338.277l6.23-6.23-6.23 6.23z"
				stroke="url(#prefix__paint3_linear)"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M4.907 7.934h11.077"
				stroke="url(#prefix__paint4_linear)"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Defs>
				<LinearGradient
					id="prefix__paint0_linear"
					x1={11.345}
					y1={2.985}
					x2={11.947}
					y2={27.523}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="#FD749B" />
					<Stop offset={1} stopColor="#281AC8" />
				</LinearGradient>
				<LinearGradient
					id="prefix__paint1_linear"
					x1={11.162}
					y1={4.775}
					x2={11.324}
					y2={16.958}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="#FD749B" />
					<Stop offset={1} stopColor="#281AC8" />
				</LinearGradient>
				<LinearGradient
					id="prefix__paint2_linear"
					x1={11.124}
					y1={0.668}
					x2={11.193}
					y2={8.617}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="#FD749B" />
					<Stop offset={1} stopColor="#281AC8" />
				</LinearGradient>
				<LinearGradient
					id="prefix__paint3_linear"
					x1={11.124}
					y1={11.107}
					x2={11.258}
					y2={22.154}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="#FD749B" />
					<Stop offset={1} stopColor="#281AC8" />
				</LinearGradient>
				<LinearGradient
					id="prefix__paint4_linear"
					x1={10.999}
					y1={7.776}
					x2={11.004}
					y2={9.549}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="#FD749B" />
					<Stop offset={1} stopColor="#281AC8" />
				</LinearGradient>
			</Defs>
		</Svg>
	);
}

export { IconEmail };

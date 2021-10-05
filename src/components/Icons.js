import React from 'react';
import styled from 'styled-components';
import {
	daiLogo,
	yearnLogo,
	loopringLogo,
	oxLogo,
	aaveLogo,
	makerLogo,
	umaLogo,
	chainlinkLogo,
	bitcoinLogo,
	compoundLogo,
	uniLogo,
	kyberLogo,
	synthetixLogo,
	renLogo,
	avaxLogo,
} from '../assets/images/cryptos';

// Material UI
import Typography from '@mui/material/Typography';

const Body = styled.div`
	min-height: 250px;
	padding-bottom: 96px;
`;

const IconBody = styled.div`
	display: flex;
	position: relative;
	left: 0;
	float: left;
	align-items: center;
	justify-content: space-around;
	padding: 0 0 2rem;
  animation-name: icon-animation;
  animation-duration: 20s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: backwards;
  @media (max-width: 600px) and (max-height: 700px) {
  	padding-bottom: 1rem;
  }
`;

const IconWrapper = styled.div`
	display: flex;
	width: 15%;
	min-width: 250px;
	margin: auto 1rem;
	justify-content: center;
	align-items: center;
	padding: 16px;
	background: #FFFFFF;
	box-shadow: 0px 1px 2px rgba(20, 28, 31, 0.02), 0px 4px 8px rgba(20, 28, 31, 0.08);
	border-radius: 8px;
	& p {
		margin-left: 1.5rem
	}
	@media (max-width: 600px) {
		padding: 10px 12px;
		min-width: 200px;
		& img {
			width: 33px!important;

		}
	}
`;

const Icon = (props) => {
	return(
		<IconWrapper>
			<img width='47' src={props.icon} alt={props.name} />
			<Typography variant='body2'>{props.name}</Typography>
		</IconWrapper>
	)
}

export default class Icons extends React.Component {

	render() {

		const icons = [
		[
			{ icon: daiLogo, name: 'Dai' },
			{ icon: yearnLogo, name: 'Yearn Finanace' },
			{ icon: loopringLogo, name: 'Loopring' },
			{ icon: oxLogo, name: 'Zrx' },
			{ icon: aaveLogo, name: 'Aave' },
		],
		[
			{ icon: makerLogo, name: 'Maker' },
			{ icon: umaLogo, name: 'Uma' },
			{ icon: chainlinkLogo, name: 'Chainlink' },
			{ icon: bitcoinLogo, name: 'Bitcoin' },
			{ icon: compoundLogo, name: 'Compound' },
		],
		[
			{ icon: uniLogo, name: 'Uniswap' },
			{ icon: kyberLogo, name: 'Knc' },
			{ icon: synthetixLogo, name: 'Synthetix Network' },
			{ icon: renLogo, name: 'Ren' },
			{ icon: avaxLogo, name: 'Avalanche' },
		]
		];

		return (
			<Body>
				<IconBody>
					{
						icons[0].map((icon, i) => (
							<Icon key={i} name={icon.name} icon={icon.icon} />
						))
					}
					{
						icons[0].map((icon, i) => (
							<Icon key={i} name={icon.name} icon={icon.icon} />
						))
					}
				</IconBody>
				<IconBody className='reverse'>
					{
						icons[1].map((icon, i) => (
							<Icon key={i} name={icon.name} icon={icon.icon} />
						))
					}
					{
						icons[1].map((icon, i) => (
							<Icon key={i} name={icon.name} icon={icon.icon} />
						))
					}
				</IconBody>
				<IconBody>
					{
						icons[2].map((icon, i) => (
							<Icon key={i} name={icon.name} icon={icon.icon} />
						))
					}
					{
						icons[2].map((icon, i) => (
							<Icon key={i} name={icon.name} icon={icon.icon} />
						))
					}
				</IconBody>
			</Body>
		);
	}
}

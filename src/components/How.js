import React from 'react';
import styled from 'styled-components';
import { useApp } from '../context/Context';

// Hook for checking viewport + animation package
import { useInView } from 'react-hook-inview';
import SmoothList from 'react-smooth-list';

// Icons
import trade from '../assets/images/trade.png';
import cardCoinWhite from '../assets/images/cardCoinWhite.png';
import refresh from '../assets/images/refresh.png';

// Material UI
import Typography from '@mui/material/Typography';

// Comps
import CardContainer from './CardContainer';
import AppButton from './layout/AppButton';

const Wrapper = styled.div`
	padding-top: 10rem;
	padding-bottom: 5rem;
	background-color: #FAFAFA;
	@media (max-width: 900px) {
		padding-top: 5rem;
	}
`;

const CardWrapper = styled(SmoothList)`
	width: 100%;
	height: 266px;
	border-radius: 24px;
	margin-top: 7.5rem;
	background-color: #222225;
	display: flex;
	justify-content: space-around;
	& :nth-of-type(2) {
		color: white;
	}
	@media (max-width: 900px) {
		height: auto;
		flex-direction: column;
		align-items: center;
		& > div {
			width: 100%;
		}
	}
`;

const CardBody = styled.div`
	min-width: 20%;
	width: 250px;
	height: 200px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 24px 24px 42px;
	border-radius: 8px;
	position: relative;
	top: -50px;
	& h5 {
		margin-bottom: .5rem;
		font-weight: 600;
	}
	.cardText {
		position: relative;
		top: 65px;
		transition: .25s;
	}
	.cardBottom {
		opacity: 0;
		top: 100px;
	}
	& button {
		color: black;
		font-weight: 500!important;
		border-radius: 1000px!important;
		margin: 0 auto;
		margin-left: 0;
		padding-left: 3rem!important;
		padding-right: 3rem!important;
		position: relative;
		max-height: 0;
	}
	:hover .cardText {
		top: 0;
		transition: top .25s;
		transition-timing-function: ease-out;
	}
	:hover .cardBottom {
		opacity: 1;
		top: 0;
		transition: .25s;
		transition-timing-function: ease-out;
	}
	@media (min-width: 1450px) {
		width: 300px;
	}
	@media (max-width: 1100px) {
		width: 200px;
	}
	@media (max-width: 900px) {
    width: 85%;
    margin: auto;
    height: 300px;
    margin-bottom: 2rem;
    & > div {

    }
		.cardText {
			top: 100px;
		}
	}
	@media (max-width: 900px) and (max-height: 500px) {
		height: 175px;
		& .cardText {
			top: 50px;
		}
	}
	@media (max-width: 500px) {
    width: 75%;
	}
`;

const Card = (props) => {
	return (
		<CardBody style={{overflow: 'clip',backgroundColor: props.color}}>
			<img width='44' src={props.icon} alt='icon' />
			<span className='cardText'>
				<Typography variant='h5'>{props.header}</Typography>
			</span>
			<span className='cardBottom'>
				<Typography variant='body2'>{props.text}</Typography>
			</span>
		</CardBody>
	)
}

export default function How() {

	const { language, colorSelect } = useApp();
	const [view, setView] = React.useState(false);
  const [ref, isVisible] = useInView({
    threshold: 0,
  })

  // Trigger setView on viewport enter
  React.useEffect(() => {
  	isVisible && setView(true)
  }, [isVisible])

	const h4Text = {
		english: 'How this works',
		chinese: '投资策略'
	};
	const subText = {
		english: 'In order to explain how this works, we will first cover several fundamental concepts.',
		chinese: '为了更好地诠释我们的投资方式，我们首先介绍几个基本概念。'
	}

	const cardText = [
		{
			english: {
				header: 'De-Fi',
				text: 'Decentralized Finance',
			},
			chinese: {
				header: 'De-Fi',
				text: '去中心化金融',
			},
			color: colorSelect('light'),
			icon: trade
		},
		{
			english: {
				header: 'Stablecoin',
				text: 'Digital currency designed to peg to a “stable” reserve asset',
			},
			chinese: {
				header: '稳定币',
				text: '与美元等“稳定”储备资产挂钩',
			},
			color: colorSelect('primary'),
			icon: cardCoinWhite
		},
		{
			english: {
				header: 'Yield Farming',
				text: 'Liquidity Mining',
			},
			chinese: {
				header: '流动性挖矿',
				text: '提供流动性',
			},
			color: colorSelect('dark'),
			icon: refresh
		}
	];


	return (
		<div id='how'>
			<Wrapper className='container'>
				<div ref={ref}>
					<Typography variant='h4'>{h4Text[language]}</Typography>
					<Typography className='textColor' variant='body1'>{subText[language]}</Typography>
				</div>
				<CardWrapper transitionDuration={500} delay={400} visible={view}>
					{
						cardText.map((item, i) => {
							let card = item[language];
							return (
							<Card key={i} header={card && card.header} text={card && card.text} icon={item.icon} color={item.color} />
							)
						})
					}
				</CardWrapper>
			</Wrapper>
			<CardContainer />
		</div>
	);
}

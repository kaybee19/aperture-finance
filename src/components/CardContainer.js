import React from 'react';
import styled from 'styled-components';
import { useApp } from '../context/Context';

// Hook for checking viewport + animation package
import { useInView } from 'react-hook-inview';
import SmoothList from 'react-smooth-list';

// Icons
import trade from '../assets/images/trade.png';
import cardCoin from '../assets/images/cardCoin.png';
import refresh from '../assets/images/refresh.png';

// Material UI
import Typography from '@mui/material/Typography';

// Comps
import Icons from './Icons';

const Container = styled.div`
 background-color: #FAFAFA;
 border-bottom-right-radius: 10000px;
 border-bottom-left-radius: 10000px;
`;

const Wrapper = styled.div`
	overflow: hidden;
	border-radius: 40px;
	display: flex;
	box-shadow: 2px 2px 10px 10px rgba(0,0,0,.075);
	@media (max-width: 900px) {
		flex-direction: column;
	}
`;

const Grid = styled.div`
	width: 50%;
	padding: 96px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	& h5 {
		margin: 1.5rem 0;
		font-weight: 600;
	}
	& p {
		margin-bottom: 1rem
	}
	@media (max-width: 900px) {
		width: auto;
		&:last-child {
			border-radius: 40px;
			margin-top: -2.25rem;
		}
	}
	@media (max-width: 600px) {
		padding: 48px 24px;
		&:first-child {
			padding-bottom: 4rem;
		}
	}
`;

const StableWrapper = styled.div`
	padding-top: 5rem!important;
	padding-bottom: 5rem!important;
	& h5 {
		width: 57.5%;
		font-weight: 600;
		margin: 1.5rem 0;
	}
	& p {
		width: 57.5%;
		margin-top: 1rem
	}
	@media (max-width: 900px) {
		& p {
			width: auto;
			font-size: 14px;
		}	
	}
	@media (max-width: 600px) and (min-height: 700px) {
		padding-top: 2.5rem!important;
	}
	@media (max-width: 600px) and (max-height: 700px) {
		padding-top: 2.5rem!important;
		padding-bottom: 2.5rem!important;
	}
`;

const Card = (props) => {
	return (
		<Grid style={{backgroundColor: props.color}}>
			<SmoothList transitionDuration={1000} delay={200} visible={props.view}>
				<img width='44' src={props.icon} alt='' />
				<span>
					<Typography variant='h5'>{props.header}</Typography>
					<Typography variant='body1'>{props.text}</Typography>
					<Typography variant='body1'>{props.text2}</Typography>
				</span>
			</SmoothList>
		</Grid>
	)
}

export default function CardContainer() {

	const { language, colorSelect } = useApp();
	const [view, setView] = React.useState(false);
  const [scroll, setScroll] = React.useState(0);
  const el = React.useRef(null);
  const child = React.useRef(null);

  const [ref, isVisible] = useInView({
    threshold: .5,
  })

  // Trigger setView on viewport enter
  React.useEffect(() => {
  	isVisible && setView(true)
  }, [isVisible])


  // Function + useEffect for handling fixed background
  const handleScroll = () => {
  	let rect = el.current.getBoundingClientRect();
		if (rect.bottom < -100) {
			child.current.style.zIndex = '-5';
		}
		else {
			child.current.style.zIndex = '-1';
		}
  }
  React.useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", handleScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

	const cardText = [
		{
			english: {
				header: 'De-Fi',
				text: 'Decentralized FinanceDeFi stands for “Decentralized Finance”. It is “a system by which financial products become available on a public decentralized blockchain network, making them open to anyone to use”1, geared towards disrupting financial intermediaries such as banks or brokerages.',
				text2: 'It is the backdrop of the stage, and stablecoins are the main players.',				
			},
			chinese: {
				header: 'De-Fi',
				text: '“DeFi”即“去中心化金融”，它是一种去中心化区块链公共网络系统，开放金融产品的使用，旨在颠覆银行和券商等金融机构主导的传统金融体系。而DeFi时代背景下的主角则是稳定币。',
			},
			color: colorSelect('light'),
			icon: trade
		},
		{
			english: {
				header: 'Yield Farming',
				text: 'Yield farming, also referred to as liquidity mining, is the practice of generating high returns by providing liquidity to facilitate transactions with your crypto holdings.',
				text2: 'Popular yield farming protocols include Aave, Compound, and Uniswap.',				
			},
			chinese: {
				header: '流动性挖矿',
				text: '流动性挖矿（Yield Farming）是通过为DeFi提供流动性，从而获取高回报的投资方式。常见的流动性挖矿协议包括 Aave, Compound和Uniswap。',
			},
			color: colorSelect('dark'),
			icon: refresh
		}
	];

	const coinText = {
		english: {
			header: 'Stablecoin',
			body1: 'Unlike tokens such as Bitcoin, Ethereum and Dogecoin, a stablecoin is a digital currency that is designed to peg to a “stable” reserve asset like the U.S. dollar.',
			body2: 'There are several types of stablecoins, such as fiat-backed, crypto-collateralized, and algorithmic stablecoins. Popular ones include USDT, USDC, DAI and UST and they all maintain a 1:1 ratio to the U.S. dollar (read more).',
		},
		chinese: {
			header: '稳定币',
			body1: '与比特币、以太坊和狗狗币等代币不同，稳定币顾名思义是一种价格稳定的数字货币，与美元等“稳定”储备资产挂钩。',
			body2: '有几种类型的稳定币，例如法币支持、加密抵押和算法稳定币。流行的稳定币包括USDT, USDC, DAI和UST，它们都与美元保持1:1的比率（阅读更多）。',
		}
	}

	return (
		<React.Fragment>
			<Container>
				<Wrapper ref={ref}>
					{
						cardText.map((item, i) => {
							let card = item[language];
							return (
								<Card key={i} view={view} header={card && card.header} text={card && card.text} text2={card && card.text2} icon={item.icon} color={item.color} />
							)
						})
					}
				</Wrapper>
			</Container>
			<div ref={el} className='stable-fixed'>
			</div>
			<div ref={child} id='stable'>
				<StableWrapper className='container'>
					<img src={cardCoin} width='45' alt="coin" />
					<Typography variant='h5'>{coinText[language] && coinText[language].header}</Typography>
					<Typography variant='body1'>{coinText[language] && coinText[language].body1}</Typography>
					<Typography variant='body1'>{coinText[language] && coinText[language].body2}</Typography>
				</StableWrapper>
				<Icons />
			</div>
		</React.Fragment>
	);
}

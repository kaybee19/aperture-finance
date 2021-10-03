import React from 'react';
import { useApp } from '../context/Context';
import styled from 'styled-components';

// Hook for checking viewport + animation package
import { useInView } from 'react-hook-inview';
import SmoothList from 'react-smooth-list';

// Material UI
import Typography from '@mui/material/Typography';

// Comps
import List from './List';

const Wrapper = styled.div`
	background-color: #222225;
	color: white;
	padding-top: 96px;
	padding-bottom: 96px;
`;

const TextWrapper = styled.div`
	max-width: 720px;
	& p {
		margin-top: 1rem;
	}
`;

const ListWrapper = styled.div`
	max-width: 824px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 64px auto;
`;

export default function What() {

	const { language } = useApp();
	const [view, setView] = React.useState(false);
  const [ref, isVisible] = useInView({
    threshold: 1,
  })

  // Trigger setView on viewport enter
  React.useEffect(() => {
  	isVisible && setView(true)
  }, [isVisible])

	const text = {
		english: {
			title: 'What We Do',
			body: 'Aperture Finance takes care of yield farming for you. We take fiat-currencies from the investors, convert the assets into stablecoins, and adopt a combination of yield-farming strategies, based on your risk profile, to generate outstanding returns for you.',
			body2: 'Here is a list of passive and active strategies (ranked by the risk levels) our fund management team uses:',
		},
		chinese: {
			title: '风险说明',
			body: 'Aperture Finance购买业内领先保险以防范智能合约漏洞与黑客风险。Aperture Finance使用多种策略进行投资，并将部分资金借给经过多重审核的机构。',
			body2: '请注意，数字货币不是法定货币，不受政府支持，不受 FDIC 或 SIPC 保护。这不是无风险的产品。',
		}
	}

	const listText = {
		english: [
			{ 1: 'Staking stablecoins (USDT, USDC, UST) on vetted protocols.' },
			{ 2: 'Staking USDC-USDT-wUST tri-pair on Mercurial Finance.' },
			{	3: 'Simultaneous long-farm and short-farm on synthetic stock tokens with Mirror protocol with a Delta-neutral strategy minimize the volatility and loss caused by the fluctuations in the underlying asset price.' },
			{	4: 'Active liquidity farming with stablecoins and crypto pairs with Uniswap v3.' }
		],
		chinese: [
			{ 1: '在经过审查的协议上质押稳定币获取高年化回报（USDT、USDC、UST）' },
			{	2: '在Mercurial Finance上质押 USDC-USDT-wUST稳定币三件套' },
			{	3: '使用 Mirror 协议和 Delta 中性策略在合成股票代币上同时做多头矿池和空头矿池，最大限度地减少标的资产价格波动造成的波动和损失' },
			{	4: '使用Uniswap v3算法，对稳定币和加密货币组合进行主动分配。' },
		]
	}

	const learnText = {
		english: 'To learn more about the funds Aperture Finance has to offer, please visit this page.',
		chinese: '如需进一步了解Aperture Finance所提供的基金，请访问此页面。'
	}

	return (
		<Wrapper className='borderClass container'>
			<TextWrapper>
				<Typography variant='h4' style={{fontWeight: 600}}>{text[language] && text[language].title}</Typography>
				<Typography variant='body1'>{text[language] && text[language].body}</Typography>
				<Typography variant='body1'>{text[language] && text[language].body2}</Typography>
			</TextWrapper>
			<ListWrapper>
				{
					listText[language] &&
					listText[language].map((item, i) => (
						<List text={item} />
					))
				}
			</ListWrapper>
			<div ref={ref}>
				<SmoothList transitionDuration={1000} delay={200} visible={view}>
					<Typography variant='body1'>{learnText[language]}</Typography>
				</SmoothList>
			</div>
		</Wrapper>
	);
}

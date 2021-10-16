import React from 'react';
import { useApp } from '../context/Context';
import styled from 'styled-components';

// Hook for checking viewport + animation package
import { useInView } from 'react-hook-inview';
import SmoothList from 'react-smooth-list';

// Material UI
import Typography from '@mui/material/Typography';

// Comps
import TableList from './TableList';

const Wrapper = styled.div`
	background-color: #222225;
	color: white;
	padding-top: 96px;
	padding-bottom: 96px;
	@media (max-width: 900px) {
		padding-top: 48px;
		padding-bottom: 48px;
	}
`;

const TextWrapper = styled.div`
	color: white;
	& h4 { margin-bottom: 1rem; }
	& p { margin-bottom: 1rem; }
`;

const TableWrapper = styled(SmoothList)`
	max-width: 1036px;
	margin: 64px auto;
	background-color: #2C2C30;
	border-radius: 8px;
	& hr {
		margin: 0;
		border-top: 0;
		border-left: 0;
		border-right: 0;
	}
	@media (max-width: 900px) {
		background-color: transparent;
		& hr {
			display: none;
		}
	}
`;

export default function Funds() {

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
			title: 'Funds Available',
			subText: 'For more information, please contact: ',
			header: 'Portfolio Strategy',
		},
		chinese: {
			title: '基金种类',
			subText: '详情请联系: ',
			header: '投资策略',
		}
	};

	const tableText = {
		english: [
			{ aggresive: 'Active investment on synthetic stock tokens with simultaneous long-farm and short-farm to create a Delta-neutral portfolio, dynamic yield-farming and seeking arbitrage opportunities, aiming to provide the highest returns. The lock-up period is 6 months.' },
			{ balanced: 'Dynamic allocation of stable coins and actively migrate to protocols with higher APRs. The lock-up period is 6 months.' },
			{	conservative: 'Passive portfolio of stable coins on audited protocols with consistent APRs. Flexible exits.' },
		],
		chinese: [
			{ 成长型: '采用主动投资策略，在质押稳定币赢取回报之外， 在Mirror平台采用Delta中性交易做对冲流动性挖矿，以及参与其他套利机会。 旨在提供最高市场投资回报。锁仓期为6个月。' },
			{	平衡型: '参与优质代币的质押获利；质押稳定币赢取回报之外. 部分资金参与市场上最新的流动性项目。锁仓期为6个月。' },
			{	稳健型: '仅被动投资稳定币成熟项目，灵活退出机制。' },
		]
	}

	return (
		<Wrapper id='funds' className='borderClass container'>
			<TextWrapper>
				<Typography variant='h4' style={{fontWeight: 600}}>{text[language] && text[language].title}</Typography>
				<Typography variant='body1'>{text[language] && text[language].subText} <a className='linkClass' href="mailto:contact@aperture.finance">contact@aperture.finance</a></Typography>
			</TextWrapper>
			<div ref={ref}>
				<TableWrapper transitionDuration={1000} delay={200} visible={view}>
					<Typography style={{textTransform: 'uppercase', fontWeight: 500, padding: 16}} variant='body2'>{text[language] && text[language].header}</Typography>
					<hr />
					{
						tableText[language].map((item, i) => (
							<TableList key={i} text={item} />
						))
					}
				</TableWrapper>
			</div>
		</Wrapper>
	);
}

import React from 'react';
import { useApp } from '../context/Context';
import styled from 'styled-components';

// Hook for checking viewport + animation package
import { useInView } from 'react-hook-inview';
import SmoothList from 'react-smooth-list';

// Material UI
import Typography from '@mui/material/Typography';

// Comps
import Charts from './Charts';

const Wrapper = styled.div`
	background-color: white;
	padding-top: 48px;
	padding-bottom: 96px;
	min-height: 100vh;
	overflow: clip;
  width: -moz-available;
  width: -webkit-fill-available;
  width: fill-available;
  position: fixed;
  top: 0;
  z-index: -2;
	@media (max-width: 900px) {
		padding-bottom: 48px;
		& p {
			font-size: .85rem;
		}
		& p:last-child {
			margin-top: 1rem;
			font-size: .5rem;
		}
	}
`;

const CardContainer = styled(SmoothList)`
	display: flex;
	& span	{
		display: flex;
	}
	@media (max-width: 900px) {
		flex-direction: column;
		& span	{
			display: flex;
    	justify-content: space-between;
		}
	}
`

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	min-width: 170px;
	padding: 8px;
	background: #FFFFFF;
	box-shadow: 0px 1px 2px rgba(20, 28, 31, 0.02), 0px 4px 8px rgba(20, 28, 31, 0.08);
	border-radius: 8px;
	margin: 2rem 0;
	margin-right: 2rem;
	& h6 {
		margin-top: 1rem;
		font-weight: 600;
	}
	@media (max-width: 900px) {
		margin: 1rem 0;
		margin-right: 1rem;
		max-width: 140px;
		min-width: auto;
		& h6 {
			font-size: 1rem;
			margin-top: .5rem;
		}
		& p {
			font-size: .75rem;
		}
	}
	@media (max-width: 900px) and (max-height: 500px) {
		margin-right: 0rem;
		margin-left: 1rem;
	}
	@media (max-width: 600px) and (max-height: 700px) {
		margin: .5rem 0;
	}
`;

const ChartWrapper = styled.div`
	@media (max-width: 900px) and (max-height: 500px) {
		display: flex;
	}
`;

const ChartContainer = styled.div`
	display: flex;
	justify-content: space-between;
  width: 100%;
	@media (max-width: 900px) and (min-height: 500px) {
		flex-direction: column;
	}
`

const Card = (props) => {
	return (
		<CardWrapper>
			<Typography className='textColor' variant='body2'>{props.title}</Typography>
			<Typography variant='h6'>{props.number}%</Typography>
		</CardWrapper>
	)
}

export default function Performance() {

	const { language } = useApp();
	const [view, setView] = React.useState(false);
	const [width, setWidth] = React.useState(window.innerWidth);
  const el = React.useRef(null);
  const child = React.useRef(null);
  const [ref, isVisible] = useInView({
    threshold: 1,
  })

  // Function + useEffect for handling fixed background
  const handleScroll = () => {
  	let rect = el.current.getBoundingClientRect();
		if (rect.bottom < -100) {
			child.current.style.zIndex = '-5';
			el.current.style.zIndex = '-5';
		}
		else {
			child.current.style.zIndex = '-3';
			el.current.style.zIndex = '-3';
		}
  }

  React.useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", handleScroll);
    }
    const watchWidth = () => {
    	window.addEventListener('resize', function() {
    		let width = window.innerWidth;
    		setWidth(width);
    	})
    }
    watchScroll();
    watchWidth();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // Trigger setView on viewport enter
  React.useEffect(() => {
  	isVisible && setView(true)
  }, [isVisible])

	const text = {
		english: {
			header: 'Performance',
			subText: 'This is the performance of the pilot fund launched on 08/02/2021.',
			disclaimer: 'Past performance is no guarantee of future results.',
		},
		chinese: {
			header: '基金表现',
			subText: '以下为基金自08/02/2021年上线起的表现。',
			disclaimer: '过往业绩并不代表其未来表现，不保证后续策略业绩表现。',
		}
	}

	const cardText = [
		{title: 'Rolling 7-day APR', number: 101.55},
		{title: 'Rolling 7-day APY', number: 173.38},
		{title: 'Avg. APR since Inception', number: 50.59},
		{title: 'Avg. APY since Inception', number: 62.32},
	]

	const dataWeb = [
		{
			text: 'Assets Under Management',
			dataPoints: [
				{ week: '8/2/21', type: 'AUM', Value: 400813.11 },
				{ week: '8/9/21', type: 'AUM', Value: 402905.28 },
				{ week: '8/16/21', type: 'AUM', Value: 405381.06 },
				{ week: '8/23/21', type: 'AUM', Value: 407991.74 },
				{ week: '8/23/21', type: 'AUM', Value: 407991.74 },
				{ week: '9/6/21', type: 'AUM', Value: 417925.08 },
				{ week: '9/13/21', type: 'AUM', Value: 421273.71 },
				{ week: '9/20/21', type: 'AUM', Value: 424638.33 },
				{ week: '9/27/21', type: 'AUM', Value: 427899.15 },
				{ week: '10/4/21', type: 'AUM', Value: 434471.85 },
			]
		},
		{
			text: 'Cumulative Return',
			dataPoints: [
				{ week: '8/2/21', type: 'CR', Value: 0 },
				{ week: '8/9/21', type: 'CR', Value: 2092.17 },
				{ week: '8/16/21', type: 'CR', Value: 4567.95 },
				{ week: '8/23/21', type: 'CR', Value: 7178.63 },
				{ week: '8/23/21', type: 'CR', Value: 7178.63 },
				{ week: '9/6/21', type: 'CR', Value: 17111.97 },
				{ week: '9/13/21', type: 'CR', Value: 20460.60 },
				{ week: '9/20/21', type: 'CR', Value: 23825.22 },
				{ week: '9/27/21', type: 'CR', Value: 27086.04 },
				{ week: '10/4/21', type: 'CR', Value: 33658.74 },
			]
		}
	];

	return (
		<div ref={el} id='performance'>
			<Wrapper ref={child} className='container'>
				<Typography style={{fontWeight: 600}} variant='h4'>{text[language] && text[language].header}</Typography>
				<Typography style={{marginTop: '1.25rem'}} variant='body1'>{text[language] && text[language].subText}</Typography>
				<ChartWrapper>
					<ChartContainer>
						{ dataWeb.map((d, i) => <Charts key={i} text={dataWeb && d.text} data={dataWeb && d.dataPoints} /> )}
					</ChartContainer>
					<div ref={ref}>
						<CardContainer className={width < 900 && 'hiddenClass'} transitionDuration={500} delay={200} visible={view}>
							<span>
								{
									cardText.slice(0, 2).map((card, i) => (
										<Card key={i} title={card.title} number={card.number} />
									))
								}
							</span>
							<span>
								{
									cardText.slice(2, 4).map((card, i) => (
										<Card key={i} title={card.title} number={card.number} />
									))
								}
							</span>
						</CardContainer>
					</div>
				</ChartWrapper>
				<Typography variant='body1'>{text[language] && text[language].disclaimer}</Typography>
			</Wrapper>
		</div>
	);
}

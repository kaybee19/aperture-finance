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
`;

const CardContainer = styled(SmoothList)`
	display: flex;
	& div	{
		margin-right: 2rem;
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
	margin: 3rem 0;
	& h6 {
		margin-top: 1rem;
		font-weight: 600;
	}
`;

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
    watchScroll();
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
		{title: 'Rolling 7-day APR', number: 46.62},
		{title: 'Rolling 7-day APY', number: 144.75},
		{title: 'Avg. APR since Inception', number: 42.69},
		{title: 'Avg. APY since Inception', number: 52.1},
	]

	return (
		<div ref={el} id='performance'>
			<Wrapper ref={child} className='container'>
				<Typography style={{fontWeight: 600}} variant='h4'>{text[language] && text[language].header}</Typography>
				<Typography style={{marginTop: '1.25rem'}} variant='body1'>{text[language] && text[language].subText}</Typography>
				<Charts />
				<div ref={ref}>
					<CardContainer transitionDuration={500} delay={200} visible={view}>
						{
							cardText.map((card, i) => (
								<Card title={card.title} number={card.number} />
							))
						}
					</CardContainer>
				</div>
				<Typography variant='body1'>{text[language] && text[language].disclaimer}</Typography>
			</Wrapper>
		</div>
	);
}

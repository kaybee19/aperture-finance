import React from 'react';
import { useApp } from '../context/Context';
import styled from 'styled-components';
import apax from '../assets/images/apax-partner.png';
import energy from '../assets/images/energy-partner.png';
import index from '../assets/images/index-partner.png';
import waitrose from '../assets/images/waitrose-partner.png';
import into from '../assets/images/into-partner.png';

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
  border-bottom-left-radius: 0!important;
  border-bottom-right-radius: 0!important;
`;

const TextWrapper = styled.div`
	color: white;
	text-align: center;
	& h4 { margin-bottom: 1rem; }
	& p { margin-bottom: 1rem; max-width: 506px; margin: auto; }
`;

const IconWrapper = styled(SmoothList)`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-around;
	margin-top: 3rem;
	@media (max-width: 600px) {
		flex-direction: column;
		&:last-child {
			margin-top: 0;
		}
	}
`;

const Image = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	height: 32px;
	justify-content: center;
	align-items: center;
	padding: 16px 24px;
	background: #FFFFFF;
	box-shadow: 0px 1px 2px rgba(20, 28, 31, 0.02), 0px 4px 8px rgba(20, 28, 31, 0.08);
	border-radius: 8px;
	& img {
		width: auto;
		max-width: 125px;
		height: auto;
	}
	@media (max-width: 600px) {
		margin-bottom: 2rem;
		max-width: 200px;
		& img {
			max-width: 100px;
		}
	}
`;

export default function Partners() {

	const { language } = useApp();
	const [view, setView] = React.useState(false);
  const [ref, isVisible] = useInView({
    threshold: .5,
  })

  // Trigger setView on viewport enter
  React.useEffect(() => {
  	isVisible && setView(true)
  }, [isVisible])

	const text = {
		english: {
			title: 'Trusted By',
			subText: 'Volutpat sit sit malesuada massa tellus, tortor ipsum. Facilisi et sodales risus maecenas elementum pellentesque.',
		},
		chinese: {
			title: '被信任',
			subText: '周末坐的是地球的难以置信的质量，宏观本身。',
		}
	};

	const images = [
		{ apax: apax },
		{ energy: energy },
		{ index: index },
		{ waitrose: waitrose },
		{ into: into },
		{ apax: apax },
		{ energy: energy },
	]


	return (
		<Wrapper className='borderClass container'>
			<TextWrapper>
				<Typography variant='h4' style={{fontWeight: 600}}>{text[language] && text[language].title}</Typography>
				<Typography variant='body1'>{text[language] && text[language].subText}</Typography>
			</TextWrapper>
			<div ref={ref}>
				<IconWrapper transitionDuration={1000} delay={200} visible={view}>
					{
						images.slice(0,4).map((img, i) => (
							<Image>
								<img src={Object.values(img)} alt={Object.keys(img)} />
							</Image>
						))
					}
				</IconWrapper>
				<IconWrapper transitionDuration={1000} delay={200} visible={view}>
					{
						images.slice(4,7).map((img, i) => (
							<Image>
								<img src={Object.values(img)} alt={Object.keys(img)} />
							</Image>
						))
					}
				</IconWrapper>
			</div>
		</Wrapper>
	);
}

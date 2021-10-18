import React from 'react';
import { useApp } from '../context/Context';
import AppButton from './layout/AppButton';
import styled from 'styled-components';
import investorPortal from '../assets/images/investorPortal.png';

// Material UI
import Typography from '@mui/material/Typography';

const Wrapper = styled.div`
	background-color: white;
	min-height: 100vh;
	display: flex;
	overflow-y:scroll;
	overflow-x:hidden;
	justify-content: space-between;
	align-items: center;
	padding: 48px 0px 48px 96px;
	min-height: 100vh;
	width: 100%;
  position: fixed;
  top: 0;
  z-index: -2;
  @media (min-width: 1800px) {
  	justify-content: center;
  	align-items: center;
  }
  @media (max-width: 1000px) {
  	padding: 48px 0px 48px 48px;
  	flex-direction: column;
  	justify-content: flex-start;
  	align-items: flex-start;
  }
  @media (max-width: 600px) {
  	padding: 48px 0px 48px 24px;
  	align-items: center;
  }
`;

const TextWrapper = styled.div`
	& h4 {
		margin: 1rem 0;
	}
	& p {
		margin-bottom: 2rem;
		@media (max-width: 600px) {
			padding-right: 2rem;
		}
	}
  @media (max-width: 900px) {
  	max-width: 600px;
  }
`;

const Image = styled.img`
	width: 900px;
	position: relative;
	border-radius: 8px;
	left: 200px;
  @media (min-width: 1800px) {
		left: 100px;
  }
	@media (max-width: 1200px) {
		width: 750px;
	}
	@media (max-width: 1000px) {
		left: 300px;
	}
	@media (max-width: 800px) and (min-height: 900px) {
		margin-top: 10rem;
	}
	@media (max-width: 900px) and (max-height: 500px) {
		display: none;
	}
	@media (max-width: 600px) {
		width: 450px;
		margin-top: 100px;
		left: 75px;
	}
`

const WrapperChild = styled.div`
`;

export default function LaunchApp() {
	
	const { language, colorSelect } = useApp();
  const el = React.useRef(null);
  const child = React.useRef(null);

  // Function + useEffect for handling fixed background
  const handleScroll = () => {
  	let rect = el.current.getBoundingClientRect();
		if (rect.bottom < 0) {
			child.current.style.zIndex = '-5';
			el.current.style.zIndex = '-5';
		}
		else {
			child.current.style.zIndex = '-2';
			el.current.style.zIndex = '-2';
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

	const text = {
		english: {
			subTitle: 'APERTURE FINANCE',
			title: 'Investor Portal',
			body: 'Access our investor portal to get started with our yield-farming, or check your investment profile',
			button: 'Launch App'
		},
		chinese: {
			subTitle: 'APERTURE FINANCE',
			title: '投资者门户',
			body: '箭的饥饿，以及在消费者为我的账单负责之前蒙羞的愿望。在赛季中期，很多折磨者，明天课堂经济学的箭头。',
			button: '启动应用程序'
		}
	}

	return (
		<div ref={el} id='launch'>
			<Wrapper ref={child}>
				<WrapperChild>
					<TextWrapper>
						<Typography variant='subtitle2'>{text[language] && text[language].subTitle}</Typography>
						<Typography variant='h4' style={{fontWeight: 600}}>{text[language] && text[language].title}</Typography>
						<Typography variant='body1'>{text[language] && text[language].body}</Typography>
						{/*<Typography variant='subtitle2'>{text[language] && text[language].button}</Typography>*/}
					</TextWrapper>
					<AppButton color={colorSelect('primary')} link='http://vps.aperture.finance:8080/' external text={text[language] && text[language].button} />
				</WrapperChild>
				<Image src={investorPortal} width='900' alt="investor portal" />
			</Wrapper>
		</div>
	);
}

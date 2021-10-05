import React from 'react';
import { useApp } from '../context/Context';
import styled from 'styled-components';
import risks from '../assets/images/risks.png';

// Hook for checking viewport + animation package
import { useInView } from 'react-hook-inview';
import SmoothList from 'react-smooth-list';

// Material UI
import Typography from '@mui/material/Typography';

const Wrapper = styled.div`
	min-height: 85vh;
	background-color: #222225;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 96px;
	@media (max-width: 900px) {
		padding: 48px 24px;
		flex-direction: column;
	}
  @media (min-width: 1800px) {
  	justify-content: center;
  	align-items: center;
  }
`;

const TextWrapper = styled(SmoothList)`
	max-width: 506px;
	color: white;
	& h4 {
		margin-bottom: 1rem;
	}
	& p {
		margin-bottom: 1rem;
	}
`;

const Image = styled.img`
	height: auto;
	max-width: 500px;
	@media (max-width: 600px) {
		max-width: 300px;
		margin: auto;
	}
`

export default function Risks() {
	
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
			title: 'What are the risks?',
			body: 'Assets deposited Aperture Finance are covered by an industry leading coverage policy. Aperture Finance invests adopts algorithms to actively invest on behalf of the investors, as well as lend assets deposited onto Aperture Finance to heavily vetted institutions.',
			body2: 'Please note that digital currency is not legal tender, is not backed by the government, and is not subject to FDIC or SIPC protections. This is not a risk-free product.',
		},
		chinese: {
			title: '风险说明',
			body: 'Aperture Finance购买业内领先保险以防范智能合约漏洞与黑客风险。Aperture Finance使用多种策略进行投资，并将部分资金借给经过多重审核的机构。',
			body2: '请注意，数字货币不是法定货币，不受政府支持，不受 FDIC 或 SIPC 保护。这不是无风险的产品。',
		}
	}

	return (
		<Wrapper id='risks' className='borderClass'>
			<div ref={ref}>
				<TextWrapper transitionDuration={1000} delay={200} visible={view}>
					<Typography variant='h4' style={{fontWeight: 600}}>{text[language] && text[language].title}</Typography>
					<Typography variant='body1'>{text[language] && text[language].body}</Typography>
					<Typography variant='body1'>{text[language] && text[language].body2}</Typography>
				</TextWrapper>
			</div>
			<Image src={risks} alt='risks' />
		</Wrapper>
	);
}

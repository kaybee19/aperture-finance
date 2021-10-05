import React from 'react';
import AppButton from './layout/AppButton';
import styled from 'styled-components';
import { useApp } from '../context/Context';

// Hook for checking viewport + animation package
import { useInView } from 'react-hook-inview';
import SmoothList from 'react-smooth-list';

// Material UI
import Typography from '@mui/material/Typography';

const ContentWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	&:first-child {
		padding-top: 5rem;
	}
	@media (max-width: 900px) {
		flex-direction: column!important;
	}
`;

const TextWrapper = styled(SmoothList)`
	width: 47.5%;
	@media (max-width: 900px) {
		width: 95%;
	}
`;

const Image = styled.img`
	@media (max-width: 600px) {
		width: 100%;
	}
`;

export default function Content(props) {

	const { colorSelect } = useApp();
	const [view, setView] = React.useState(false);
  const [ref, isVisible] = useInView({
    threshold: .5,
  })

  // Trigger setView on viewport enter
  React.useEffect(() => {
  	isVisible && setView(true)
  }, [isVisible])

	const { text } = props;

	return (
		<ContentWrapper ref={ref} id='contentWrapper' style={ props.reverse && { flexDirection: 'row-reverse' }}>
			{
				text !== undefined &&
				<TextWrapper transitionDuration={1000} delay={200} visible={view}>
					<Typography variant='h5' style={{fontWeight: 600}}>{text.heading}</Typography>
					<Typography className='textColor' variant='body1'>{text.subText}</Typography>
					{
						text.buttonText &&
						<AppButton text={text.buttonText} color={colorSelect('secondary')} />
					}
				</TextWrapper>
			}
			<div>
				<Image src={props.image} className='animateImg' alt='' />
			</div>
		</ContentWrapper>
	);
}
